import { Component, OnInit } from '@angular/core';
import { ChartArea, ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {

  // proveedoresData: ChartDataset[] = [
  //   this.proveedoresLabels,
  //   { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
  //   { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  // ];

  proveedoresData: ChartData<any> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'iPhone', backgroundColor: '#8E70FA', hoverBackgroundColor: '#2BC642' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'iPad', backgroundColor: '#ED66B9', hoverBackgroundColor: '#2BC642' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'watch', backgroundColor: '#6CC3E0', hoverBackgroundColor: '#2BC642' },
    ]
  };
  

  constructor() { }

  ngOnInit(): void {
  }

}
