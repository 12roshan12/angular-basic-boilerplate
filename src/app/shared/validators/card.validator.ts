import { AbstractControl } from "@angular/forms";
import cardvalidator from 'card-validator'

export function ValidateCard(control: AbstractControl): { [key: string]: any } | null {
   const cardValue = control.value;

   if (cardValue) {
      let temp = cardValue.replace(/\s/g, '')
      let object: any = cardvalidator.number(temp)
      if (object.isValid || object.isPotentiallyValid) {
         return { 'invalidCard': false }
      }
      else {
         return { 'invalidCard': true }
      }
   }

   return null;
}