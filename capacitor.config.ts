import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.household.choreshub',
  appName: 'Chores Hub',
  webDir: 'dist',
  plugins: {
    SystemBars: {
      insetsHandling: 'css',
      style: 'DARK',
      hidden: false
    }
  },
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  ios: {
    contentInset: 'never',
    backgroundColor: '#13111C',
    allowsLinkPreview: false,
    preferredContentMode: 'mobile'
  }
};

export default config;

