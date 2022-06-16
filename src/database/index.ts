import 'dotenv';

export const config = {
  firebaseConfig: {
    apiKey: import.meta.env.VITE_APPKEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_PROJECT_ID,
    appId: import.meta.env.VITE_APP_ID
  }
};