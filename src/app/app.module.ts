import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HotComponent } from './hot/hot.component';
import { ColdComponent } from './cold/cold.component';

const routes: Routes = [
      { path: '', redirectTo: '/hot', pathMatch: 'full' },
      { path: 'hot', component: HotComponent },
      { path: 'cold', component: ColdComponent }
    ]

@NgModule({
  declarations: [
    AppComponent,
    HotComponent,
    ColdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
