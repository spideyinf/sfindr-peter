import './polyfills';

import {enableProdMode, NgModuleRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  // @ts-ignore
  (window as unknown as {ngRef: NgModuleRef<AppModule>}).ngRef?.destroy();
  (window as unknown as {ngRef: NgModuleRef<AppModule>}).ngRef = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
