import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss']
})
export class LanguageSelectionComponent {
  public langs: string[] = ['en', 'pt'];

  constructor(private translateService: TranslateService) {}

  switchTo(lang: string) {
    this.translateService.use(lang);
  }

  isActive(lang: string) {
    return (this.translateService.currentLang || this.translateService.getDefaultLang()) == lang;
  }
}
