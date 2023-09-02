import { Renderer } from "@k8slens/extensions";
import React from "react";
import { MissionKey } from "./missionkeys"

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class MissionKeyDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<MissionKey>> {
  render() {
    return (
      <div>
        <DrawerTitle children="Packages" />
          <DrawerItem name={ this.props.object.spec.data }>
            { this.props.object.spec.data }!
          </DrawerItem>
      </div>
    )
  }
}
