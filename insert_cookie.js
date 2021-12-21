var subjects = document.getElementsByClassName("Subject_Input");
var links_for_cookie = document.getElementsByClassName("Link_Input");
links_list = [];
subjects_list = [];

console.log(links_for_cookie[0]);

var f = getCookie("data");
link_info = f.split(", ");

for(var i = 0; i<link_info.length/2-1;i++){
    add.click();
}

for (var i = 0; i<link_info.length; i++){
    console.log(links_for_cookie[0])
    
    if(i%2 == 0){
        subjects_list.push(link_info[i]);
    }
    else{
        links_list.push(link_info[i]);
    }
    
}

for (var i = 0; i<links_list.length; i++){
    links_for_cookie[i].value = links_list[i];
}
for (var i = 0; i<subjects_list.length; i++){
    subjects[i].value = subjects_list[i];
}
console.log(link_info);