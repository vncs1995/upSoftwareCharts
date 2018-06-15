import { Component } from '@angular/core';

import { DashBoardPage } from '../dashboard/dashboard';
import { DadosPage } from '../dados/dados';
import { VendasPage } from '../vendas/vendas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VendasPage;
  tab2Root = DashBoardPage;
  tab3Root = DadosPage;

  constructor() {

  }
}
