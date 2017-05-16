    
function AJAXGet(url, callback){
    
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp.responseText);
            // console.log(xhttp.responseText);
            // alert(xhttp.responseText);
            // document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    }
        
    xhttp.open("GET", url, true);
    xhttp.send();    
    
}
