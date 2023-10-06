import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatLegacyRadioChange as MatRadioChange } from '@angular/material/legacy-radio';
import { MatLegacySlideToggle as MatSlideToggle, MatLegacySlideToggleChange as MatSlideToggleChange } from '@angular/material/legacy-slide-toggle';
import { AppConfig, AppearanceService, OTranslateService, Util } from 'ontimize-web-ngx';

@Component({
  selector: 'settings-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsAppearanceComponent {

  public availableLangs: string[] = [];
  public currentLang: string;
  public darkDefaultMode = false;

  @ViewChild('toggleDark')
  private toggleDark: MatSlideToggle;

  constructor(
    private _appConfig: AppConfig,
    private _translateService: OTranslateService,
    private appearanceService: AppearanceService
  ) {
    this.availableLangs = this._appConfig.getConfiguration().applicationLocales;
    this.currentLang = this._translateService.getCurrentLang();
    this.darkDefaultMode = this.appearanceService.isDarkMode();

  }

  changeLang(e: MatRadioChange): void {
    if (this._translateService && this._translateService.getCurrentLang() !== e.value) {
      this._translateService.use(e.value);
    }
  }

  changeDarkMode(e: MatSlideToggleChange): void {
    this.appearanceService.setDarkMode(e.checked);
  }

}
