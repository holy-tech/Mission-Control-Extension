import { Renderer} from "@k8slens/extensions";
import { StorageBucket } from "./storagebucket";

export class StorageBucketApi extends Renderer.K8sApi.KubeApi<StorageBucket> {
}

export const storageBucketApi = new StorageBucketApi({
  objectConstructor: StorageBucket
});

export class StorageBucketStore extends Renderer.K8sApi.KubeObjectStore<StorageBucket> {
  api = storageBucketApi
}

export const storageBucketStore = new StorageBucketStore();
Renderer.K8sApi.apiManager.registerStore(storageBucketStore);
