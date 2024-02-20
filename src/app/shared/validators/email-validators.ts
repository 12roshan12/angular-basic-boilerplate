import { AbstractControl } from "@angular/forms";

export function validateEmailWithTwoDotsMax(control: AbstractControl): { [key: string]: any } | null {
   const email = control.value;
   if(email){
      // Split the email address into local and domain parts
      const [localPart, domainPart] = email.split('@');
      if (!domainPart) {
        // No @ symbol found or no domain part
        return { 'invalidEmail': true };
      }
      const dotCountAfterAtSymbol = domainPart.split('.').length - 1;

      if (dotCountAfterAtSymbol > 2) {
        // More than two dots found after the @ symbol
        return { 'moreThanTwoDotsAfterAt': true };
      }
   }
   
   return null;
}