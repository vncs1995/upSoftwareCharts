import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vendas',
  templateUrl: 'vendas.html'
})
export class VendasPage {

  public dataReceived : any;
  constructor(public navCtrl: NavController) {
    this.getData();
  }

  getData() {
    this.dataReceived = { "VendaPesoCusto": [ { "SMALL_BOX_1_CAPTION": "Faturamento Mensal", "SMALL_BOX_1": "17510", "SMALL_BOX_2_CAPTION": "Faturamento - Projeção do Mês", "SMALL_BOX_2": "23877", "SMALL_BOX_3_CAPTION": "Clientes Positivados", "SMALL_BOX_3": "8", "SMALL_BOX_4_CAPTION": "Produtos Positivados", "SMALL_BOX_4": "12", "PROGRESSBAR_1_CAPTION": "Pedidos Abertos", "PROGRESSBAR_1": "0", "PROGRESSBAR_2_CAPTION": "Pedidos Cancelados", "PROGRESSBAR_2": "0", "PROGRESSBAR_3_CAPTION": "Pedidos Faturados", "PROGRESSBAR_3": "5000" } ] }
  }

}
