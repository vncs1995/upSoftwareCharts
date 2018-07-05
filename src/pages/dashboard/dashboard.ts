import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VendaPesoCustoProvider } from '../../providers/venda-peso-custo/venda-peso-custo';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashBoardPage {

  public lineChartLabels: string[];
  public lineChartData: Array<any>;
  public lineChartType: string = 'line';

  constructor(public navCtrl: NavController, public vendaPesoCustoProvider: VendaPesoCustoProvider) {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.vendaPesoCustoProvider.getData()
      .then((apiResponse) => {
        return Promise.all([this.getLabels(apiResponse), this.getChartData(apiResponse)])
      })
      .then((response) => {
        this.lineChartLabels = response[0];
        this.lineChartData = response[1];
      })
      .catch((err) => {alert(JSON.stringify(err))})
  }

  getLabels(res) {
    let meses = []

    for (let i = 0; i < res.length; i++) {
      meses.push(res[i].MES_ANO)
    }

    return Promise.resolve(meses)
  }

  getChartData(res) {
    let _vrVendas = [], _peso = [], _custo = []
    let _chartData = []

    for (let i = 0; i < res.length; i++) {
      _vrVendas.push(res[i].VR_FATURAMENTO)
      _peso.push(res[i].PESO_LIQUIDO)
      _custo.push(res[i].VR_CUSTO)
    }

    _chartData.push({
      label: 'Valor Vendas (R$)',
      data: _vrVendas
    })

    _chartData.push({
      label: 'Peso (kg)',
      data: _peso
    })

    _chartData.push({
      label: 'Custo de aquisição(R$)',
      data: _custo
    })

    return Promise.resolve(_chartData);
  }

}