import express from 'express';
import 'dotenv/config'
import cors from "cors"
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

// app config
const app = express()
const port = process.env.PORT || 4000
connectCloudinary()

//middleware   
app.use(express.json());
app.use(cors());

// api endpoint

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get('/', (req, res) => {
    res.send("api working")
})

app.listen(port, () => {
    connectDB()
    console.log(`listening on port ${port}`)
})