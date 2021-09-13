import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tablas/tabla/tabla.component';
import { tableModule } from  'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    tableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
