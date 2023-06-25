import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Provider } from "./providers"

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class ProviderDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<Provider>> {
  render() {
    return (
      <div>
        <DrawerTitle title="Hello" />
        <DrawerItem name="Message">
          Hello { this.props.object.getName() }!
        </DrawerItem>
      </div>
    )
  }
}
