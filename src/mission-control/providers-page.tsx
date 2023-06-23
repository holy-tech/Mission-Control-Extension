import { Renderer } from "@k8slens/extensions";
import React from "react"
import { providersStore } from "./providers-store"
import { Provider } from "./providers"

import path from "path";

enum sortBy {
    name = "name",
    namespace = "namespace",
    package = "package",
    installed = "installed",
    healthy = "healthy",
    age = "age",
}

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

export class ProviderPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="Providers" store={providersStore}
          sortingCallbacks={{
            [sortBy.name]: (provider: Provider) => provider.getName(),
            [sortBy.package]: (provider: Provider) => provider.spec.package,
            [sortBy.installed]: (provider: Provider) => provider.status.conditions.find(c => c.type == "Installed").status,
            [sortBy.healthy]: (provider: Provider) => provider.status.conditions.find(c => c.type == "Healthy").status,
            [sortBy.age]: (provider: Provider) => provider.metadata.creationTimestamp
          }}
          searchFilters={[
            (provider: Provider) => provider.getSearchFields()
          ]}
          renderHeaderTitle="Providers"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Package", className: "package", sortBy: sortBy.package },
            { title: "Installed", className: "installed", sortBy: sortBy.installed },
            { title: "Healthy", className: "healthy", sortBy: sortBy.healthy },
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(provider: Provider) => [
            provider.getName(),
            provider.spec.package,
            provider.status.conditions.find(c => c.type == "Installed").status,
            provider.status.conditions.find(c => c.type == "Healthy").status,
            provider.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
