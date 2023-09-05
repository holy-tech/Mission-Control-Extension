import { Renderer} from "@k8slens/extensions";

type CredentialConfig = {
  name: string;
  namespace: string;
  key: string;
}

type PackageConfig = {
  provider: string;
  projectID: string;
  credentials: CredentialConfig;
}

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
    packages: PackageConfig[];
  }
  status: {}
}
