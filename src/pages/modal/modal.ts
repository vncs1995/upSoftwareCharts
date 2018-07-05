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

  getChartDataClienteFromAPI(){
    let gotFromAPI = {"DadosDashGenerico":[{"DESCRICAO":"UPSOFTWARE ","TIPO":"4","VALOR":"81.93"},{"DESCRICAO":"FAESPO EIRELI","TIPO":"4","VALOR":"1.89"},{"DESCRICAO":"ATTIMINO ","TIPO":"4","VALOR":"1.37"},{"DESCRICAO":"A. G. RUBBO SJBV","TIPO":"4","VALOR":"1.33"},{"DESCRICAO":"ME.LINDA - JUNDIAI SHOPPING","TIPO":"4","VALOR":"1.33"}]};
  }

  getChartDataFabricanteFromAPI(){
    let gotFromAPI = {"DadosDashGenerico":{"DESCRICAO":"UPSOFTWARE","TIPO":"3","VALOR":"100.00"}};
  }

  getChartDataProdutoFromAPI(){
    let gotFromAPI = {"DadosDashGenerico":[{"DESCRICAO":"SERV SUPORTE MENSAL","TIPO":"2","VALOR":"81.93"},{"DESCRICAO":"HORAS DE CUSTOMIZACAO","TIPO":"2","VALOR":"2.31"},{"DESCRICAO":"LC ERP - AQUISICAO","TIPO":"2","VALOR":"2.28"},{"DESCRICAO":"LC AFV-ANDROID - ADICIONAL","TIPO":"2","VALOR":"1.64"},{"DESCRICAO":"WKD (DIA DE TRABALHO 6 HORAS)","TIPO":"2","VALOR":"1.53"}]}
  }

  getLabels(){

  }

  getData(){
    
  }

  chooseChart(){
    switch(this.header){
      case 'Produtos':
      break;

      case 'Fabricantes':
      break;
      
      case 'Clientes':
      break;
      
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
