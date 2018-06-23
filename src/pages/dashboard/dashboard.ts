import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashBoardPage {
  private chartData: any;

  public lineChartLabels: string[];
  public lineChartData:Array<any>;
  public lineChartType: string = 'line';

  constructor(public navCtrl: NavController) {
    this.getDataFromAPI();
    this.lineChartLabels = this.getLabels();
    this.lineChartData = this.getChartData();
  }

  getDataFromAPI() {
    this.chartData = { "VendaPesoCusto": [{ "MES_ANO": "07/17", "VR_FATURAMENTO": 218729.8200000, "VR_CUSTO": 42852.00000, "PESO_LIQUIDO": 81.000000 }, { "MES_ANO": "08/17", "VR_FATURAMENTO": 202130.0000000, "VR_CUSTO": 22350.99000, "PESO_LIQUIDO": 56.000000 }, { "MES_ANO": "09/17", "VR_FATURAMENTO": 188120.0000000, "VR_CUSTO": 12402.00000, "PESO_LIQUIDO": 32.000000 }, { "MES_ANO": "10/17", "VR_FATURAMENTO": 225837.0000000, "VR_CUSTO": 92401.00000, "PESO_LIQUIDO": 159.000000 }, { "MES_ANO": "11/17", "VR_FATURAMENTO": 215774.5000000, "VR_CUSTO": 76553.00000, "PESO_LIQUIDO": 162.000000 }, { "MES_ANO": "12/17", "VR_FATURAMENTO": 227432.0000000, "VR_CUSTO": 50954.00000, "PESO_LIQUIDO": 94.000000 }, { "MES_ANO": "01/18", "VR_FATURAMENTO": 215958.9000000, "VR_CUSTO": 61952.00000, "PESO_LIQUIDO": 117.000000 }, { "MES_ANO": "02/18", "VR_FATURAMENTO": 205873.0000000, "VR_CUSTO": 54202.00000, "PESO_LIQUIDO": 108.000000 }, { "MES_ANO": "03/18", "VR_FATURAMENTO": 209997.0000000, "VR_CUSTO": 72202.00000, "PESO_LIQUIDO": 165.000000 }, { "MES_ANO": "04/18", "VR_FATURAMENTO": 208478.0000000, "VR_CUSTO": 13502.00000, "PESO_LIQUIDO": 36.000000 }, { "MES_ANO": "05/18", "VR_FATURAMENTO": 226465.1600000, "VR_CUSTO": 12253.00000, "PESO_LIQUIDO": 39.000000 }, { "MES_ANO": "06/18", "VR_FATURAMENTO": 17510.0000000, "VR_CUSTO": 15701.00000, "PESO_LIQUIDO": 32.000000 }] }
  }

  getLabels() {
    let meses = []
    this.chartData.VendaPesoCusto.forEach(element => {
      meses.push(element.MES_ANO)
    });

    return meses
  }

  getChartData() {
    let _vrVendas = [], _peso = [], _custo = []
    let _chartData = []

    this.chartData.VendaPesoCusto.forEach(element => {
      _vrVendas.push(element.VR_FATURAMENTO)
      _peso.push(element.PESO_LIQUIDO)
      _custo.push(element.VR_CUSTO)
    });

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

    return _chartData;
  }

}