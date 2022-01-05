var ex = document.getElementById("export");
var save = document.getElementById("save");

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

ex.addEventListener("click", function(){
    save.click();
    download("links_info.txt", getCookie("data"));
})