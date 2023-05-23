let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')
let slide=document.querySelector('.slideJs')
let offset=0
btn1.addEventListener('click', function(){
    offset-=940
    if(offset>-940*3){
        offset=0
    }
    slide.style.left=offset+'px'
})
btn2.addEventListener('click', function(){
    offset-=940
    if(offset<-940*3){
        offset=0
    }
    slide.style.left=offset+'px'
})
