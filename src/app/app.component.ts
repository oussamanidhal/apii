import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import fr from '../assets/fr.json';
import en from '../assets/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    public route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('fr', fr);
    this.translate.use('en'); // Set English as the default language
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
