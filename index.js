var con = document.querySelector("#container")
var love = document.querySelector("i")
var flag = 0;

// con.addEventListener("dblclick", function(){
//     love.style.transform = "translate(-50%, -50%) scale(1)"
//     if(flag == 0){
//         setTimeout(function(){
//             love.style.transition = "none"
//             love.style.transform = "translate(-50%, -50%) scale(0)"
//         }, 3000);
//         flag = 1;
    
//     }
//     else{
//         love.style.transition = "all ease 0.4s"
//         setTimeout(function(){
//             love.style.transform = "translate(-50%, -50%) scale(0)"
//             love.style.transition = "none"
//         }, 3000);
//         flag = 0;
//     }    
// })

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.8

    setTimeout(function(){
        love.style.opacity = 0;
    }, 1000);

    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000);

    
})
