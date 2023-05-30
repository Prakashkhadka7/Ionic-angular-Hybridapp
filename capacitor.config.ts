import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '681203821547-vpdh014rqrjf59b8b8tjbv9na269urbh.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
  appId: 'io.ionic.inspirationApp',
  appName: 'inspirationApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
