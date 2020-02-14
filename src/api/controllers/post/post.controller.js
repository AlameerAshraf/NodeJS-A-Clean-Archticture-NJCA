


async function paramsPostId(req , res , next , postId){
    console.log(postId)
};


async function createPost(req , res , next) {
    let user = req.body;
    let newUser = await userApps.createUser.execute(user);
    if (newUser.error != false) {
        res.json({
            code: newUser.code,
            message: newUser.message,
            error: newUser.error,
            data: false
        });
    } else {
        res.json({
            error: false,
            message: '',
            data: newUser,
            total: 1
        });
    }
};

async function getPost(req, res, next){

};


const actions = {
    createPost,
    paramsPostId,
    getPost
};

export default actions;