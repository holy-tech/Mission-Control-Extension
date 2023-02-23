import { Main } from "@k8slens/extensions";

/**
 * Main.LensExtension api allows you to access, configure, and customize Lens data add
 * custom application menu items, and generally run custom code in Lens'
 * main process.
 * 
 * See more details: <https://docs.k8slens.dev/>
 */
export default class YourExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log("activated");
  }
}
