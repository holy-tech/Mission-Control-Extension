import { Main } from "@k8slens/extensions";

export default class ExampleExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log('Mission Control activated');
  }

  onDeactivate() {
    console.log('Mission Control de-activated');
  }
}
