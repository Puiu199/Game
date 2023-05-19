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
    let x,y;
    let cordonation=
    {   
        clas:"point",
        tag:"div",
        top:"0",
        left:"0"
    }
 function create_CORDONATION()
{
    localStorage.setItem('L',Math.random()*100);
    localStorage.setItem('T',Math.random()*100);
    cordonation.top=JSON.parse(localStorage.getItem('T'))+'%';
    cordonation.left=JSON.parse(localStorage.getItem('L'))+'%';
    console.log(cordonation)
}

function create_point()
{     
    create_CORDONATION();
    start();
    new pointer(cordonation);
}

function start()
{
    timeR=date=new Date().getTime();
    let Timex=parseInt(timeR/1000%60)+10;
    localStorage.setItem('startTime',Timex);
    
}

$(document).on('click','.point',function()
{    

    create_point();
    create_CORDONATION();  
    $('.point').first().remove();
})


