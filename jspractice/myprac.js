document.querySelectorAll("button")[0].addEventListener("click", function(){
    var text = this.innerHTML;
    document.getElementById("demo").innerHTML =`${text}`+  " is clicked";
})