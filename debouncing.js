let id 
    let key = "c0394b37"
    async function searchData(){
        var search = document.getElementById("inputSearch").value
        let url = `http://www.omdbapi.com/?apikey=${key}&s=${search}`
        let res = await fetch(url)
        let data = await res.json()
        
        // showSearch(data.Search) 
         return data.Search
    }
    let resultDiv = document.getElementById("resultDiv")
  
   async function showSearch(){
   
       let data = await searchData()
       resultDiv.innerHTML = null
       if(data === undefined){
           return false
       }
    data.map(e => {
        
        let title = document.createElement("h6")
        title.setAttribute("id","MovieTitle")
        console.log(e.Title)
        title.innerHTML = e.Title
        console.log(title)
        resultDiv.append(title)
    })
    }
    function debouncing(func,delay){
        clearTimeout(id)
        id = setTimeout(() => {
         func()
        },delay)
        
    }