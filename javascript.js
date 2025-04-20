let searchTextBox = document.querySelector('.SearchTextBox')
let searchButton = document.querySelector('.Search')

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
