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

// Import the Material Tooltip Module
import { MatTooltipModule } from '@angular/material/tooltip';

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
    // Add it to the list of imports
    MatTooltipModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

