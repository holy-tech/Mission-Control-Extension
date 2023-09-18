import { Renderer } from "@k8slens/extensions";
import React from "react"
import { virtualMachineStore } from "./virtualmachine-store"
import { VirtualMachine } from "./virtualmachine"

enum sortBy {
    name = "name",
    namespace = "namespace",
    age = "age",
}

export class VirtualMachinePage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="VirtualMachine" store={virtualMachineStore}
          sortingCallbacks={{
            [sortBy.name]: (virtualmachine: VirtualMachine) => virtualmachine.getName(),
            [sortBy.namespace]: (virtualmachine: VirtualMachine) => virtualmachine.getNs(),
            [sortBy.age]: (virtualmachine: VirtualMachine) => virtualmachine.metadata.creationTimestamp
          }}
          searchFilters={[
            (virtualmachine: VirtualMachine) => virtualmachine.getSearchFields()
          ]}
          renderHeaderTitle="VirtualMachine"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Machine Type", className: "machinetype"},
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(virtualmachine: VirtualMachine) => [
            virtualmachine.getName(),
            virtualmachine.getNs(),
            virtualmachine.spec.forProvider.machineType,
            virtualmachine.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
