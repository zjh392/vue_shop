import express from "express"
import {data} from "./data/data.js"
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.get("/list",(req,res)=>{
    const name = req.query.name
    const prods = data.filter(ele=>ele.name.includes(name))
    res.json({code:200,msg:'ok',data:prods})
})

app.get("/byid",(req,res)=>{
    const id = Number(req.query.id) || 1
    const prod = data.find((ele)=>ele.id===id)
    if(prod){
        res.json({code:200,msg:'ok',data:prod})
    }else{        
        res.json({code:400,msg:'null'})
    }
})
app.listen(3000,(err)=>{
    if(err) console.log(err.message)
    else console.log("服务器启动成功")
});