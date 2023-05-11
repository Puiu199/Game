class pointer
{
    constructor(punct)
    {
        this.punct=document.createElement(punct.tag);
        this.punct.style.top=punct.top;
        this.punct.style.left=punct.left;
        this.punct.classList=punct.clas;
        document.querySelector('.display').append(this.punct);
    }
}

let x,y,score=0;
function create_CORDONATION(x,y)
{
x=Math.random()*100;
y=Math.random()*100;
create_point(); 
}

let cordonation=
{   clas:"pi",
    tag:"div",
    top:x+"%",
    left:y+"%"
}

$(document).ready(function()
{
    $('.pi').on('click',function(){
        $('.pi').remove('div');
        score=score+1;
       create_CORDONATION(x,y);
    })
      
})
function create_point()
{
    new pointer(cordonation);
}
