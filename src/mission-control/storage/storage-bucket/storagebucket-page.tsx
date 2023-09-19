import { Renderer } from "@k8slens/extensions";
import React from "react"
import { storageBucketStore } from "./storagebucket-store"
import { StorageBucket } from "./storagebucket"

enum sortBy {
    name = "name",
    location = "location",
    age = "age",
}

export class StorageBucketPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
        <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="StorageBucket" store={storageBucketStore}
          sortingCallbacks={{
            [sortBy.name]: (storagebucket: StorageBucket) => storagebucket.getName(),
            [sortBy.location]: (storagebucket: StorageBucket) => storagebucket.spec.forProvider.location,
            [sortBy.age]: (storagebucket: StorageBucket) => storagebucket.metadata.creationTimestamp
          }}
          searchFilters={[
            (storagebucket: StorageBucket) => storagebucket.getSearchFields()
          ]}
          renderHeaderTitle="StorageBucket"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Location", className: "location", sortBy: sortBy.location },
            { title: "Age", className: "age", sortBy: sortBy.age },
          ]}
          renderTableContents={(storagebucket: StorageBucket) => [
            storagebucket.getName(),
            storagebucket.spec.forProvider.location,
            storagebucket.getAge()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
