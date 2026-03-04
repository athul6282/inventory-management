import inventory from "../models/inventoryData.js";

export const addItem = (req,res) => {
    const {name,category,quantity,price} = req.body;
    const newItem = {
        id:inventory.length+1,
        name,
        category,
        quantity,
        price,
    }
    inventory.push(newItem);
    res.status(201).json({
        message:"new item added successfully"
    });

}

export const getItem = (req,res) => {
let result = [...inventory];

    if(req.query.category){
        result = result.filter((item) => item.category.toLowerCase() === req.query.category.toLowerCase())
    }

    if(req.query.quantity){
        result = result.filter((item)=> item.quantity <= parseInt(req.query.quantity))
    }

    if(req.query.name){
        result = result.filter((item) => item.name === req.query.name)
    }

    res.status(200).json({
        message:"items fetched successfully",
        data : result
    })
}

export const getSingleItem = (req,res) => {
    item = inventory.find((i)=>i.id === req.params.id);

    if(!item){
       return res.status(404).json({message:"item not found!"})
    }
    res.status(200).json({
        message:"item fetched successfully"
    })
}

export const updateItem = (req,res) =>{
    const  item = inventory.find((i)=>i.id === req.params.id);

    if(!item){
       return res.status(404).json({message:"item not found!"})
    }
    Object.assign(item,req.body);
    res.status(200).json({
        message:"item fetched successfully"
    })
}

export const deleteItem = (req,res) => {
   const index = inventory.findIndex((i)=>i.id === req.params.id )

   if(index === -1){
    res.status(404).json({
        message : "item not found!"
    })
   }
   inventory.splice(index,1);

   res.status(200).json({message:"item deleted"})
};
