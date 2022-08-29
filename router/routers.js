// init nodemodules 

const express= require('express')
const router=express.Router()
const {readFileSync}=require('fs')
const path=require('path')




router.get('/',(req,res)=>{

const data=readFileSync(path.join(__dirname,'../db/data1.json'))
const data2=readFileSync(path.join(__dirname,'../db/data2.json'))
const data3=readFileSync(path.join(__dirname,'../db/data3.json'))
res.render('index',{
    
       data: JSON.parse(data.toString()),
       data2: JSON.parse(data2.toString()),
       data3: JSON.parse(data3.toString())
 
})

})

router.get('/shop',(req,res)=>{

    const data4=readFileSync(path.join(__dirname,'../db/data4.json'))

res.render('shop',{
    
    data4: JSON.parse(data4.toString()),


}) 


})



module.exports=router
