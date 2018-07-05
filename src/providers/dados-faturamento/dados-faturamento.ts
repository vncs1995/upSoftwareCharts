import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DadosFaturamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosFaturamentoProvider {

  private url: string = "http://52.67.243.129/UpDashBoardAPI/api/DadosFaturamento";

  constructor(public http: HttpClient) {
    console.log('DadosFaturamentoProvider Provider');
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
