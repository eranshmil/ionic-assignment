import { InjectionToken } from '@angular/core';

const API_URL = 'http://localhost:3000/api/v1';

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
