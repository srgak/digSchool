import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './shared/components/menu/menu.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { BreadcrumbsModule } from './shared/components/breadcrumbs/breadcrumbs.module';
import { interceptorProvide } from './helpers/providers/interceptor';
import { TokenInterceptor } from './interceptors/send-token.interceptor';
import { ErrorsHandlerInterceptor } from './interceptors/errors-handler.interceptor';

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
    interceptorProvide(ErrorsHandlerInterceptor),
    interceptorProvide(TokenInterceptor)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
