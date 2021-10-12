import { Component } from "@angular/core";
import Graph from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import circularLayout from "graphology-layout/circular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-sigma-example";
  graph: Graph;

  constructor() {
    this.graph = erdosRenyi(Graph, { order: 100, probability: 0.1 });
    circularLayout.assign(this.graph);
  }
}
