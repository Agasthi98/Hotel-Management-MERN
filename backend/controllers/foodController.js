import Food from '../models/foodModel.js'
import asyncHandler from 'express-async-handler'

//retrive food items
const getFoods = asyncHandler(async (req, res) => {
    const food = await Food.find({})
    res.json(food)
  })


  //retrive food items by ID
  const getFoodbyID= asyncHandler(async (req, res) => {
    const food = await Food.findById(req.params.id)  
  
    if (food) {
      res.json({
      _id:food._id,
      name:food.name,
      description:food.description,
      price:food.price,
      category:food.category,
      images:food.images,
  
    })} else {
    res.status(404)
    throw new Error('food not found') 
    }
  })
//create food items
/*const createFood = asyncHandler(async (req, res) => {
  const food = new Food({
      name: 'Sample name',
      description: 'must have an alt prop, either with meaningful text, or an empty string for decorative ima',
      price: 0,
      category: 'Sample category',
      image: '/images/las.jpg',
  })

  const createdFood = await food.save()
  res.status(201).json(createdFood)
})*/
  

const createFood = asyncHandler(async(req, res) => {  
    const { 
       name,     
       description,     
       price,     
       category,
       image1,
       image2,
       image3
           
  } = req.body 
      const newfood = await Food({  
        name,
        description,     
        price,     
        category,
      images:[
        image1,
        image2,
        image3]  
         
     }) 
       try
      {    
        await newfood.save()
         res.send('Food Added Successfully')
         } catch(error) {
        return res.status(400).json({ error });
      }
      })


      const deleteFood = asyncHandler(async (req, res) => {
        const food = await Food.findById(req.params.id)
    
        if (food) {
            await food.remove()
            res.json({ message: 'item removed' })
        } else {
            res.status(404)
            throw new Error('Item not found')
        }
    })

  
  
  export { getFoods,getFoodbyID,createFood , deleteFood}