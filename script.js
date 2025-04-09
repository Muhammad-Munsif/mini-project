const kidApp = (e) =>{
    e.preventdefault()
    const input = document.getElementById("letter")
    const letter = input.value.toLowerCase()
    const title = document.getElementById("title")
    const picture = document.getElementById("picture")

    if(letter == "a"){
        title.innerHTML = "Apple";
        picture.src = "images/"
    }
    else{
        title.innerHTML = "option is not found"
    }
}