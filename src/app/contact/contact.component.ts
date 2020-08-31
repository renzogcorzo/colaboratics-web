import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  get f() { return this.contactForm.controls; }

  constructor(private formBuilder: FormBuilder) { 
   
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required], Validators.maxLength[50]],
      phone: ['', Validators.required, Validators.maxLength[20]],
      company: ['', Validators.required, Validators.maxLength[50]],
      body: ['', Validators.required, Validators.maxLength[2000]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.contactForm.reset();
}


}
