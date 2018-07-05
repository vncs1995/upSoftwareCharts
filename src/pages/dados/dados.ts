import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { DadosDashVendedorProvider } from '../../providers/dados-dash-vendedor/dados-dash-vendedor';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'pie';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dadosDashVendedorProvider: DadosDashVendedorProvider) {
    this.getDataFromAPI();
  }

  presentProfileModal(modalToOpen: string) {
    let profileModal = this.modalCtrl.create(ModalPage, { header: modalToOpen });
    profileModal.present();
  }

  getDataFromAPI() {
    this.dadosDashVendedorProvider.getData()
      .then((apiResponse) => {
        return Promise.all([this.getLabels(apiResponse), this.getChartData(apiResponse)])
      })
      .then((response) => {
        this.doughnutChartLabels = response[0];
        this.doughnutChartData = response[1];
      })
      .catch((err) => { alert(JSON.stringify(err)) })
  }

  getLabels(res) {
    let labels = []

    for (let i = 0; i < res.length; i++) {
      labels.push(res[i].DESCRICAO)
    }

    return Promise.resolve(labels)
  }

  getChartData(res) {
    let data = []

    for (let i = 0; i < res.length; i++) {
      data.push(res[i].VALOR)
    }

    return Promise.resolve(data);
  }

}
