const RazorPay = require("razorpay")
const {key_id, key_secret} = require("./index").test

const razorpay = new RazorPay({
    key_id,
    key_secret
  })

  module.exports = razorpay