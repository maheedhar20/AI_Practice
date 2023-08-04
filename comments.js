//create web server
import { Router } from 'express';
var router = Router();
import Comment from '../models/comment';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config/database';

//create comment
router.post('/create', function(req, res){
	if(!req.body.content){
		res.json({success: false, message: 'Comment content is required'});
	}else{
		if(!req.body.author){
			res.json({success: false, message: 'Comment author is required'});
		}else{
			if(!req.body.postId){
				res.json({success: false, message: 'Comment post id is required'});
			}else{
				var comment = new Comment({
					content: req.body.content,
                });
            }
                    }
                }
            });
