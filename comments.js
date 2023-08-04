//create web server
//import modules
import { Router } from 'express';
const router = Router();
import { index } from '../controllers/comments';
//handle requests
router.get('/comments', index);
router.get('/comments/:id', index);
