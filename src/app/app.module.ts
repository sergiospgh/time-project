import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from '@components/navigation/navigation.component';

@NgModule({
  declarations: [ // Components, Directives and/or Pipes that will be privately available for this module
    AppComponent,
    NavigationComponent
  ],
  imports: [ // Modules available for this module with all its exported components
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [], // Components, directives and/or pipes that will be publicly available for this module and all other modules that import it
  providers: [], // Services, Guards and/or Resolvers that can be injected into components within this module and any module that imports it
  bootstrap: [AppComponent] // Component that's used to initially load the application
})
export class AppModule { }
