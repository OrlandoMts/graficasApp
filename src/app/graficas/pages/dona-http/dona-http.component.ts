import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    // this.graficaService.getData()
    //     .subscribe({
    //       next: data => {
    //         this.doughnutChartData.labels = Object.keys(data);
    //         this.doughnutChartData.datasets = [{ data: Object.values(data) }];
    //         this.chart?.update();
    //       }
    //     });

    this.graficaService.getDonaData()
        .subscribe({
          next: ({labels, datasets} ) => { // viene la data completa peor la desestrucutre
            this.doughnutChartData.labels = labels;
            this.doughnutChartData.datasets = [{ data: datasets }];
            this.chart?.update();
          }
        })

  }
  

  public doughnutChartLabels: string[] = []; // [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [], backgroundColor: ['#599BE3', '#85FFC0', '#B86EFA'], hoverBackgroundColor: '#FBB862'}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
