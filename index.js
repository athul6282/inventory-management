import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import inventoryRoutes from './routes/inventoryRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/api/inventory",inventoryRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
});