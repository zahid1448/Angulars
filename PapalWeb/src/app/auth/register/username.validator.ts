import{AbstractControl,ValidationErrors} from "@angular/forms";
export class UserValidator {
static dontGiveTheWhiteSpace(control:AbstractControl):ValidationErrors | null {
        if((control.value as string ).indexOf(" ") >=0)
        {
        return {dontGiveTheWhiteSpace : true};
              }
        else 
            {
            return null;
           }
       }
}
