import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EstimatorComponent } from './estimator/estimator.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the Material Tooltip Module
import { MatTooltipModule } from '@angular/material/tooltip';

// Import the ngx-translate modules and services
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

// Function for translation loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    EstimatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Add ngx-translate and Http Client modules
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // Add Material modules
    MatTooltipModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [TranslateService], // Add TranslateService to the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
