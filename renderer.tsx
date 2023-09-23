import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, MissionPage } from "./src/mission-control/crossplane-config/missions/missions-page"
import { MissionKeyPage } from "./src/mission-control/crossplane-config/missionkeys/missionkeys-page"
import { VirtualMachinePage } from "./src/mission-control/compute/virtual-machine/virtualmachine-page"
import { StorageBucketPage } from "./src/mission-control/storage/storage-bucket/storagebucket-page"
import { Mission } from "./src/mission-control/crossplane-config/missions/missions"
import { MissionKey } from "./src/mission-control/crossplane-config/missionkeys/missionkeys"
import { VirtualMachine } from "./src/mission-control/compute/virtual-machine/virtualmachine"
import { StorageBucket } from "./src/mission-control/storage/storage-bucket/storagebucket"
import { MissionDetails } from "./src/mission-control/crossplane-config/missions/missions-details"
import { MissionKeyDetails } from "./src/mission-control/crossplane-config/missionkeys/missionkeys-details"
import { VirtualMachineDetails } from "./src/mission-control/compute/virtual-machine/virtualmachine-details"
import { StorageBucketDetails } from "./src/mission-control/storage/storage-bucket/storagebucket-details"
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
    },
    {
      id: "missionkeys",
      components: {
        Page: () => <MissionKeyPage extension={this}/>,
      }
    },
    {
      id: "virtualmachine",
      components: {
        Page: () => <VirtualMachinePage extension={this}/>,
      }
    },
    {
      id: "storagebucket",
      components: {
        Page: () => <StorageBucketPage extension={this}/>,
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
    },
    {
      parentId: "mission-control",
      target: { pageId: "missionkeys" },
      title: "Mission Keys",
      components: {
        Icon: () => <Icon material="arrow"/>,
      }
    },
    {
      id: "compute",
      title: "Compute",
      components: {
        Icon: ExampleIcon,
      }
    },
    {
      parentId: "compute",
      target: { pageId: "virtualmachine" },
      title: "Virtual Machine",
      components: {
        Icon: () => <Icon material="arrow"/>,
      }
    },
    {
      id: "storage",
      title: "Storage",
      components: {
        Icon: ExampleIcon,
      }
    },
    {
      parentId: "storage",
      target: { pageId: "storagebucket" },
      title: "Storage Bucket",
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
    },
    {
      kind: MissionKey.kind,
      apiVersions: ["mission.mission-control.apis.io/v1alpha1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<MissionKey>) => <MissionKeyDetails {...props} />
      }
    },
    {
      kind: VirtualMachine.kind,
      apiVersions: ["compute.mission-control.apis.io/v1alpha1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<VirtualMachine>) => <VirtualMachineDetails {...props} />
      }
    },
    {
      kind: StorageBucket.kind,
      apiVersions: ["storage.mission-control.apis.io/v1alpha1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<StorageBucket>) => <StorageBucketDetails {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("Mission Control extension added")
  }
}
