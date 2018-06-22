import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Mocking http calls
import { InMemPlayerService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PlayerCountComponent } from './player-count/player-count.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PlayerCountComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPlayerService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
