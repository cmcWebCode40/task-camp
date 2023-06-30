import 'dotenv/config';

let config = {
  API_KEY: process.env.API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  PROJECT_ID: process.env.PROJECT_ID,
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  MESSENGIN_SEDNER_ID: process.env.MESSENGIN_SEDNER_ID,
  APP_ID: process.env.APP_ID,
  MEASUREMENT_ID: process.env.MEASUREMENT_ID,
};

export default {
  expo: {
    name: 'todo-application',
    slug: 'task-camp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.cmcwebcode.taskcamp',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      ...config,
      eas: {
        projectId: '58542f3e-4f15-45d8-b63f-859f66dd409a',
      },
    },
    plugins: [
      [
        'expo-build-properties',
        {
          ios: {
            flipper: true,
          },
        },
      ],
    ],
    owner: 'cmcwebcode',
  },
};
