var data = getCookie("data");
link_info = data.split(", ");
console.log("data:")
console.log(data);
var subjects_list = [];
var links_list = [];
for (var i = 0; i<link_info.length; i++){
    
    if(i%2 == 0){
        subjects_list.push(link_info[i]);
    }
    else{
        links_list.push(link_info[i]);
    }
    
}

var count = subjects_list.length;
for (var i=0;i<count;i++){
    //console.log(mydata[i].Subject)
    var btn = document.createElement("BUTTON");
    btn.id = subjects_list[i];
    btn.className = "LinkButton"
    btn.innerHTML = subjects_list[i];
    document.getElementById("links").appendChild(btn);   
}

document.querySelectorAll('.LinkButton').forEach(item => {
    item.addEventListener('click', event => {
        for (var i=0;i<count;i++){
            if(subjects_list[i]==item.innerHTML){
                window.open(links_list[i])
            }
        }
    })
})