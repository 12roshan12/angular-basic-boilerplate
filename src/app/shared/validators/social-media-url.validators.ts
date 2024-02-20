import { AbstractControl, ValidatorFn } from '@angular/forms';

export class SocialMediaValidators {
 

  static mediaValidator(matchingControl: number | null): ValidatorFn {
    const validators: { pattern: RegExp; errorKey: string }[] = [
      { pattern: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*[^.]$/i, errorKey: 'invalidLinkedinUrl' },
      { pattern: /^(https?:\/\/)?(www\.)?facebook\.com\/.*[^.]$/i, errorKey: 'invalidFacebookUrl' },
      { pattern: /^(https?:\/\/)?(www\.)?instagram\.com\/.*[^.]$/i, errorKey: 'invalidInstagramUrlValidator' },
      { pattern: /^(https?:\/\/)?(www\.)?twitter\.com\/.*[^.]$/i, errorKey: 'invalidTwitterUrlValidator' },
      { pattern: /^(https?:\/\/)?(www\.)?github\.com\/.*[^.]$/i, errorKey: 'invalidGithubUrl' },
    ];

    const selectedValidator = matchingControl?validators[matchingControl - 1]:null;
    console.log('form custom media validator')
    console.log(selectedValidator)
    return selectedValidator
      ? SocialMediaValidators.urlValidatorFactory(selectedValidator.pattern, selectedValidator.errorKey)
      : (() => null as any); // Return a dummy validator function that always returns null
  }

  private static urlValidatorFactory(pattern: RegExp, errorKey: string): ValidatorFn {
    return (control: AbstractControl) => {
      const url = control.value;
      return pattern.test(url) ? null : { [errorKey]: true };
    };
  }
}
