const request=require("request")

const location=(adress,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoidGFyaWs1NSIsImEiOiJjanhoejJobHEwYnJjM3BtdzV4YWtkYW5zIn0.i0sNmkaln8tYNteOoI95yw&limt=1'
    request({url,json:true},(err,{body})=>{
       if(err){
           callback("you have no network",undefined);
       }
       else if(body.features.length===0){
           callback("there is no match",undefined)
           console.log(adress)
       }
       else{
         callback(undefined,{
            latitiud:body.features[0].center[0],
            longtiud:body.features[0].center[0],
            location:body.features[0].place_name
           })
       }
       
   }) 
   }
   module.exports=location