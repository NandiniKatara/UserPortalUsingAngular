import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCardComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
