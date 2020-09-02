import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  get f() { return this.contactForm.controls; }

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {

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

    if (this.contactForm.invalid) {
      return;
    }

    const textToSend: string = this.getTextToSend();
    const request = {
      text: textToSend
    };
    this.contactService.sendEmail(request).subscribe(res => {
      alert('Mensaje enviado');
    })

  }

  getTextToSend():string {
    return "Nombre: " + this.contactForm.value.name + '\n' +
    "Teléfono: " + this.contactForm.value.phone + '\n' +
    "Empresa: " + this.contactForm.value.company + '\n' + 
    "Email: " + this.contactForm.value.email + '\n' +
    "Mensaje: " + this.contactForm.value.body;
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }


}
