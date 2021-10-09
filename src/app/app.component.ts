import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private _languages: string[] = ['en', 'es', 'fr'];
  
  constructor(
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(this._languages);
    // Set default language
    translate.setDefaultLang('en');
    console.log(translate.currentLang)
  }
  
  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
