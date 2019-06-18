import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MnistComponent } from './components/mnist/mnist.component';
import { TfjsTimeseriesStocksComponent } from './components/tfjs-timeseries-stocks/tfjs-timeseries-stocks.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mnist', component: MnistComponent },
  { path: 'tfjs-timeseries-stocks', component: TfjsTimeseriesStocksComponent },
  { path: 'tictactoe', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
