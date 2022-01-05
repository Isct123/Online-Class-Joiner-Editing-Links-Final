var add = document.getElementById("add");
var clear_all = document.getElementById("delete")
imrunninoutofvariables = document.getElementsByClassName("Subject_Input");
lol = document.getElementsByClassName("Link_Input");

var element_number = 1;
function addelement(ids){
    var sub_input = document.createElement("INPUT");
    sub_input.className = "Subject_Input";
    sub_input.placeholder = "subject goes here";
    sub_input.id = ids;
    var link_input = document.createElement("INPUT");
    link_input.className = "Link_Input";
    link_input.placeholder = "link goes here";
    link_input.id = ids;
    document.getElementById("Info").appendChild(sub_input);
    document.getElementById("Info").appendChild(link_input);
}

add.addEventListener("click", function(){
    addelement(element_number);
    element_number+=1;
})

clear_all.addEventListener("click", function(){
    document.getElementById("Info").innerHTML = '';
    deleteCookie("data");
})