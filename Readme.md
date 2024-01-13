# Tab Release SDK Documentation

<!-- TOC -->
* [Overview](#overview)
* [Installation](#installation)
* [Provider](#provider)
* [Usage](#usage)
* [API](#api)
  * [TabReleaseProvider](#tabreleaseprovider)
      * [Props](#props)
  * [reactiveFlags](#reactiveflags)
    * [Parameters](#parameters)
  * [Config](#config)
    * [Properties](#properties)
* [Contributing](#contributing)
<!-- TOC -->

## Overview
Tab release SDK provides a convenient way to manage and use feature flags within your applications. It includes utilities for setting up feature flags, accessing them, and reacting to their changes.

## Installation
To use this SDK in your project, first install it using npm or yarn:

```Bash
npm install @tabrelease/react-sdk
```

```Bash
yarn add @tabrelease/react-sdk
```

## Provider
Wrap your application with the TabReleaseProvider to provide the necessary context for the feature flags.

```Typescript
import { TabReleaseProvider, Config } from '@tabrelease/react-sdk';

const config: Config = {
  tenantId: 'your-tenant-id',
  userId: 'unique-id-to-identify-the-user',
};

const App = () => (
  <TabReleaseProvider config={config}>
    <YourApp />
  </TabReleaseProvider>
);
```

## Usage
Using static flag:

```Typescript
import { useFlags } from '@tabrelease/react-sdk';

export const Dashboard = () => {
    const flags = useFlags();
    
    return (
        ...
        { flags.newFeature && <NewFeature/> }
        ...
    )
};
```

Using reactive flag:

```Typescript
import { reactiveFlags } from '@tabrelease/react-sdk';

export const Dashboard = () => {
    const shouldRenderFeature = reactiveFlags("newFeature");
    
    return (
        ...
        { shouldRenderFeature && <NewFeature /> }
        ...
    )
}
```

Using reactive flag with fallback:

```Typescript
    ...
    // Fallback to false, if there is no boolean value 
    // available for the flag for the given user
    const shouldRenderFeature = reactiveFlags("newFeature", false);
    ...
```

## API
### TabReleaseProvider
A context provider for feature flags. 

##### Props:

| Name     | Description                                   | Required |
|----------|-----------------------------------------------|----------|
| children | The child component                           | Yes      |
| config   | Configuration object with tenantId and userId | Yes      |

### reactiveFlags
A hook to access and subscribe to feature flag values.

#### Parameters:

| Name     | Description                               | Required |
|----------|-------------------------------------------|----------|
| flag     | Name of the flag                          | Yes      |
| fallback | The fallback value if the flag is not set | No       |

### Config
An interface for the configuration object.

#### Properties:

| Name     | Description                           | Required |
|----------|---------------------------------------|----------|
| tenantId | A string representing the tenant ID   | Yes      |
| userId   | Unique string ID to identify the user | Yes      |

## Contributing
We welcome contributions to this SDK. If you have any questions, suggestions, or issues please raise an issue or submit a pull request.