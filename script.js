let arry = [1,7,3,1,0,20,77]
let stringified1 = JSON.stringify(arry)

let startinput = document.getElementById("start")
let deleteinput = document.getElementById("delete")
let Addinput = document.getElementById("add")
let addbuttn = document.getElementById("btn")
let paragraph = document.getElementById("para")
paragraph.textContent = stringified1

addbuttn.onclick = function(){
    if(startinput.value === ""){
        alert("enter the start index")
    }else{
        let startinput_value = parseInt(startinput.value)
        let deletevalue = parseInt(deleteinput.value)
        let addvalue = parseInt(Addinput.value)
        if (isNaN(addvalue)){
        arry.splice(startinput_value,deletevalue,Addinput.value)
        let stringyfiedarry = JSON.stringify(arry)
        paragraph.textContent = stringyfiedarry
        }else{
            arry.splice(startinput_value,deletevalue,addvalue)
        let stringyfiedarry = JSON.stringify(arry)
        paragraph.textContent = stringyfiedarry
        }
    }
    startinput.value = ""
    deleteinput.value = 0
    Addinput.value = 1
}
