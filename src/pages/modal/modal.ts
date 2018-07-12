import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { DadosDashClienteProvider } from '../../providers/dados-dash-cliente/dados-dash-cliente'
import { DadosDashFabricanteProvider } from '../../providers/dados-dash-fabricante/dados-dash-fabricante'
import { DadosDashProdutoProvider } from '../../providers/dados-dash-produto/dados-dash-produto'
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

  public chartHeader: string[];
  public pieChartLabels: string[] = ['positive', 'negative'];
  public pieChartData: any;
  public pieChartType: string = 'pie';

  constructor(public platform: Platform,
    public params: NavParams,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public dadosDashClienteProvider: DadosDashClienteProvider,
    public dadosDashFabricanteProvider: DadosDashFabricanteProvider,
    public dadosDashProdutoProvider: DadosDashProdutoProvider) {
    this.header = this.params.get('header');
    this.getChartDataFromAPI();
  }

  chooseChart() {
    switch (this.header) {
      case 'Produtos':
        return this.dadosDashProdutoProvider.getData()

      case 'Fabricantes':
        return this.dadosDashFabricanteProvider.getData()

      case 'Clientes':
        return this.dadosDashClienteProvider.getData()
    }
  }

  getData(res) {
    let data = []
    
    for (let i = 0; i < res.length; i++) {
      let x = {
        header: res[i].DESCRICAO,
        chartData: [Number(res[i].VALOR).toFixed(2), Number(100 - res[i].VALOR).toFixed(2)]
      }
      data.push(x)
    }

    return Promise.resolve(data)
  }

  getChartDataFromAPI() {
    this.chooseChart()
      .then((apiResponse) => {
        return this.getData(apiResponse)
      })
      .then((response) => {
        this.pieChartData = response;
      })
      .catch((err) => { alert(JSON.stringify(err)) })

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
