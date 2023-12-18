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

export const TabReleaseProvider: FunctionComponent<ProviderProps> = ({
  children,
  config,
}) => {
  const [flags, setFlags] = useState<Flags>({});

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const featureFlags = await listEvaluationFlags(
          config.userId,
          config.tenantId
        );
        if (featureFlags && featureFlags.getEvaluationFlagList()) {
          setFlags(
            featureFlags.getEvaluationFlagList().reduce((acc: Flags, curr) => {
              const name = camelCase(curr.getName());
              acc[name] = curr.getEnabled();
              return acc;
            }, {})
          );
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchFlags();
  }, []);

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
