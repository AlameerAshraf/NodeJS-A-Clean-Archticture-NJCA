import postService from '';
import postModel from '';

import createPost from './create-post/create-post';


// Construct the post service!
const service = new postService();

export default () => {
    return Object.freeze({
        createPost: new createPost(service)
    })
};

