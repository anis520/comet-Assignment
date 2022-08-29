// init nodemodules 

const express= require('express')
const router=express.Router()
const {readFileSync}=require('fs')
const path=require('path')




router.get('/',(req,res)=>{

const data=readFileSync(path.join(__dirname,'../db/data1.json'))
const data2=readFileSync(path.join(__dirname,'../db/data2.json'))
res.render('index',{
    
       data: JSON.parse(data.toString()),
       data2: JSON.parse(data2.toString())
 
})

})

router.get('/shop',(req,res)=>{


res.render('shop-3col.ejs')
 


})



module.exports=router
