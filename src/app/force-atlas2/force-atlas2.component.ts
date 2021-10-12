import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import Graph from "graphology";
import FA2LayoutSupervisor, {
  FA2LayoutSupervisorParameters
} from "graphology-layout-forceatlas2/worker";

@Component({
  selector: "force-atlas2",
  templateUrl: "./force-atlas2.component.html",
  styleUrls: ["./force-atlas2.component.scss"]
})
export class ForceAtlas2Component implements OnInit, OnDestroy {
  @Input() graph?: Graph;
  @Input() settings: FA2LayoutSupervisorParameters = {};
  fa2?: FA2LayoutSupervisor;
  isRunning = false;

  ngOnInit() {
    if (this.graph)
      this.fa2 = new FA2LayoutSupervisor(this.graph, this.settings);
  }

  ngOnDestroy() {
    if (this.fa2) this.fa2.kill();
  }

  toggle() {
    console.log(this);
    if (this.fa2) {
      if (this.isRunning) this.fa2.stop();
      else this.fa2.start();
      this.isRunning = !this.isRunning;
    }
  }
}
