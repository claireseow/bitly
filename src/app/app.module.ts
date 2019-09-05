import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongpageComponent } from './longpage/longpage.component';
import { ShortpageComponent } from './shortpage/shortpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LongpageComponent,
    ShortpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'longpage', component: LongpageComponent },
      { path: 'shortpage', component: ShortpageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
