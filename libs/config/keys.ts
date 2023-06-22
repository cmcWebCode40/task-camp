import Constants from 'expo-constants';

const env = Constants?.expoConfig?.extra;

const config = {
  ...env,
  firebase: {
    apiKey: env?.API_KEY,
    authDomain: env?.AUTH_DOMAIN,
    projectId: env?.PROJECT_ID,
    storageBucket: env?.STORAGE_BUCKET,
    messagingSenderId: env?.MESSENGIN_SEDNER_ID,
    appId: env?.APP_ID,
    measurementId: env?.MEASUREMENT_ID,
  },
};

export default config;
