import { Common } from "@k8slens/extensions"
import { Mission } from "../entities/missions"

class MissionCategory extends Common.Catalog.CatalogCategory {
    readonly apiVersion: string = "catalog.k8lens.dev/v1alpha1";
    readonly kind: string = "CatalogCategory";
    readonly metadata: Common.Catalog.CatalogCategoryMetadata = {
        "name": "Missions",
        "icon": "rocket",
    };
    readonly spec: Common.Catalog.CatalogCategorySpec = {
        group: "v1.missions",
        versions: [
            {
                name: "",
                entityClass: Mission as any 
            },
        ],
        names: {
            kind: "Missions",
        }
    };
}

export default MissionCategory
