// console.log(document);

// let text = document.getElementsByTagName("p")
// console.log(text[1].innerText);

// let text= document.getElementById("txt")


// text.innerHTML="<b>salam</b>"


// let text= document.querySelector("#container p")
// let texts= document.querySelectorAll("#container p")


// for (const item of texts) {

//     item.style.color="red"

// }

// console.log(text);
// console.log(texts);


// text.style.color="blue"
// text.style.backgroundColor="red"


// function send(){
//     alert("Hello p126")
// }


// let sent= document.getElementById("succes-btn")

// sent.onclick= function(){
//     alert("hello")
// }

// sent.onclick= function(){
//     alert("salam")
// }

// sent.addEventListener("click",function(){
//     alert("hello")
// })

// sent.addEventListener("click",function(){
//     alert("salam")
// })

// input.className="exam"

// console.log(input);




let input = document.querySelector(".text-input")
let btn = document.getElementById("succes-btn")
let parent = document.querySelector(".parent-li")

// btn.onclick=function(){
//     console.log(input.value);
//     input.value=""
// }

btn.addEventListener("click", function () {



    if (input.value == "") {
        alert("bosh")
        return;
    }
    let li = document.createElement("li");
    let icon = document.createElement("i")
    icon.className="fas fa-times pt-1"
    icon.style.float="right"
    
    li.classList.add("list-group-item")
    li.innerText = input.value
    li.append(icon)

    parent.append(li)
    input.value = ""

    icon.onclick = function () {
        li.remove()
    }

})