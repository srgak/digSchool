import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MenuModule } from './shared/components/menu/menu.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { BreadcrumbsModule } from './shared/components/breadcrumbs/breadcrumbs.module';
import { interceptorProvide } from './helpers/providers/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    ModalModule,
    BrowserAnimationsModule,
    BreadcrumbsModule
  ],
  providers: [
    interceptorProvide
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
