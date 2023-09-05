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
        <DrawerTitle children="Packages" />
        {this.props.object.spec.packages.map(function(object, i){
          return (
            <DrawerItem name={ object.provider }>
              Hello { object.provider }!
            </DrawerItem>
          )
        })}
      </div>
    )
  }
}
