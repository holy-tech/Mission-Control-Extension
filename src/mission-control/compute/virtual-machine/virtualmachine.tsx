import { Renderer} from "@k8slens/extensions";

export class VirtualMachine extends Renderer.K8sApi.KubeObject {
  static kind = "VirtualMachine"
  static namespaced = true
  static apiBase = "/apis/compute.mission-control.apis.io/v1alpha1/virtualmachine"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    selfLink: string;
    creationTimestamp: string;
  }
  spec: {
    missionRef: string;
    forProvider: {
      name: string
      location: string
      machineType: string
      image: string
      network: string
    }
  }
  status: {}
}
