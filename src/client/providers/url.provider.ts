import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { APP_CONFIG_TOKEN, AppConfig } from '../app/app.config';

@Injectable()
export class UrlProvider {
  constructor(
    public _http: HttpClient,
    @Inject(APP_CONFIG_TOKEN) private _config: AppConfig
  ) {}

  public postUrl(values: { url: string; redirect: boolean }) {
    return this._http.post(this._config.endpoints.url, values).pipe(
      map((response: { redirectTo: string }) => response.redirectTo),
      catchError(response => {
        const { errors } = response.error;

        throw errors;
      })
    );
  }
}
