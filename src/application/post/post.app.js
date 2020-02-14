import postService from '../../services/post.service';
import postModel from '../../models/post/post';

import createPost from './create-post/create-post';


// Construct the post service!
const service = new postService(new postModel().constructModel() );

export default () => {
    return Object.freeze({
        createPost: new createPost(service)
    })
};

