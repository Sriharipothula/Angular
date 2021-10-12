import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _element:ElementRef) {
    // this._element.nativeElement.style.fontSize="12px";
     this._element.nativeElement.style.color="black";

   }
   @HostListener('mouseenter')mouseEnter(){
      this.changeColor("40px");
      this.changeColor("green");
   }

   @HostListener('mouseleave')mouseLeave(){
    this.changeColor("30px");
    this.changeColor("red")
 }
   changeColor(color:any){
    this._element.nativeElement.style.fontSize=color;
    this._element.nativeElement.style.color=color;


   }

}
