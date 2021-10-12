import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { nameValidator } from '../Shared/user-name_validation';
import{ PasswordValidator} from '../Shared/password.validation';
import{FormRegistrService} from '../form-registr.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

 /* registrationForm=new FormGroup ({
    userName:new FormControl('',[Validators.required,Validators.minLength(8)]),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
  address:new FormGroup({
    city:new FormControl(''),
    state:new FormControl(''),
    pincode:new FormControl('')
  })
});*/  




  constructor(private _myFB:FormBuilder,private _regService:FormRegistrService) { }
    registrationForm!: FormGroup;



  ngOnInit() {
   this.registrationForm=this._myFB.group({
      userName:[' ',[Validators.required,Validators.minLength(8),nameValidator]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmpassword:[''],
      address:this._myFB.group({
        city:[''],
        state:[''],
        pincode:['']
      }),alternateEmails:this._myFB.array([])
    },{validator: PasswordValidator});
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      const email=this.registrationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required);
      }
      else{
        email?.clearValidators;
      }
      email?.updateValueAndValidity();
    });
  }
  get userName(){
    return this.registrationForm.controls.userName;
  }
  get email(){
    return this.registrationForm.controls.email;
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails')as FormArray;
  }

  addAlternateEmails(){
    this.alternateEmails.push(this._myFB.control(''));
  }

  displayValues(){
    this.registrationForm.setValue({
     userName:'testUser',
     password:'testPassword',
     confirmpassword:'testPassword',
     address:{
      city:'testCity',
       state:'testState',
       pincode:'869852'
     }

    });
  
  }
onsubmit(registrationForm:any){
  console.log(registrationForm.value);
  this._regService.enroll(this.registrationForm.value)
  .subscribe(
    data =>console.log('Success:',data)
  );
}



getDetails(){
  this._regService.getDetails()
  .subscribe(
    data =>console.log('Success:',data)
  );
}




}
