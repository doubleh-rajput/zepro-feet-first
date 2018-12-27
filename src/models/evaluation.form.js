import BaseModel from './base.model';
import {
    isRequired, chain,
    safe
} from '../helpers/simple.object.validation';
import { evaluationDBHelper } from '../helpers/db';

export default class EvaluationFormModel extends BaseModel {

    farmname;
    consulation_date;
    permise_id;
    first_name;
    last_name;
    role;
    primary_email;
    secondary_email;
    address1_address;
    address1_suite;
    address1_city;
    address1_state;
    address1_zipcode;
    address2_address;
    address2_suite;
    address2_city;
    address2_state;
    address2_zipcode;

    rules = () => {
        return {
            farmname: chain([
                isRequired,
            ])('Farm Name'),
            consulation_date: chain([
                isRequired,
            ])('Consulation Date'),
            permise_id: safe,
            first_name: safe,
            last_name: safe,
            role: safe,
            primary_email: safe,
            secondary_email: safe,
            address1_address: safe,
            address1_suite: safe,
            address1_city: safe,
            address1_state: safe,
            address1_zipcode: safe,
            address2_address: safe,
            address2_suite: safe,
            address2_city: safe,
            address2_state: safe,
            address2_zipcode: safe,
        }
    }

    save = async () => {
        let data = this.values();
        data._id = this.farmname;
        data.is_sync = 0;

        if(!this.validate()){
            return false
        }

        return evaluationDBHelper()
            .insert(data)
            .then((info) => {
                data.rev = info.rev;
                return data;
            })
            .catch((err) => {
                if (err.status === 409) {
                    this.addError('farmname', 'Farm name Already Exist');
                }

                return false;
            })
    }
}