import { Router } from 'express';
import * as api from './controllers';

// Define routes..
var router = Router();

// API Main route..
router.use('/api' , api.default);


export default router;