import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { camelCase } from "lodash";
import { listEvaluationFlags } from "./queries/evalutation_queries";
import { store } from "./store";

export interface Config {
  tenantId: string;
  userId: string;
}

export interface ProviderProps {
  children: ReactNode;
  config: Config;
}

export type Flags = Record<string, boolean>;

const TabReleaseContext = createContext<Flags | undefined>(undefined);

export const reactiveFlags = (flag: string, fallback?: boolean) => {
  // Return the current flag value
  const currentValue = store.getState().getFlag(flag) ?? fallback ?? undefined;

  // Optionally, return a function to subscribe to changes
  const subscribeToChanges = (
    callback: (value: boolean | undefined) => void
  ) => {
    return store.subscribe((state) => {
      const newValue = state.getFlag(flag) ?? fallback ?? undefined;
      callback(newValue);
    });
  };

  return { currentValue, subscribeToChanges };
};

export const TabReleaseProvider: FunctionComponent<ProviderProps> = ({
  children,
  config,
}) => {
  const [flags, setFlags] = useState<Flags>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const featureFlags = await listEvaluationFlags(
          config.userId,
          config.tenantId
        );
        if (featureFlags && featureFlags.getEvaluationFlagList()) {
          const userFlags = featureFlags
            .getEvaluationFlagList()
            .reduce((acc: Flags, curr) => {
              const name = camelCase(curr.getName());
              acc[name] = curr.getEnabled();
              return acc;
            }, {});
          setFlags(userFlags);
          store.getState().setFlags(userFlags);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsDataLoaded(true);
      }
    };

    fetchFlags();
  }, []);

  if (!isDataLoaded) {
    return null;
  }

  return (
    <TabReleaseContext.Provider value={flags}>
      {children}
    </TabReleaseContext.Provider>
  );
};

export const useFlags = (): Flags => {
  const context = useContext(TabReleaseContext);
  if (context === undefined) {
    throw new Error("useFlags must be used within a TabReleaseProvider");
  }
  return context;
};
