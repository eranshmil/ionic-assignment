import { InjectionToken } from '@angular/core';

declare var process: { env: { [key: string]: string | undefined } };

const API_URL =
  process.env.IONIC_ENV === 'dev'
    ? 'http://localhost:3000/api/v1'
    : 'https://ionic-express-assignment.herokuapp.com/api/v1';

export interface AppConfig {
  endpoints: {
    url: string;
  };
}

export const APP_CONFIG: AppConfig = {
  endpoints: {
    url: API_URL + '/url',
  },
};

export const APP_CONFIG_TOKEN = new InjectionToken('app.config');
