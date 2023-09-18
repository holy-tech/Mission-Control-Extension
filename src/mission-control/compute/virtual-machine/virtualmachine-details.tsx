import { Renderer } from "@k8slens/extensions";
import React from "react";
import { VirtualMachine } from "./virtualmachine"

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class VirtualMachineDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<VirtualMachine>> {
  render() {
    return (
      <div>
        <DrawerTitle children="Packages" />
          <DrawerItem name={ "name" }>
            { this.props.object.spec.forProvider.name }
          </DrawerItem>
      </div>
    )
  }
}
