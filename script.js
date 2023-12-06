

let button1 = document.getElementById('button1')
let button2 = document.getElementById('resset')

let zaBoddy = document.querySelector('body');
let result = document.getElementById('result');

let divv = document.getElementById('zaDiv1')
let divv2 = document.getElementById('zaDiv2')
let inputDiv = document.getElementById('zaDiv3')


let result1 = document.getElementById('result1')

button1.addEventListener('click',function(){
    result.innerHTML = '<div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div>';


    fetch('https://restcountries.com/v3.1/all')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        var input1 = document.getElementById('input1');
    
         let name = data.filter((element)=>{
            
            return element.name.common.toLowerCase().includes(input1.value.toLowerCase())
            
        });
        result.innerHTML = '';

        name.forEach(country => {
          result.innerHTML += createCard(country);
        });
        
  console.log(name)
  
    })
})

function createCard(country) {
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${country.altSpellings[1]}</h5>
      <h5 class="card-title1">The capital: ${country.capital}</h5>
      <h5 class="card-title2">Population: ${country.population.toLocaleString()}</h5>
      <h5 class="card-title3">Area: ${country.area.toLocaleString()} km </h5>
      <a href="https://www.google.com/search?q=${country.name.common.toLowerCase()}+wikipedia&rlz=1C1GCEA_enMK974MK974&oq=${country.name.common.toLowerCase()}+&aqs=chrome.0.69i59j69i57j0i512l3j46i199i465i512j0i512j69i60.3150j0j9&sourceid=chrome&ie=UTF-8" target="_blank" class="btn btn-primary">Click to see More</a>

    </div>
  </div>`
}

button2.addEventListener('click',function(){
   return result.innerHTML = ""
 })



let macedoniaButton = document.getElementById('macedonia')
macedoniaButton.addEventListener('click',function(){
fetch('https://restcountries.com/v3.1/all')
.then(function(response){
    return response.json()
})
.then(function(mac){
    console.log(mac)
    zaBoddy.innerHTML = ""
   let nname = mac.filter((drzava)=>{
    return drzava.name.common === "North Macedonia"
   })
   nname.forEach((najdi)=>{
   zaBoddy.innerHTML = result1.innerHTML += table(najdi)
   })

let ddiv = document.createElement('div')
ddiv.classList.add('ddiv')

let link = document.createElement("a");
link.textContent = "click"
link.classList.add('btn11')
link.href = "file:///C:/Users/User/Petar22222%20Dropbox/Ph%20Dht/PC/Desktop/Country%20App%20WIki/Untitled-1.html";
link.innerHTML = "Click";
 
ddiv.append(link)
zaBoddy.append(ddiv)
console.log(nname)
})
})
function table(najdi){
   
    return`<ul class="list-group d-flex justify-content list-group-flush">
    <img class="card-img-top" style="width: 50%; height: auto;" src="${najdi.flags.png}" alt="Card image cap">

    <li class="list-group-item">${najdi.altSpellings[1]}</li>
    <li class="list-group-item">Capital : ${najdi.capital}</li>
    <li class="list-group-item">Population : ${najdi.population.toLocaleString()}</li>
    <li class="list-group-item">${najdi.area.toLocaleString()} km</li>
    <li class="list-group-item">Currencies : ${najdi.currencies.MKD.name}</li>
    <li class="list-group-item">Languages : ${najdi.languages.mkd}</li>
    <li class="list-group-item">Time Zone : ${najdi.timezones}</li>

  </ul>`

}
let div4 = document.getElementById('result3')
let euroButton = document.getElementById('eden')
euroButton.addEventListener('click',function(){

    fetch('https://restcountries.com/v3.1/all')
    .then(function(response){
        return response.json()
    })
     .then(function(myFunction){
zaBoddy.innerHTML = ""
        
        let euroDrzavi = [];

        for (let i = 0; i < myFunction.length; i++) {
          let country = myFunction[i];
          if (country.currencies && country.currencies.EUR) {
            euroDrzavi.push(country);
          }
        }

 console.log(euroDrzavi)
       
       euroDrzavi.forEach((x)=>{
       zaBoddy.innerHTML =  div4.innerHTML += zaEur(x)
        })
        
        let ddivE = document.createElement('div')
        ddivE.classList.add('ddiv')
        
        let link1 = document.createElement("a");
        link1.textContent = "click"
        link1.classList.add('btn11')
        link1.href = "file:///C:/Users/User/Petar22222%20Dropbox/Ph%20Dht/PC/Desktop/Country%20App%20WIki/Untitled-1.html";
        link1.innerHTML = "Click";
         
        ddivE.append(link1)
        zaBoddy.append(ddivE)
        console.log(myFunction)
     })




})

function zaEur(x){
 return `<div class="card" style="width: 18rem;">
 <img class="card-img-top" src="${x.flags.png}" alt="Card image cap">
 <div class="card-body">
   <h5 class="card-title">${x.altSpellings[1]}</h5>
   <h5 class="card-title1">The capital: ${x.capital}</h5>
   <h5 class="card-title2">Population: ${x.population.toLocaleString()}</h5>
   <h5 class="card-title3">Area: ${x.area.toLocaleString()} km </h5>
   <a href="https://www.google.com/search?q=${x.name.common.toLowerCase()}+wikipedia&rlz=1C1GCEA_enMK974MK974&oq=${x.name.common.toLowerCase()}+&aqs=chrome.0.69i59j69i57j0i512l3j46i199i465i512j0i512j69i60.3150j0j9&sourceid=chrome&ie=UTF-8" target="_blank" class="btn btn-primary">Click to see More</a>

 </div>`
}
 
 let divResult4 = document.getElementById('result4')
let englisLanguageButton1 = document.getElementById('device-width')
englisLanguageButton1.addEventListener('click',function(){
   zaBoddy.innerHTML = " "
   fetch('https://restcountries.com/v3.1/all')
   .then(function(response){
       return response.json()
   })
   .then(function(data){
         console.log(data)
        

         let englishLanguages = data.filter(country => 
            country.languages && country.languages.eng
          );
        console.log(englishLanguages)
        

        englishLanguages.forEach((x1)=>{
            zaBoddy.innerHTML = divResult4.innerHTML += jazik(x1)
        })
        let ddivEE = document.createElement('div')
        ddivEE.classList.add('ddiv')
        
        let link11 = document.createElement("a");
        link11.textContent = "click"
        link11.classList.add('btn11')
        link11.href = "file:///C:/Users/User/Petar22222%20Dropbox/Ph%20Dht/PC/Desktop/Country%20App%20WIki/Untitled-1.html";
        link11.innerHTML = "Click";
         
        ddivEE.append(link11)
        zaBoddy.append(ddivEE)

   })


})

function jazik(x1){
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${x1.flags.png}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${x1.altSpellings[1]}</h5>
      <h5 class="card-title1">The capital: ${x1.capital}</h5>
      <h5 class="card-title2">Population: ${x1.population.toLocaleString()}</h5>
      <h5 class="card-title3">Area: ${x1.area.toLocaleString()} km </h5>
      <a href="https://www.google.com/search?q=${x1.name.common.toLowerCase()}+wikipedia&rlz=1C1GCEA_enMK974MK974&oq=${x1.name.common.toLowerCase()}+&aqs=chrome.0.69i59j69i57j0i512l3j46i199i465i512j0i512j69i60.3150j0j9&sourceid=chrome&ie=UTF-8" target="_blank" class="btn btn-primary">Click to see More</a>
   
    </div>`
}




 

 
