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
            clas:"heart"
        }
        life._proto_=cordonation;
        cancel._proto_=life;

    function life_1()
        {
            new pointer(life);
        }
        $(document).on('click','.cancel',function()
        {
            
        })
    $(document).on('click','.heart',function()
        {           
            if(i===0)
            { 
                console.warn("Finish");
                $(this).hide();     
            }
            else if(i<=5)
            {
                life.tC="+5";
                i=i+5;
                $(this).hide();
                create_CORDONATION_life();     
            }
            else if(i>=7)
            {
                life.tC="+3";
                i=i+3;
                $(this).hide();
                create_CORDONATION_life(); 
            }
            else
            {
                $(this).hide();
                console.warn('Game over O_O');
                create_CORDONATION_life(); 
            }
        })
    function create_CORDONATION_life()
        {
            life.top=JSON.parse(localStorage.getItem('L'))+'%';
            life.left=JSON.parse(localStorage.getItem('T'))+'%';
            s=localStorage.getItem('L')*99;
            console.log(s);
            setTimeout(()=>{           
            life_1();
            },s )    
        }

    function create_CORDONATION()
        {
            localStorage.setItem('L',Math.random()*100-1);
            localStorage.setItem('T',Math.random()*100-1);
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
        }
    $(document).on('click','.point',function()
        {    
            localStorage.setItem('Score',score++)
            new pointer(cordonation);     
            create_CORDONATION();  
            $('.point').first().remove();
        })

$('#start').on('click',function()
{    
i=10;
   let time_action = setInterval(()=>
    {
        if(i>0)
        {
            time.textContent=i;       
            i--;
        }
        else 
        {  
            alert("Finish,"+ localStorage.getItem('User Name')+" Your score is :="+localStorage.getItem('Score'))
            localStorage.setItem('Score',0);
            time.textContent="Time"
            clearInterval(time_action);
            $('.point').first().remove();
            $('.heart').first().remove();
            $('#start').show();  
        }
    },1000) 
    $(this).hide();
});

//log();
function log()
{
let user=prompt('Insert your name');
if(user=="")
{
    user="Un fuflic";
}
localStorage.setItem('User Name',user+" O_O ");
alert("GAME RULES: It`s a simple game,press 'Start' to begin. Goal of the game :collect as many POINTS as possible IN TEN SECONDS")
}