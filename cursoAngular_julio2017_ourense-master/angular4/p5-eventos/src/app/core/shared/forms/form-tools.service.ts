import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormToolsService {

  constructor() { }

  mustShowErrors(form: FormGroup, controlName: string) {
    let hasErrorsToShow = false;
    const control = this.getControl(form, controlName);
    const hasChanges = control.dirty || control.touched;
    if (hasChanges) {
      hasErrorsToShow = control.errors != null;
    }
    return hasErrorsToShow;
  }

  getControl(form: FormGroup, controlName: string): AbstractControl {
    return form.controls[controlName];
  }

}
