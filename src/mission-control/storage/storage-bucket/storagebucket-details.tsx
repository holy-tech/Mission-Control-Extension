import { Renderer } from "@k8slens/extensions";
import React from "react";
import { StorageBucket } from "./storagebucket"

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class StorageBucketDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<StorageBucket>> {
  render() {
    return (
      <div>
        <DrawerTitle children="Packages" />
          <DrawerItem name={ "name" }>
            { this.props.object.getName() }
          </DrawerItem>
      </div>
    )
  }
}
