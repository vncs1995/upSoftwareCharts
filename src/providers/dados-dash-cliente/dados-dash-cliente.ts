import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DadosDashClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosDashClienteProvider {

  private url: string = "http://52.67.243.129/UpDashBoardAPI/api/DadosDashCliente";

  constructor(public http: HttpClient) {
    console.log('DadosDashClienteProvider Provider');
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
