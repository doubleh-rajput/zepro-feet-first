import BaseModel from './base.model';
import { 
  isRequired, chain, safe
  } from '../helpers/simple.object.validation';

export class LoginRequestModel extends BaseModel {

  group_name;
  group_size;
  type_of_animal;
  comments;
  evaluation_id;

  rules = () => {
    return {
      group_name: chain([
        isRequired,
      ])('Email'),
      group_size: chain([
        isRequired,
      ])('Password'),
      type_of_animal: safe,
      comment: safe,
      evaluation_id: safe
    }
  }

  save = async () => {
    if(this.validate()){
        let data = this.values();
        data._id = `${data.name}-${data.evaluation_id}`;

        evaluationDBHelper()
        .insert(data)
        .then((info) => {
            data.rev = info.rev;
            return data;
            
        })
        .catch((err) => {
            if(err.status === 409){
                this.addError(farmname , 'Group Name Already Exist');
            }
            return false;
        })

    }
}
}