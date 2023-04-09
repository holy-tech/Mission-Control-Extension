import { Common } from "@k8slens/extensions";

// The kind must be different from KubernetesCluster's kind
export const kind = "Mission";

export class Mission extends Common.Catalog.CatalogEntity {
  apiVersion: string;
  kind: string;
}