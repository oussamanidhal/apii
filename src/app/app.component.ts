import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import fr from '../assets/i18n/fr.json';
import en from '../assets/i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'my-app';
  showMenu: boolean = false; // Add this line

  constructor(
    public route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('fr');
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('fr', fr);
    this.translate.use('fr'); // Set English as the default language
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  hideMenu() {
    this.showMenu = false;
  }
}
