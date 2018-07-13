import Checkit from 'checkit';
import db from './_db';
import BaseModel from './_base-model';


class User extends BaseModel {
    get tableName() {
        return 'users';
    }

    hidden = ['password'];

    posts() {
        return this.hasMany('Post', 'user_id');
    }

    comments() {
        return this.hasMany('Comment', 'user_id');
    }



    validations = new Checkit({
        email       : ['email', 'required'],
        password    : ['required', 'string'],
        first_name  : ['required', 'string'],
        last_name   : ['required', 'string'],
    });
}


export default db.model('User', User);
