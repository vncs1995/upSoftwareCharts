import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosFaturamentoProvider } from '../../providers/dados-faturamento/dados-faturamento';

@Component({
  selector: 'page-vendas',
  templateUrl: 'vendas.html'
})
export class VendasPage {

  public dataReceived : any;
  constructor(public navCtrl: NavController, public dadosFaturamentoProvider : DadosFaturamentoProvider) {
    this.getData();
  }

  getData(){
    this.dadosFaturamentoProvider.getData()
    .then((res) => {this.dataReceived = res[0]})
    .catch((err) => {alert(JSON.stringify(err))})
  }

}
