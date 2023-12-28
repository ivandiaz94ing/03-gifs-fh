import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
