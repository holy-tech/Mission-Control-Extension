import { Renderer, Main } from "@k8slens/extensions";

import MissionCategory from "./src/categories/missions"

export default class OciImageExtensionRenderer extends Renderer.LensExtension {
  onActivate() {
    Main?.Catalog.catalogCategories.add(new MissionCategory())
    Renderer?.Catalog.catalogCategories.add(new MissionCategory())
  }
}
