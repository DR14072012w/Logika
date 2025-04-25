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

function showInfo(infoId) {
    const popup = document.getElementById('infoContainer');
    const allContents = popup.querySelectorAll('.info-content');
  
    allContents.forEach(content => content.style.display = 'none');
  
    document.getElementById(infoId).style.display = 'block';
    popup.style.display = 'block';
}
  
function hideInfo() {
    document.getElementById('infoContainer').style.display = 'none';
}