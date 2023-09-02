import { Renderer } from "@k8slens/extensions";
import React from "react"
import { missionkeysStore } from "./missionkeys-store"
import { MissionKey } from "./missionkeys"

enum sortBy {
    name = "name",
    namespace = "namespace",
    age = "age",
}

export class MissionKeyPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="Missionkeys" store={missionkeysStore}
          sortingCallbacks={{
            [sortBy.name]: (missionkey: MissionKey) => missionkey.getName(),
            [sortBy.namespace]: (missionkey: MissionKey) => missionkey.getNs(),
            [sortBy.age]: (missionkey: MissionKey) => missionkey.metadata.creationTimestamp
          }}
          searchFilters={[
            (missionkey: MissionKey) => missionkey.getSearchFields()
          ]}
          renderHeaderTitle="Missionkeys"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Data", className: "data"},
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(missionkey: MissionKey) => [
            missionkey.getName(),
            missionkey.getNs(),
            <Renderer.Component.Badge
              scrollable
              key={missionkey.spec.data}
              label={missionkey.spec.data}
              expandable={false}
            />,
            missionkey.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
