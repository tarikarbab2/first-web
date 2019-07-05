console.log("how are you")

const weatherform=document.querySelector("form")
const search=document.querySelector("input")
const m1=document.querySelector("#m-1")
const m2=document.querySelector("#m-2")

weatherform.addEventListener("submit",(e)=>{
    e.preventDefault()
     const location=search.value
     m1.textContent="Loading..."
     fetch("http://localhost:3000/weather?adress="+location).then((response)=>{
        
    response.json().then((data)=>{
        if(data.error){
            m1.textContent=data.error
        }
        else{
            m1.textContent= data.forcast
             m2.textContent=data.location
        }
    })
})
    
})