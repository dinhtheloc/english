import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NounComponent } from './views/noun/noun.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AdjectiveComponent } from './views/adjective/adjective.component';
import { VerbComponent } from './views/verb/verb.component';
import { PresentContinuousComponent } from './views/present-continuous/present-continuous.component';
import { SimplePastComponent } from './views/simple-past/simple-past.component';
import { AdverbComponent } from './views/adverb/adverb.component';
import { PastContinuousComponent } from './views/past-continuous/past-continuous.component';
import { VocabularyComponent } from './views/vocabulary/vocabulary.component';

import { WordPipe } from './views/vocabulary/pipe/word.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    DashboardComponent,
    NounComponent,
    AdjectiveComponent,
    VerbComponent,
    PresentContinuousComponent,
    SimplePastComponent,
    AdverbComponent,
    PastContinuousComponent,
    VocabularyComponent,
    WordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [WordPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
