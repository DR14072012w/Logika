let searchTextBox = document.querySelector('.searchTextBox')
let searchButton = document.querySelector('.searchButton')

let list = [
    "test",
]

searchButton.addEventListener("click", function(){

    let value = searchTextBox.value
    
    if (value!==null, value!==""){
        if (list.includes(value)){
            alert("true")
        }else{
            alert("false")
        }
    }

})
