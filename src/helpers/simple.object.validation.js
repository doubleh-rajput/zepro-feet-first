import {
    validator, isRequired, chain, assemble, isInteger, isGreaterThanOrEqual
} from 'simple-object-validation';

// Email Validator:
const isValidEmail = validator(
    (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
    (param, name, value) => `Not a valid Email Address`
);

//Safe Validatotr : for massive assignment
const safe = (value) => undefined


//Is Required Utility Function
export function required(attr, value) {
    return isRequired(attr)(value);
}

export {
    chain, isRequired, assemble, safe, isValidEmail, isInteger, isGreaterThanOrEqual
};
