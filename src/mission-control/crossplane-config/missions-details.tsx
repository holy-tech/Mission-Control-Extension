import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Mission } from "./missions"

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class MissionDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<Mission>> {
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
