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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environments } from 'src/environments/environments';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducer';
import { BreadcrumbsEffect } from './store/effects/breadcrumbs.effects';
import { MenuEffect } from './store/effects/menu.effect';
import { ApolloModule } from 'apollo-angular';
import { apolloProvide } from './helpers/providers/apollo';

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
    BreadcrumbsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BreadcrumbsEffect, MenuEffect]),
    !environments.production ? StoreDevtoolsModule.instrument() : [],
    ApolloModule
  ],
  providers: [
    interceptorProvide(TokenInterceptor),
    interceptorProvide(ErrorsHandlerInterceptor),
    apolloProvide
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
