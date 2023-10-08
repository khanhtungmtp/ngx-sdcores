import { Injectable } from '@angular/core';
import {
  SnotifyPosition,
  SnotifyService,
  SnotifyToastConfig,
} from 'ngx-sdcores/sd-snotify';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NgSnotifyService {
  async(arg0: string, arg1: string, errorAction: Observable<unknown>, config: { showProgressBar?: boolean; type?: import("ngx-sdcores/sd-snotify").SnotifyTypeType; closeOnClick?: boolean; pauseOnHover?: boolean; buttons?: import("ngx-sdcores/sd-snotify").SnotifyButton[]; placeholder?: string; titleMaxLength?: number; bodyMaxLength?: number; icon?: string; iconClass?: string; backdrop?: number; animation?: import("ngx-sdcores/sd-snotify").SnotifyAnimate; html?: string | import("@angular/platform-browser").SafeHtml; position?: import("ngx-sdcores/sd-snotify").SnotifyPositionType; }) {
    throw new Error('Method not implemented.');
  }
  remove(id: any) {
    throw new Error('Method not implemented.');
  }
  prompt(body: string, title: string, arg2: { buttons: { text: string; action: (toast: any) => void; }[]; placeholder: string; showProgressBar?: boolean; type?: import("ngx-sdcores/sd-snotify").SnotifyTypeType; pauseOnHover?: boolean; titleMaxLength?: number; bodyMaxLength?: number; icon?: string; iconClass?: string; backdrop?: number; animation?: import("ngx-sdcores/sd-snotify").SnotifyAnimate; html?: string | import("@angular/platform-browser").SafeHtml; position?: import("ngx-sdcores/sd-snotify").SnotifyPositionType; }) {
    throw new Error('Method not implemented.');
  }
  html(html: string, arg1: SnotifyToastConfig) {
    throw new Error('Method not implemented.');
  }
  config: SnotifyToastConfig = {
    bodyMaxLength: 300,
    titleMaxLength: 100,
    backdrop: -1,
    position: SnotifyPosition.rightTop,
    timeout: 3000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };

  constructor(private snotifyService: SnotifyService) {
    this.setDefaults();
  }

  setDefaults() {
    this.snotifyService.setDefaults({
      global: {
        maxAtPosition: 10,
        maxOnScreen: 10,
        newOnTop: true,
        filterDuplicates: false,
      },
    });
  }

  success(body: string, title: string) {
    this.snotifyService.success(body, title, this.config);
  }

  info(body: string, title: string) {
    this.snotifyService.info(body, title, this.config);
  }

  error(body: string, title: string) {
    this.snotifyService.error(body, title, this.config);
  }

  warning(body: string, title: string) {
    this.snotifyService.warning(body, title, this.config);
  }

  simple(body: string, title: string) {
    this.snotifyService.simple(body, title, this.config);
  }

  confirm(
    body: string,
    title: string,
    okCallback: () => any,
    cancelCallBack?: () => any
  ) {
    const config = { ...this.config };
    config.position = SnotifyPosition.centerCenter;
    config.timeout = 0;
    config.backdrop = 0.5;
    config.closeOnClick = false;

    this.snotifyService.confirm(body, title, {
      ...config,
      buttons: [
        {
          text: 'OK',
          action: (toast) => {
            this.snotifyService.remove(toast.id);
            okCallback();
          },
          bold: true,
        },
        {
          text: 'Cancel',
          action: (toast) => {
            this.snotifyService.remove(toast.id);
            if (typeof cancelCallBack === 'function') {
              cancelCallBack();
            }
          },
        },
      ],
    });
  }

  clear() {
    this.snotifyService.clear();
  }
}
