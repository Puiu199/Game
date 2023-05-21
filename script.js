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
    let i=10;
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
}
function create_point()
{     
    create_CORDONATION();
    localStorage.setItem('Score',score=0)
    $('.point').first().remove();
    new pointer(cordonation);        
}
$(document).on('click','.point',function()
{    
    localStorage.setItem('Score',score++)
    new pointer(cordonation);     
    create_CORDONATION();  
    $('.point').first().remove();
})

time=document.querySelector('h1');
$('#start').on('click',function()
{    
   let time_action = setInterval(()=>
    {
        if(i>0)
        {
            time.textContent=i;       
            i--;
        }
        else 
        {  
            alert("Finish, Youre score is :="+localStorage.getItem('Score'))
            localStorage.setItem('Score',0);
            time.textContent="Time"
            clearInterval(time_action);
            $('.point').first().remove();
            i=10; 
            $('#start').show();  
        }
    },1000) 
    $(this).hide();
});

alert("GAME RULES: It`s a simple game,press 'Start' to begin. Goal of the game :collect as many POINTS as possible IN TEN SECONDS")
    