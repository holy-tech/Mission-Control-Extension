import { Renderer} from "@k8slens/extensions";

export class StorageBucket extends Renderer.K8sApi.KubeObject {
  static kind = "StorageBucket"
  static namespaced = false
  static apiBase = "/apis/storage.mission-control.apis.io/v1alpha1/storagebuckets"

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
      location: string
    }
  }
  status: {}
}
