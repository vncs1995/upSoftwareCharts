import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {
  private charData : any;

  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'pie';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { 
    this.getDataFromAPI();
    this.doughnutChartLabels = this.getLabels();
    this.doughnutChartData = this.getCharData();
  }

  presentProfileModal(modalToOpen: string) {
    let profileModal = this.modalCtrl.create(ModalPage, { header: modalToOpen });
    profileModal.present();
  }

  getDataFromAPI(){
    this.charData = { "VendaPesoCusto": [ { "DESCRICAO": "JULIANO LOCHETI", "VALOR": 81.35, "TIPO": 5 }, { "DESCRICAO": "DIEGO H TRAJANO", "VALOR": 10.75, "TIPO": 5 }, { "DESCRICAO": "ANDREIA FERRAZ ZAMBELLI", "VALOR": 6.40, "TIPO": 5 }, { "DESCRICAO": "NELSON SETARO JUNIOR", "VALOR": 0.76, "TIPO": 5 }, { "DESCRICAO": "LUANA", "VALOR": 0.73, "TIPO": 5 } ] }
  }

  getLabels(){
    let labels = []
    this.charData.VendaPesoCusto.forEach(element => {
      labels.push(element.DESCRICAO)
    });

    return labels;
  }

  getCharData(){
    let data = []
    this.charData.VendaPesoCusto.forEach(element => {
      data.push(element.VALOR)
    });

    return data;
  }

}
