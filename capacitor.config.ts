import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '681203821547-hjr8lpcfok5elsi2kl4tpee8m5t3fltv.apps.googleusercontent.com',
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
