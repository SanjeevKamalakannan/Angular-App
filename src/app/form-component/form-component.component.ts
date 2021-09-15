import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  /* form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    phno: new FormControl('', [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
    
   });
    constructor() { }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    onSubmit(){
     console.log(JSON.stringify(this.form.value));
    }
 */
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', [Validators.required ,Validators.minLength(6)]],
            address: ['', [Validators.required ,Validators.minLength(10)]],
            dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            phno: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        console.log("Form Submitted" + JSON.stringify(this.registerForm.value, null, 4))
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
