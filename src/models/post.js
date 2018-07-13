import Checkit from 'checkit';
import db from './_db';
import BaseModel from './_base-model';


class Post extends BaseModel {
    get tableName() {
        return 'posts';
    }


    validations = new Checkit({
        text: ['required', 'string',],
        user_id: ['integer', 'required'],

    });

    user() {
        return this.belongsTo('User', 'user_id');
    }

    comments() {
        return this.hasMany('Comment', 'post_id');
    }


}


export default db.model('Post', Post);
