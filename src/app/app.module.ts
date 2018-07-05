import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DashBoardPage } from '../pages/dashboard/dashboard';
import { DadosPage } from '../pages/dados/dados';
import { VendasPage } from '../pages/vendas/vendas';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ChartsModule} from 'ng2-charts';
import { VendaPesoCustoProvider } from '../providers/venda-peso-custo/venda-peso-custo';
import { DadosDashVendedorProvider } from '../providers/dados-dash-vendedor/dados-dash-vendedor';
import { DadosDashProdutoProvider } from '../providers/dados-dash-produto/dados-dash-produto';
import { DadosDashFabricanteProvider } from '../providers/dados-dash-fabricante/dados-dash-fabricante';
import { DadosDashClienteProvider } from '../providers/dados-dash-cliente/dados-dash-cliente';
import { DadosFaturamentoProvider } from '../providers/dados-faturamento/dados-faturamento';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    DashBoardPage,
    DadosPage,
    VendasPage,
    LoginPage,
    TabsPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    DashBoardPage,
    DadosPage,
    VendasPage,
    TabsPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VendaPesoCustoProvider,
    DadosDashVendedorProvider,
    DadosDashProdutoProvider,
    DadosDashFabricanteProvider,
    DadosDashClienteProvider,
    DadosFaturamentoProvider
  ]
})
export class AppModule {}
