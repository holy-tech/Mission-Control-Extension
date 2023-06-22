import { Renderer} from "@k8slens/extensions";
import { Provider } from "./providers";

export class ProvidersApi extends Renderer.K8sApi.KubeApi<Provider> {
}

export const providersApi = new ProvidersApi({
  objectConstructor: Provider
});

export class ProvidersStore extends Renderer.K8sApi.KubeObjectStore<Provider> {
  api = providersApi
}

export const providersStore = new ProvidersStore();
Renderer.K8sApi.apiManager.registerStore(providersStore);
