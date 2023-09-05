import { Renderer } from "@k8slens/extensions";
import React from "react"
import { missionsStore } from "./missions-store"
import { Mission } from "./missions"

import path from "path";

enum sortBy {
    name = "name",
    namespace = "namespace",
    age = "age",
}

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

export class MissionPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="Missions" store={missionsStore}
          sortingCallbacks={{
            [sortBy.name]: (mission: Mission) => mission.getName(),
            [sortBy.age]: (mission: Mission) => mission.metadata.creationTimestamp
          }}
          searchFilters={[
            (mission: Mission) => mission.getSearchFields()
          ]}
          renderHeaderTitle="Missions"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Packages", className: "packages"},
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(mission: Mission) => [
            mission.getName(),
            mission.spec.packages.map(function(object, i){return object.provider}).join(", "),
            mission.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
