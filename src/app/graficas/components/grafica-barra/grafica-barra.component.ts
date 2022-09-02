import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {

    if(this.horizontal) {
      this.barChartType = 'bar';
    } 
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
  };
  public barChartType: ChartType = 'line';

  @Input() barChartData: ChartData<'line'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'iPhone', backgroundColor: '#8E70FA', hoverBackgroundColor: '#2BC642' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'iPad', backgroundColor: '#ED66B9', hoverBackgroundColor: '#2BC642' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'watch', backgroundColor: '#6CC3E0', hoverBackgroundColor: '#2BC642' },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
