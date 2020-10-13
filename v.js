const next=document.querySelector('.next');
const submit=document.querySelector('.submit')
const inp=document.querySelector('input')
const img=document.querySelector('img');
const pic=document.querySelector('.images')
const begin=document.querySelector('.begin')
const correct=document.querySelector('.correct')
const wrong=document.querySelector('.wrong')
const Qsect=document.querySelector('.question')


let i=0;


next.addEventListener('click',function(){

    

    Qsect.style.display='block'
    begin.style.display='none';
    next.innerText='Next'

    let Number=[1,2,3]
    
     b=Number[i];
    
    img.src='k-'+b+'.jpg';

    next.style.display='none'
    i++;
    wrong.style.display='none';
    correct.style.display='none';
    inp.value="";


     if(i===4){i=0; 
     begin.innerHTML=' Click begin to Start again';
     begin.style.display='block';
     next.innerText='Begin';
     next.style.display='block';
     Qsect.style.display='none'



    }



})

inp.addEventListener('click',function(){
inp.placeholder=""
})








submit.addEventListener('click',function(){
var b=inp.value

function capitalizeFirstLetter (b){
    return b.charAt(0).toUpperCase() + b.slice(1);
  }

var k=capitalizeFirstLetter(b)

inp.value=k;



if(i===1){console.log('b equal 1');if(k==='Kia'){
    correct.style.display='block';
    next.style.display='block';
    wrong.style.display='none'
}
else{wrong.style.display='block';
  next.style.display='none';
  correct.style.display='none'

}

}

else if(i===2){console.log('b equal 2');if(k==='Mazda'){
    correct.style.display='block';
    next.style.display='block'
    wrong.style.display='none'

}

else{wrong.style.display='block';
 next.style.display='none';
 correct.style.display='none'}
}

else if(i===3){console.log('b equal 3');if(k==='Toyota'){
    correct.style.display='block';
    next.style.display='block'
    wrong.style.display='none'

}

else{wrong.style.display='block';
next.style.display='none';
correct.style.display='none'}
}

})