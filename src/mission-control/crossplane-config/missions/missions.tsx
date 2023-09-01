import { Renderer} from "@k8slens/extensions";

export class Mission extends Renderer.K8sApi.KubeObject {
  static kind = "Mission"
  static namespaced = false
  static apiBase = "/apis/mission.mission-control.apis.io/v1alpha1/missions"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    creationTimestamp: string;
  }
  spec: {
    packages: string[];
  }
  status: {}
}
