import { Application } from '@nativescript/core';
import { installMixins } from '@nativescript/core/ui/core/view';

// Install core mixins
installMixins();

// Initialize theme
Application.setResources({
  dark: false,
  'font-family': '-apple-system'
});

Application.run({ moduleName: 'app-root' });