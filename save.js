
var save = document.getElementById("save");
links = [];

save.addEventListener("click", function(){
    links = [];
    var subjects_cookie = document.getElementsByClassName("Subject_Input")
    var links_cookie = document.getElementsByClassName("Link_Input")
    for (var i = 0; i<subjects_cookie.length; i++){
        links.push(subjects_cookie[i].value, links_cookie[i].value)
    }
    setCookie("data", links.join(", "), 365);
})