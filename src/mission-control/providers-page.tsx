import { Renderer } from "@k8slens/extensions";
import React from "react"
import { providersStore } from "./providers-store"
import { Provider } from "./providers"

import path from "path";

enum sortBy {
    name = "name",
    namespace = "namespace",
}

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

export class ProviderPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="Certicates" store={providersStore}
          sortingCallbacks={{
            [sortBy.name]: (provider: Provider) => provider.getName(),
            [sortBy.namespace]: (provider: Provider) => provider.metadata.namespace,
          }}
          searchFilters={[
            (provider: Provider) => provider.getSearchFields()
          ]}
          renderHeaderTitle="Providers"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
          ]}
          renderTableContents={(provider: Provider) => [
            provider.getName(),
            provider.metadata.namespace
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
