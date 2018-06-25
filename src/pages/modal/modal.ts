import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public header: string;

  public pieChartLabels: string[] = ['positive', 'negative'];
  public pieChartData: number[] = [82.69, 17.31];
  public pieChartType: string = 'pie';

  constructor(public platform: Platform, public params: NavParams, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.header = this.params.get('header');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
