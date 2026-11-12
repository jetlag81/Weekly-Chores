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
    androidScheme: 'https'
  }
};

export default config;

