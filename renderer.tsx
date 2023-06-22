import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ProviderPage } from "./src/mission-control/providers-page"
import { Provider } from "./src/mission-control/providers"
import { ProviderDetails } from "./src/mission-control/providers-details"
import React from "react"

export default class ExampleExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "providers",
      components: {
        Page: () => <ProviderPage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "providers" },
      title: "Provider",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]

  kubeObjectDetailItems = [
    {
      kind: Provider.kind,
      apiVersions: ["pkg.crossplane.io/v1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<Provider>) => <ProviderDetails {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("Mission Control extension added")
  }
}
