import express from 'express'
import {addItem,getItem,getSingleItem,updateItem,deleteItem} from '../controllers/inventoryController.js'

const router = express.Router();

router.get("/getItems",getItem)
router.get("/:id/getsingleitem",getSingleItem)
router.post("/additem",addItem)
router.put("/:id/updateitem",updateItem)
router.delete("/:id/deleteitem",deleteItem)


export default router;