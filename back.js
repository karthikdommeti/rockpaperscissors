
        const moves={
           'rock': 'rock.jpg',
            'paper': 'paper.jpg',
            'scissor': 'scissors.jpg'
        };
       
    let obj={
        wins:0,
        loses:0,
        tie:0
    };
    function reset(){  
        obj.wins=0,
        obj.loses=0,
        obj.tie=0
    }

    function play(usermove){
        
        let compmv=Math.random();
        let move='';
        if(compmv>0 && compmv<=1/3){
            move='rock';
        }
        else if(compmv>1/3 && compmv<=2/3){
            move='paper';
        }
        else if(compmv>2/3 && compmv<=1){
            move='scissor';
        }
        let result='';
        if(move===usermove){
            result='tie';
        }
        else if((usermove==='rock'&& move==='scissor' )||
                (usermove==='paper'&& move==='rock')||
                (usermove==='scissor'&& move==='paper')){
                    result='Thassadiya... you Win';
                }
                else{
                    result='NAGARJUNA... you Lose';
                }
        if(result==="Thassadiya... you Win"){
            obj.wins+=1;
        }
        else if(result==="NAGARJUNA... you Lose"){
            obj.loses+=1;
        }
        else if(result==="tie"){
            obj.tie+=1;
        }
        
        
        const resultcontainer=document.getElementById("resultcontainer");
         resultContainer.innerHTML = `
                <h2>Your move:</h2>
                <img src="${moves[usermove]}"  class="move-image">
                <h2>Computer's move:</h2>
                <img src="${moves[move]}"  class="move-image">
                <h1>Result: ${result}</h1>
                <p>Wins: ${obj.wins}, Loses: ${obj.loses}, Ties: ${obj.tie}</p>
            `;
    }
    
