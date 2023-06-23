import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ProviderPage } from "./src/mission-control/providers-page"
import { Provider } from "./src/mission-control/providers"
import { ProviderDetails } from "./src/mission-control/providers-details"
import React from "react"

const {
  Component: {
    Icon,
  }
} = Renderer;

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
      id: "mission-control",
      title: "Mission Control",
      components: {
        Icon: ExampleIcon,
      }
    },
    {
      parentId: "mission-control",
      target: { pageId: "providers" },
      title: "Providers",
      components: {
        Icon: () => <Icon material="arrow"/>,
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
