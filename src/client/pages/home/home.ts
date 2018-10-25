import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SocketProvider, UrlProvider } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public form: FormGroup;
  public errors: {};
  public responseUrl: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _urlProvider: UrlProvider,
    private _inAppBrowser: InAppBrowser,
    private _socketProvider: SocketProvider
  ) {}

  ngOnInit() {
    // no validators needed, because we expect the server to response
    this.form = this._formBuilder.group({
      url: ['', []],
      redirect: [true, []],
    });
  }

  public onSubmit() {
    this._socketProvider.disconnect();
    this.responseUrl = '';

    this._urlProvider
      .postUrl(this.form.value)
      .subscribe((redirectTo: string) => {
        this.errors = {};

        if (!this.form.value.redirect) {
          this.updateUrlFromServer(redirectTo);
        } else {
          this._inAppBrowser.create(this.buildUrlForIAB(redirectTo), '_blank');
        }
      }, errors => (this.errors = errors));
  }

  private updateUrlFromServer(redirectTo: string) {
    const { url } = this.form.value;

    this.responseUrl = url;

    this._socketProvider
      .connect(
        redirectTo,
        url
      )
      .subscribe(url => (this.responseUrl = url));
  }

  private buildUrlForIAB(url: string) {
    // add http:// if not exists
    if (!url.match(/^https?:\/\/\S+/i)) {
      url = `http://${url}`;
    }

    return encodeURI(url);
  }
}
