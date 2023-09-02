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
          <DrawerItem name={ "key" }>
            <Renderer.Component.Input
              multiLine={true}
              theme="round-black"
              className="box grow"
              value={ this.props.object.spec.data }
            />
          </DrawerItem>
      </div>
    )
  }
}
