import { Renderer} from "@k8slens/extensions";
import { MissionKey } from "./missionkeys";

export class MissionkeysApi extends Renderer.K8sApi.KubeApi<MissionKey> {
}

export const missionkeysApi = new MissionkeysApi({
  objectConstructor: MissionKey
});

export class MissionkeysStore extends Renderer.K8sApi.KubeObjectStore<MissionKey> {
  api = missionkeysApi
}

export const missionkeysStore = new MissionkeysStore();
Renderer.K8sApi.apiManager.registerStore(missionkeysStore);
