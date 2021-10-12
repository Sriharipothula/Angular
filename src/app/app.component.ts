import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material';
  notfications=3;
 
 showSpinner=false;
 loaddata(){
   this.showSpinner=true;
   setTimeout(()=>{
     this.showSpinner=false;
   },1000);
 }

 opened=true;
 username="Srihari";
 myChange(index:any){
  console.log(index)
}

}
