import { Common } from "@k8slens/extensions"

class MissionCategory extends Common.Catalog.CatalogCategory {
    readonly apiVersion: string = "catalog.k8lens.dev/v1alpha1";
    readonly kind: string = "CatalogCategory";
    readonly metadata: Common.Catalog.CatalogCategoryMetadata = {
        "name": "Missions",
        "icon": "rocket",
    };
    readonly spec: Common.Catalog.CatalogCategorySpec = {
        group: "v1.missions",
        versions: [],
        names: {
            kind: "Missions",
        }
    };
}

export default MissionCategory
