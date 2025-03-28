import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyRazorpay, verifyStripe } from '../controllers/order.controllers.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()

// Admin Features
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateStatus)

// Payment Features
orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/stripe",authUser,placeOrderStripe)
orderRouter.post("/razorpay",authUser,placeOrderRazorpay)

// User Feature
orderRouter.post("/user-orders", authUser, userOrders)

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe)
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay)

export default orderRouter