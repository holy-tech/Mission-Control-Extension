import { Renderer} from "@k8slens/extensions";

export class MissionKey extends Renderer.K8sApi.KubeObject {
  static kind = "MissionKey"
  static namespaced = true
  static apiBase = "/apis/mission.mission-control.apis.io/v1alpha1/missionkeys"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    creationTimestamp: string;
  }
  spec: {
    data: string;
    name: string;
    type: string;
  }
  status: {}
}
