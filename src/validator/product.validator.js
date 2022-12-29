/*
import {check, validationResult} from 'express-validator'

const productValidator =[
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('description')
        .exists()
        .not()
        .isEmpty(),
    check('price')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),   
    check('imgURL')
        .exists(),

    (req,res,next)=>{
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            res.status(403)
            res.render('./product/error',{ errors: error.array() })
        }
    }

]

const validatorResult = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({errors: error.array()})
    }
}

module.exports = {productValidator}