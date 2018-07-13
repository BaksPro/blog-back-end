import Checkit from 'checkit';
import db from './_db';
import BaseModel from './_base-model';


class Comment extends BaseModel {
    get tableName() {
        return 'comments';
    }

    post() {
        return this.belongsTo('Post', 'post_id');
    }

    user() {
        return this.belongsTo('User', 'user_id');
    }



    validations = new Checkit({
        post_id: ['integer', 'required'],
        user_id: ['integer', 'required'],
        text: ['required', 'string'],
    });
}


export default db.model('Comment', Comment);
