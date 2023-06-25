import { Renderer} from "@k8slens/extensions";
import { Mission } from "./missions";

export class MissionsApi extends Renderer.K8sApi.KubeApi<Mission> {
}

export const missionsApi = new MissionsApi({
  objectConstructor: Mission
});

export class MissionsStore extends Renderer.K8sApi.KubeObjectStore<Mission> {
  api = missionsApi
}

export const missionsStore = new MissionsStore();
Renderer.K8sApi.apiManager.registerStore(missionsStore);
