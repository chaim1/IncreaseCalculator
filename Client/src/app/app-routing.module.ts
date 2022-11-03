import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncreaseCalculatorComponent } from './pages/increase-calculator/increase-calculator.component';

const routes: Routes = [{path: "", component: IncreaseCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
