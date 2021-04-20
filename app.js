function createParagraph(){
    var wordOne = document.getElementById('adjective1').value;
    var wordTwo = document.getElementById('adjective2').value;  var wordOne = document.getElementById('adjective1').value
    var wordThree = document.getElementById('typeofbird1').value;
    var wordFour = document.getElementById('room').value;
    var wordFive = document.getElementById('verb1').value;
    var wordSix = document.getElementById('verb2').value;
    var wordSeven = document.getElementById('name').value;
    var wordEight= document.getElementById('noun1').value;
    var wordNine= document.getElementById('verb3').value;
    var wordTen = document.getElementById('bodypart1').value;
    var wordEvelen = document.getElementById('noun2').value;
    var wordTweleve = document.getElementById('verb4').value;
    var wordThirteen = document.getElementById('noun3').value;

    var paragraph = ' It was a, ' + wordOne + ' cold November day. I woke up to the ' + wordTwo + ' smell of ' + wordThree + ' roasting in the downstairs. I ' + wordFour + ' down the stairs to see if I could help ' + wordFive + ' the dinner. My mom said, "See if ' + wordSix + ' needs a fresh ' + wordSeven + '." So I carried a tray of glasses full of' + wordEight + ' into the ' + wordNine + ' room. When I got there, I couldnt believe my  '+ wordTen + ' ! There were ' + wordEvelen+ ', ' + wordTweleve + 'on the' + wordThirteen + ' !. ';
     
document.getElementById('answer').innerHTML = paragraph; 

}


