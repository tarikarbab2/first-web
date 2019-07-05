const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const location=require("./utils/location.js")
 const forecast=require("./utils/forecast.js")
 const port=process.env.PORT || 3000

//path declartion
const public=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partailsPath=path.join(__dirname,"../templates/partials")

//set the path
app.use(express.static(public))
app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partailsPath)





//the route
app.get("/",(req,res)=>{
    res.render("index",{
        name:"tarik",
        title:"weather"
    })
})
app.get("/help",(req,res)=>{
    res.render("help",{
        title:"help page",
        name:"tarik"
    })
    
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"about me",
        name:"tarik"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.adress){
        return res.send({
            error:"there is no search"
        })
    }
    location(req.query.adress,(error,{latitiud,longtiud,location} ={})=>{
        if(error){
            return res.send({error})
        }  
          forecast(latitiud,longtiud, (error, dataforcast) => {
              if(error){
                 return res.send({error})
              }
              res.send({
            
               forcast:dataforcast,
               location,
               adress:req.query.adress
              })
              
          })
         
    })
})

app.get("/help/*",(req,res)=>{
    res.redirect("/help")
})
app.get("*",(req,res)=>{
    res.redirect("/")
})

app.listen(port,(req,res)=>{
    console.log("the server has start in "+port)
})