import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  formEnvio: FormGroup;
  formPago: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formEnvio = this.fb.group({});
    this.formPago = this.fb.group({});
  }
}
