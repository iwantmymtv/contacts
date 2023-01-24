export interface ValidationErrors {
    [field: string]: string;
  }
  
  interface ValidationRules {
    [field: string]: {
      required?: boolean;
      minLength?: number;
      pattern?: RegExp;
    }
  }
  
  export function validate(data: any, rules: ValidationRules): ValidationErrors {
    const errors: ValidationErrors = {};

    for (const field in rules) {
      const value = data[field];
      const fieldRules = rules[field];

      for (const rule in fieldRules) {
        if (rule === 'required' && !value) {
          errors[field] = 'This field is required';
        } else if (rule === 'minLength' && fieldRules.minLength && value.length < fieldRules.minLength) {
          errors[field] = `This field must be at least ${fieldRules.minLength} characters`;
        } else if (rule === 'pattern' && fieldRules.pattern && !fieldRules.pattern.test(value)) {
          errors[field] = 'This field is invalid';
        }
      }
    }
    return errors;
  }