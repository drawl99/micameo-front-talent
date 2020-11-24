import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [
  ]
})
export class BarComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  @Input('labels') barChartLabels: Label[] = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  @Input('data') barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 32, 16, 22, 48, 2], label: 'Ventas por mes' },
  ];

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6', '#6857E6'] }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
