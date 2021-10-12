import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormRegistrService } from '../form-registr.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
 public  course=['Angular','React','js','vue js','MongoDB'];
 courseHaserror=true;
  userdaModel = new User("srihari","srihari@gmail.com","CSE",9652674854,"","default",true);

  constructor(private _regService: FormRegistrService ) { }

  ngOnInit(): void {
  }
  validateCourse(value:any){
  if(value=='default'){
    this.courseHaserror=true;
  }
  else{
    this.courseHaserror=false;
  }
 }
 onSubmit(myForm:any){
    console.log(myForm);
  // this._regService.enroll(this.userdaModel).subscribe(
    // data =>console.log('Sucess!',data),
    // error =>console.error('Error!',error)
  //)
 } 

}
