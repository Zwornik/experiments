import { FormControl } from "@angular/forms";

export class SurnameFormControl extends FormControl {

override setValue(value: any, options:any):void {
  super.setValue(value? value.toUpperCase():"", {...options, emitModelToViewChange: true});  
};
}
