import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-area-polar',
  templateUrl: './area-polar.component.html',
  styles: [
  ]
})
export class AreaPolarComponent implements OnInit {
 // PolarArea
 public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
 public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
 public polarAreaLegend = true;

 public polarAreaChartType: ChartType = 'polarArea';

 constructor() { }

 ngOnInit(): void {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }
}
