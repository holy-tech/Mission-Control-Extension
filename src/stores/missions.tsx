import { Common } from "@k8slens/extensions";
import { observable, makeObservable } from "mobx";

export type MissionModel = {
  name: string;
};

export class MissionStore extends Common.Store.ExtensionStore<MissionModel> {

  @observable name = "myFakeMission";

  private constructor() {
    super({
      configName: "mission-store",
      defaults: {
        name: "myFakeMission"
      }
    });
    makeObservable(this);
  }

  protected fromStore({ name }: MissionModel): void {
    this.name = name;
  }

  toJSON(): MissionModel {
    return {
      name: this.name
    };
  }
}