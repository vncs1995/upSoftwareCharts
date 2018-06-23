import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalProdutosPage } from '../modal-produtos/modal-produtos';
import { ModalFabricantesPage } from '../modal-fabricantes/modal-fabricantes';
import { ModalClientesPage } from '../modal-clientes/modal-clientes';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  public doughnutChartLabels: string[] = ['Me', 'Myself', 'and I'];
  public doughnutChartData: number[] = [123, 456, 789];
  public doughnutChartType: string = 'pie';

  public pieChartLabels: string[] = ['positive', 'negative'];
  public pieChartData: number[] = [82.69, 17.31];
  public pieChartType: string = 'pie';

  openModal(modalToOpen) {
    let modal;
    switch (modalToOpen) {
      case 'produtos':
      modal = this.modalCtrl.create(ModalProdutosPage);
        break;
      case 'fabricantes':
      modal = this.modalCtrl.create(ModalFabricantesPage);
        break;
      case 'cliente':
      modal = this.modalCtrl.create(ModalClientesPage);
        break;
    }
     
    modal.present();
  }

}
