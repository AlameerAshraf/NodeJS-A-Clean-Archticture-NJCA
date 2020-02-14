import postActions from './post/post.app';

export default () => {
    return Object.freeze({
        postActions: postActions
    });
}