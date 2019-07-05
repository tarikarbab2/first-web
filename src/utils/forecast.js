const request=require("request")

const forecast=(adress,rain,callback)=>{
    const  url="https://api.darksky.net/forecast/b25620b0bdbdc5160d2be8798d713282/"+adress+","+rain
    request({url,json:true},(err,{body})=>{
       if(err){
           callback("you have no network",undefined);
       }
       else if(body.error){
           callback("there is no match",undefined)
          
       }
       else{
         callback(undefined,body.daily.data[0].summary+" it is cureently "+ body.currently.temperature+" degree out. and there is "+body.currently.precipProbability+"% rain chance")
            
           
           
    
       
   } 
   })
}
   module.exports=forecast