function rpsGame(yourchoice)
{
    var humanChoice=yourchoice.id
    var botchoice=botChoice();
    var Winner=findWinner(humanChoice,botchoice);
    result(humanChoice,botchoice,Winner);
   // console.log(botchoice);
}

function botChoice()
{
    var num=Math.floor(Math.random()*3);
    return ['rock','paper','scissor'][num]
}

function findWinner(humanChoice,botchoice)
{
   var rpsData={
       'rock':{'scissor':1,'rock':0.5,'paper':0},
       'paper':{'rock':1,'paper':0.5,'scissor':0},
       'scissor':{'paper':1,'scissor':0.5,'rock':0}
   }
   var yourScore=rpsData[humanChoice][botchoice]
   var computerScore=rpsData[botchoice][humanChoice]
   
    console.log("This is human Choice "+humanChoice +" and "+ "this is computer choice "+botchoice);
    console.log('Your Score is '+yourScore+ ' Computer Score is '+ computerScore);

    if(yourScore===1)
    {
        return  {'message':'You Win!','color':'Chartreuse'}
    }
    else if (yourScore===0.5)
    {
        return {'message':'You Tied!','color':'yellow'}
    }
    else{
        return {'message':'You Lost!','color':'Orange'}
    }
    

}





function result(humanChoice,botchoice,Winner)
{
    
    var imagesDatabase={
        'rock':document.getElementById('rock').src ,
        'paper':document.getElementById('paper').src ,
        'scissor':document.getElementById('scissor').src
    }
    var humanChoiceImg=imagesDatabase[humanChoice]
    var botChoiceImg = imagesDatabase[botchoice]
    var div=document.createElement('div')
    console.log(div)


    var btn=document.createElement('div')
    
    btn.innerHTML="<button class='btn btn-primary' id='playAgain'>"+ "Play Again "+ "</button>"
    document.getElementById('result').appendChild(btn)


    var innerDiv=document.getElementById('result').appendChild(div)
    document.getElementById('result').classList.add("result");
    innerDiv.classList.add("resultImg")
    
    
    var img=document.createElement('div')
    img.innerHTML="<img src='"+humanChoiceImg +  "' style='box-shadow:0px 10px 50px yellow'>"
    innerDiv.setAttribute('id','resultImg')
    document.getElementById('resultImg').appendChild(img)

      
    var msg=Winner.message
    var col=Winner.color
    var resultTag=document.createElement('div');
    resultTag.setAttribute('id','message')
    resultTag.innerHTML="<h3 style='color: " + col +";font-size:60px;font-weight:bold;'>" + msg +"</h3>"
    document.getElementById('resultImg').appendChild(resultTag);
    btn.innerHTML="<button class='btn btn-primary' id='playAgain' onclick='restartGame()'>"+ "Play Again "+ "</button>"
    document.getElementById('message').appendChild(btn)
    console.log(resultTag)

    
    var imgBot=document.createElement('div')
    imgBot.innerHTML="<img src='"+botChoiceImg +  "' style='box-shadow:0px 10px 50px Navy'>"
    document.getElementById("resultImg").appendChild(imgBot)
   
    //console.log(humanChoiceImg)
   // console.log(botChoiceImg)
}


    function restartGame()
    {
        document.getElementById('result').removeAttribute('class','result');
        document.getElementById("message").remove();
        document.getElementById('resultImg').remove();
    }
