import { assemble } from '../helpers/simple.object.validation';

class BaseModel{

    is_sync = 0;

    //All Model Errors
    errors = {};

    values = () => { 
        let value = {};
        Object.keys(this.rules()).map((item) => {
            value[item] = this[item];
        });

        return value;
    };

    //Rules Method
    rules;

    //Validate Function
    validate = () => {
        const isValid = assemble(this.rules());
        const values= this.values();

        this.errors = isValid(values);
        
        return this.hasErrors()
    };

    //Get Errors Functions
    getErrors = () => this.errors;

    //Load Function
    load(data ){
        Object.keys(this.rules()).map((item) => {
            this[item] = data[item];
        })
    }

    hasErrors = () => {
      return (Object.keys(this.errors).length === 0);
    }

    getFirstError = () => {
        let index = Object.keys(this.errors);
        return this.errors[index[0]];
      }

    addError = (attribute, error) => {
        this.errors[attribute] = error;
    }
}

export default BaseModel;