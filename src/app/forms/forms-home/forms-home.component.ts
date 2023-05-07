import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurnameFormControl } from '../surname-form-control';

@Component({
  selector: 'app-forms-home',
  templateUrl: './forms-home.component.html',
  styleUrls: ['./forms-home.component.css'],
})
export class FormsHomeComponent {
  nameVal: string | null = '';
  cardNoVal: string | null = '';
  expiryVal: string | null = '';
  securityCodeVal: string | null = '';

  cardForm = new FormGroup({
    surname: new SurnameFormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(5),
      Validators.pattern(/(?!.{64,})([a-zA-Z]+\s+[a-zA-Z]+ ?)$/),
    ]),
    cardNo: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
      Validators.pattern(/^[0-9]*$/),
    ]),
    expiry: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[0-9]|1[1-2])(2[3-9]+)/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  onSubmit() {
    this.nameVal = this.cardForm.controls.surname.value;
    this.cardNoVal = this.cardForm.controls.cardNo.value;
    this.expiryVal = this.cardForm.controls.expiry.value;
    this.securityCodeVal = this.cardForm.controls.securityCode.value;
  }

  onReset() {
    this.cardForm.reset();
    this.onSubmit();
  }
}
