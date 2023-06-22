import { Renderer} from "@k8slens/extensions";

export class Provider extends Renderer.K8sApi.KubeObject {
  static kind = "Provider"
  static namespaced = false
  static apiBase = "/apis/pkg.crossplane.io/v1/providers"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
  }
  spec: {
    package: string;
  }
  status: {
    conditions: {
      lastTransitionTime: string;
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[];
  }
}
