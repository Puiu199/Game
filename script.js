let i=0,s,x,y,score=0;
    time=document.querySelector('h1');
class pointer
{
    constructor(punct)
    {
        this.punct=document.createElement(punct.tag);
        this.punct.style.top=punct.top;
        this.punct.style.left=punct.left;
        this.punct.classList=punct.clas;
        this.punct.textContent=punct.tC;
        document.querySelector('.display').append(this.punct);     
    }
}    
let cordonation=
    {   
        clas:"point",
        tag:"div",
        top:"0",
        left:"0"
    }
let life=
    {
        clas:"heart",
        tag:"span",
        tC:""
    }
let cancel=
    {
        clas:"cancel",
        tag:"span"
    }
    life._proto_=cordonation;
    cancel._proto_=cordonation;

$(document).on('click','.heart',function() //click for heart  add some secunds for continue game
    {           
        if(i===0) // if i(time(secunds)) are = 0 the game will be finish and the heart will be hide
        { 
            console.warn("Finish");
            $(this).hide();     
        }
        else if(i<=5) //if i(time(secunds)) are <=5 then time will be add 5s
        {
            life.tC="+5";
            i=i+5+1;
            $(this).hide();
            create_CORDONATION_life();     
        }
        else if(i>=6) //if i(time(secunds)) are <=7 then time will be add 3s
        {
            life.tC="+3";
            i=i+3+1;
            $(this).hide();
            create_CORDONATION_life(); 
        }
        else
        { // else game over
            $(this).hide();
            console.warn('Game over O_O');
            create_CORDONATION_life(); 
        }
    })
function create_CORDONATION_life() // function 
    {
        life.top=JSON.parse(localStorage.getItem('L'))+'%';
        life.left=JSON.parse(localStorage.getItem('T'))+'%';
        s=localStorage.getItem('T')*99;
        console.log(s);
        setTimeout(()=>{life_1();},s)    
    }
function  create_CORDONATION_cancel()
    {
        cancel.top=localStorage.getItem('T')+1+'%';
        cancel.left=localStorage.getItem('L')+1+'%';
        s=localStorage.getItem('L')*95;
        console.log(s);
        setTimeout(()=>{can_cel();},s)    
    }
function create_CORDONATION()
    {
        localStorage.setItem('L',Math.random()*98);
        localStorage.setItem('T',Math.random()*98);
        cordonation.top=JSON.parse(localStorage.getItem('T'))+'%';
        cordonation.left=JSON.parse(localStorage.getItem('L'))+'%';
    }   
function create_point()
    {     
        create_CORDONATION();
        localStorage.setItem('Score',score=0)
        $('.point').first().remove();
        new pointer(cordonation);  
        create_CORDONATION_life();  
        create_CORDONATION_cancel();    
    }
function finish_game()
    {
        alert("Finish,"+ localStorage.getItem('User Name')+" Your score is :="+localStorage.getItem('Score'))
            localStorage.setItem('Score',0);
            time.textContent="Time";           
            $('.point').remove();
            $('.heart').remove();
            $('.cancel').remove();
            $('#start').show();  
    }
$(document).on('click','.cancel',function()
    {    
        $(this).remove();
        
            console.warn("You touch me")    
        if($('.cancel').length>=2)
            {                        
                $('span').first().remove();            
            }
            else 
            {
            finish_game();
                i=0;
            }
            create_CORDONATION_cancel();
           }
        
    )
$(document).on('click','.point',function()
    {    
        localStorage.setItem('Score',score++)
        new pointer(cordonation);     
        create_CORDONATION();  
        $('.point').first().remove();
    })
$('#start').on('click',function()
{    i=10;
   let time_action = setInterval(()=>
    {
        if(i>0)
        {
            time.textContent=i;       
            i--;
        }
        else 
        {   
            location.reload(true);
            finish_game();
            clearInterval(time_action);
        }
    },1000) 
    $(this).hide();
});
function log()
{
    alert("GAME RULES: It`s a simple game,press 'Start' to begin. Goal of the game :collect as many POINTS as possible IN TEN SECONDS")
    let user=prompt('Insert your name');
    if(user=="")
    {
        user="Un fuflic";
    }
    localStorage.setItem('User Name',user+" O_O ");
}
log();
function life_1() //Function for creation new heart wich add some secunds for continue game
    {
        new pointer(life);
        setTimeout(()=>{($('.display>.heart').remove())},3000)   
    }
function can_cel() //Function for creation new cancel wich stope the game
    {
        new pointer(cancel);  
        setTimeout(()=>{($('.display>.cancel').remove())},3000)
    }