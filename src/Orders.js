const express = require("express")
const RazorPay = require("../config/RazorPay")
const uuid = require("uuid/v4")

const router = express.Router()

router.get('/', (req,res) => {
    RazorPay.orders.all().then((data)=>{
        res.status(200).json({
            status: "success",
            data
        })
    }).catch((error)=>{
        res.status(500).json({
            status: "fail",
            error
        })
    })
})

router.get('/:id', (req, res) => {
    RazorPay.orders.fetch(req.params.id).then((data)=>{
        res.status(200).json({
            status: "success",
            data
        })
    }).catch((error)=>{
        res.status(500).json({
            status: "fail",
            error
        })
    })
})

router.get('/payments/:id',(req, res) => {
    RazorPay.orders.fetchPayments(req.params.id).then((data)=>{
        res.status(200).json({
            status: "success",
            data
        })
    }).catch((error)=>{
        res.status(500).json({
            status: "fail",
            error
        })
    })
})

router.post('/create',(req, res) => {
    const params = {
        amount:req.body.amount, 
        currency:req.body.currency, 
        receipt: uuid()
    }

    RazorPay.orders.create(params).then((data)=>{
        res.status(200).json({
            status: "success",
            data
        })
    }).catch((error)=>{
        res.status(500).json({
            status: "fail",
            error
        })
    })
})

module.exports = router