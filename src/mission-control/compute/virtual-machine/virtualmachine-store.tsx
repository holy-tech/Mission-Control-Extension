import { Renderer} from "@k8slens/extensions";
import { VirtualMachine } from "./virtualmachine";

export class VirtualMachineApi extends Renderer.K8sApi.KubeApi<VirtualMachine> {
}

export const virtualMachineApi = new VirtualMachineApi({
  objectConstructor: VirtualMachine
});

export class VirtualMachineStore extends Renderer.K8sApi.KubeObjectStore<VirtualMachine> {
  api = virtualMachineApi
}

export const virtualMachineStore = new VirtualMachineStore();
Renderer.K8sApi.apiManager.registerStore(virtualMachineStore);
