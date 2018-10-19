import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  imports: [BrowserAnimationsModule],
  declarations: [InputErrorComponent],
  exports: [InputErrorComponent],
})
export class SharedModule {}
