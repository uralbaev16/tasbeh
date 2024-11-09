const  count = document.querySelector(".counter-disp")
const  title = document.querySelector(".title")

let offset = 0

function inc(){
    offset ++
    count.innerHTML = offset
    if(offset < 33){
        title.innerHTML = "Subhanallah"
    }else if(offset < 66){
        title.innerHTML = "Alhamdulillah"
    }else if(offset < 99){
        title.innerHTML = "Allohuakabr"
    }else {
        offset = 0
    }
}

function reset(){
    offset = 0
    count.innerHTML = offset
}