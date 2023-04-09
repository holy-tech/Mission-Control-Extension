import { Common } from "@k8slens/extensions";
import { observable, makeObservable, toJS } from "mobx";

export type MissionModel = {
  name: string;
};

export class MissionStore extends Common.Store.ExtensionStore<MissionModel> {

  @observable name = "myFakeMission";

  public constructor() {
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
    return toJS({
      name: this.name
    });
  }
}