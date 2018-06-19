import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashBoardPage {

  constructor(public navCtrl: NavController) { }

  public doughnutChartLabels:string[] = ['Me', 'Myself', 'and I'];
  public doughnutChartData:number[] = [123, 456, 789];
  public doughnutChartType:string = 'line';

}