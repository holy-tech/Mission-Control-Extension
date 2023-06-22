import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./src/example-page"
import { ProviderPage } from "./src/mission-control/providers-page"
import { ExamplePodDetails } from "./src/example-pod-details"
import React from "react"

export default class ExampleExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "hello", // hello-world:foo
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    },
    {
      id: "providers",
      components: {
        Page: () => <ProviderPage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "hello" },
      title: "Hello World",
      components: {
        Icon: ExampleIcon,
      }
    },
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
      kind: "Pod",
      apiVersions: ["v1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Pod>) => <ExamplePodDetails {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("hello world")
  }
}
