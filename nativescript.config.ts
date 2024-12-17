import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.photomanager',
  appPath: 'app',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    discardUncaughtJsExceptions: true
  },
  useLegacyWorkflow: false,
  webpackConfigPath: 'webpack.config.js'
} as NativeScriptConfig;