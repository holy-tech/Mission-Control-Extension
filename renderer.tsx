import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, MissionPage } from "./src/mission-control/crossplane-config/missions-page"
import { Mission } from "./src/mission-control/crossplane-config/missions"
import { MissionDetails } from "./src/mission-control/crossplane-config/missions-details"
import React from "react"

const {
  Component: {
    Icon,
  }
} = Renderer;

export default class ExampleExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "missions",
      components: {
        Page: () => <MissionPage extension={this}/>,
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
      target: { pageId: "missions" },
      title: "Missions",
      components: {
        Icon: () => <Icon material="arrow"/>,
      }
    }
  ]

  kubeObjectDetailItems = [
    {
      kind: Mission.kind,
      apiVersions: ["mission.mission-control.apis.io/v1alpha1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<Mission>) => <MissionDetails {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("Mission Control extension added")
  }
}
