import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {

  constructor(public navCtrl: NavController) { }

  public doughnutChartLabels:string[] = ['Me', 'Myself', 'and I'];
  public doughnutChartData:number[] = [123, 456, 789];
  public doughnutChartType:string = 'doughnut';

}
