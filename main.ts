import { Main, Common } from "@k8slens/extensions";
import { MissionStore } from "./src/stores/missions"
import { Mission, kind } from "./src/entities/missions"

import { observable, reaction, action } from "mobx";

/**
 * Main.LensExtension api allows you to access, configure, and customize Lens data add
 * custom application menu items, and generally run custom code in Lens'
 * main process.
 * 
 * See more details: <https://docs.k8slens.dev/>
 */
export default class MissionMain extends Main.LensExtension {
  syncTimer: NodeJS.Timeout
  missions: Mission[] = [];
  obsMission = observable.array<Mission>([]);

  async onActivate(): Promise<void> {
    console.log("Missions-Extension: activated");
    const missionStore = new MissionStore();
    missionStore.loadExtension(this)

    reaction(() => missionStore.name, () => {
      this.missions = [];
    });
    this.addCatalogSource("mission", this.obsMission) 
  }

  @action async syncMissions(): Promise<void> {
    if (this.missions.length === 0) {
      this.missions = await this.getMissions();
    }
    console.log("Missions: syncing missions");

    const updatedMissions: Mission[] = [];
    try {
      const updatedMissions = await this.getMissions();
      this.obsMission.replace(updatedMissions);
    } catch(error) {
      console.error("Missions: failed to sync missions", error);
      this.obsMission.clear();
    }

    this.syncTimer = global.setTimeout(async () => {
      await this.syncMissions();
    }, 1000 * 60 * 3);
  }

  private getMissions(): Mission[]{
    return [new Mission({
      metadata: {
        uid: "1",
        name: "hello",
        labels: {},
      },
      status: {
        phase: "PhaseStatusHere"
      },
      spec: {

      }
    })];
  }
}
