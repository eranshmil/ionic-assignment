import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { UrlProvider } from '../../providers/url.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public form: FormGroup;
  public errors: {};

  constructor(
    private _formBuilder: FormBuilder,
    private _urlProvider: UrlProvider,
    private _inAppBrowser: InAppBrowser
  ) {}

  ngOnInit() {
    // no validators needed, because we expect the server to response
    this.form = this._formBuilder.group({
      url: ['', []],
      redirect: [true, []],
    });
  }

  public onSubmit() {
    this._urlProvider
      .postUrl(this.form.value)
      .subscribe((redirectTo: string) => {
        this._inAppBrowser.create(redirectTo);
        this.errors = {};
      }, errors => (this.errors = errors));
  }
}
