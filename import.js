document.getElementById('import_file')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                setCookie("data", fr.result, 365);
                location.reload();
            }
              
            fr.readAsText(this.files[0]);
        })