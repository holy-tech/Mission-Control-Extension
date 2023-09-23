import { Renderer } from "@k8slens/extensions";
import React from "react"
import { virtualMachineStore } from "./virtualmachine-store"
import { VirtualMachine } from "./virtualmachine"

enum sortBy {
    name = "name",
    location = "location",
    machinetype = "machinetype",
    image = "image",
    age = "age",
    network = "network",
}

export class VirtualMachinePage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="VirtualMachine" store={virtualMachineStore}
          sortingCallbacks={{
            [sortBy.name]: (virtualmachine: VirtualMachine) => virtualmachine.getName(),
            [sortBy.location]: (virtualmachine: VirtualMachine) => virtualmachine.spec.forProvider.location,
            [sortBy.machinetype]: (virtualmachine: VirtualMachine) => virtualmachine.spec.forProvider.machineType,
            [sortBy.image]: (virtualmachine: VirtualMachine) => virtualmachine.spec.forProvider.image,
            [sortBy.network]: (virtualmachine: VirtualMachine) => virtualmachine.spec.forProvider.network,
            [sortBy.age]: (virtualmachine: VirtualMachine) => virtualmachine.metadata.creationTimestamp
          }}
          searchFilters={[
            (virtualmachine: VirtualMachine) => virtualmachine.getSearchFields()
          ]}
          renderHeaderTitle="VirtualMachine"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Location", className: "location", sortBy: sortBy.location },
            { title: "Machine Type", className: "machinetype", sortBy: sortBy.machinetype },
            { title: "Image", className: "image", sortBy: sortBy.image },
            { title: "Network", className: "network", sortBy: sortBy.network },
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(virtualmachine: VirtualMachine) => [
            virtualmachine.getName(),
            virtualmachine.spec.forProvider.location,
            virtualmachine.spec.forProvider.machineType,
            virtualmachine.spec.forProvider.image,
            virtualmachine.spec.forProvider.network,
            virtualmachine.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
