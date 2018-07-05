import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DadosDashProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosDashProdutoProvider {

  private url: string = "http://52.67.243.129/UpDashBoardAPI/api/DadosDashProduto";

  constructor(public http: HttpClient) {
    console.log('DadosDashProdutoProvider Provider');
  }

  public getData() {
    return new Promise((resolve, reject) => {
      this
        .http
        .get(this.url)
        .subscribe((res: any) => resolve(res),
        (err: any) => reject(err));
    })
  }

}
