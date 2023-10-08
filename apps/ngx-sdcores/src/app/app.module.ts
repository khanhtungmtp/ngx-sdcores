import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from '../../../../sd-snotify/src';
import { AppRoutingModule } from './app.routing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTrimInputDirective } from 'ngx-sdcores/sd-shared';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    SnotifyModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ],
  declarations: [AppComponent, NgxTrimInputDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
