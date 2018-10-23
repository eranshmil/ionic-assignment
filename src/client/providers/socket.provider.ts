import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Socket } from 'ng-socket-io';

import { APP_CONFIG_TOKEN, AppConfig } from '../app/app.config';

@Injectable()
export class SocketProvider {
  readonly getUrlEventName = 'GET_URL';
  readonly sendUrlEventName = 'SEND_URL';

  constructor(
    @Inject(APP_CONFIG_TOKEN) private _config: AppConfig,
    private _socket: Socket
  ) {}

  public connect(oldUrl: string, newUrl: string): Observable<string> {
    this._socket.connect();

    // request socket updates from the server
    this._socket.emit(this.sendUrlEventName, [oldUrl, newUrl]);

    // return listener to get url event
    return this._socket.fromEvent(this.getUrlEventName);
  }

  public disconnect() {
    this._socket.removeAllListeners();
    this._socket.disconnect();
  }
}
