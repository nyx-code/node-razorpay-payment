const express = require("express")
const RazorPay = require("../config/RazorPay")
const uuid = require("uuid/v4")

const router = express.Router()

router.get('/',(req, res) => {
    RazorPay.payments.all().then((data)=>{
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

router.get('/:id',(req,res) => {
    RazorPay.payments.fetch(req.params.id).then((data)=>{
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

router.post('/:id/capture',(req, res) => {
    RazorPay.payments.capture(req.params.id, req.body.amount,req.body.currency).then((data)=>{
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

router.get('/:id/bank', (req, res) => {
    RazorPay.payments.bankTransfer(req.params.id).then((data)=>{
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

router.post('/create-link', (req, res) => {
    const params = {
        type: "link",
        amount: req.body.amount,
        currency: req.body.currency,
        description: req.body.description,
        customer: req.body.customer
    }
    RazorPay.invoices.create(params).then((data)=>{
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