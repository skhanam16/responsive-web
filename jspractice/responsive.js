//execute script after page load

window.onload = function myfunction(){
    //toggle button
    let toggle = document.querySelector("#nav .toggle-btn btn");
    let collapse = document.querySelector('#nav .collapse');
    // console.log(collapse);
    toggle.addEventListener('click',function(event){
        // for(let cssClass of collapse.classList){
        //     console.log(cssClass);
        // }
        // let current = document.getElementsByClassName("active");
       collapse.classList.toggle('active');
        // console.log(toggle);
    });

    //Masonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");
    let msnry = new Masonry(grid, {
        // options
        itemSelector:'.flex-item',
        gutter: 100,
        fitWidth:true
      });

}