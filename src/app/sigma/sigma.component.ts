import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input
} from "@angular/core";
import Graph from "graphology";
import { Sigma } from "sigma";

@Component({
  selector: "sigma",
  template: "<div #container></div>",
  styleUrls: ["./sigma.component.scss"]
})
export class SigmaComponent implements AfterViewInit, OnDestroy {
  @ViewChild("container") container: ElementRef | null = null;
  @Input("graph") graph: Graph = new Graph();
  sigma?: Sigma;

  ngAfterViewInit(): void {
    if (this.container)
      this.sigma = new Sigma(this.graph, this.container.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.sigma) {
      this.sigma.kill();
    }
  }
}
