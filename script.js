class pointer
{
    constructor(punct)
    {
        this.punct=document.createElement(punct.tag);
        this.punct.style.top=punct.localStorage;
        this.punct.style.left=punct.left;
        this.punct.classList=punct.clas;
        document.querySelector('.display').append(this.punct);     
    }
}
let x,y,score=0;
let date=[localStorage.getItem('x'),localStorage.getItem('y')];
function create_CORDONATION()
{
    localStorage.setItem('x',Math.random()*100);
    localStorage.setItem('y',Math.random()*100);
    console.log(date)
}
function del()
{
    date.shift();
    date.pop();
}

let cordonation=
{   
    clas:"pi",
    tag:"div",
    top:localStorage.getItem('x')+"%",
    left:localStorage.getItem('y')+"%"
}
$(document).on('click','.pi',function()
{
    create_CORDONATION()
    create_point();
})

function create_point()
{     
    new pointer(cordonation);
    create_CORDONATION()
}

