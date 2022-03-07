async function getData(){
    let res = await fetch("https://api.giphy.com/v1/stickers/trending?api_key=7QlaxGBr30Hjanpk3tllesY0gI25Jjhu")
   let data = await res.json()
   console.log(data.data)
   showData(data.data)
 }
 getData()
var box =  document.getElementById("box2")
 async function showData(data){
    data.forEach(e => {
   
   let innerDiv =  document.createElement("div")
   innerDiv.setAttribute("class"," innerDiv shadow p-3 rounded")
   let textDiv = document.createElement("div")
    let text =  document.createElement("h6")
    text.setAttribute("id","tagline")
    text.innerHTML ="Stickers"
   let imgDiv = document.createElement("div")
   imgDiv.setAttribute("class","imgDiv")
   let image = document.createElement("iframe")
   image.setAttribute("class","Image1")
   let item = e.embed_url
    image.setAttribute("src",item)
    textDiv.append(text)
    imgDiv.append(image)
    innerDiv.append(imgDiv,textDiv)
    box.append(innerDiv)
    })
 }
 let footer = document.getElementById("footer")
 let topbtn = document.getElementById("go-top")
 topbtn.addEventListener("click",topFunction)
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   topbtn.style.display = "block";
   footer.style.display = "none"
  } else {
   topbtn.style.display = "none";
   footer.style.display = "flex";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// window.onscroll = function() {scrollFooterFunction()};
// function scrollFooterFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    ;
//   } else {
//    ;
//   }
// }