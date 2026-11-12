import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.household.choreshub',
  appName: 'Chores Hub',
  webDir: 'dist',
  android: {
    adjustMarginsForEdgeToEdge: 'force'
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;

