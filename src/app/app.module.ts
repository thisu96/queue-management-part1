import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,APP_INITIALIZER} from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomPageComponent } from './views/welcom-page/welcom-page.component';
import { from } from 'rxjs';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomPageComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,{
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
  
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
