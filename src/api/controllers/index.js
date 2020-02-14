import { Router } from 'express';
import * as post from './post/post.routes';


// Define router.. 
var router = Router();


// controllers
router.use('/posts' , post.default);



export default router;

