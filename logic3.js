// PICKING RANDOM ANIMAL FROM ARRAY:

    // function pickanimal(){

    function pickanimal(){

            var animals = ["horse", "whale", "crane", "mouse", "snail", "zebra","tiger"];

            var randomIndex = Math.floor(Math.random()*animals.length);

            var animalPick = animals[randomIndex];

            console.log(animalPick);

            document.querySelector("#block1").innerHTML = animalPick.charAt(0);
            document.querySelector("#block2").innerHTML = animalPick.charAt(1);
            document.querySelector("#block3").innerHTML = animalPick.charAt(2);
            document.querySelector("#block4").innerHTML = animalPick.charAt(3);
            document.querySelector("#block5").innerHTML = animalPick.charAt(4);
            }
    

    document.onload = pickanimal;



//SET LETTERS OF ANIMAL IN LETTER BLOCKS

   




// TRACKING USED LETTERS & LETTER BLOCKS
    var wintracker = 0;

    var usedletters = [];


    function addletter(used){

    usedletters.push(used.key);


        document.querySelector("#usedletters").innerText = usedletters;

        

        if (used.key ==  animalPick.charAt(0)){
        document.querySelector("#block1").style.visibility = "visible";
        console.log(wintracker++)
        } 
        
        else if (used.key ==  animalPick.charAt(1)){
        document.querySelector("#block2").style.visibility = "visible";
        console.log(wintracker++)
        }

        else if (used.key ==  animalPick.charAt(2)){
        document.querySelector("#block3").style.visibility = "visible";
        console.log(wintracker++)
        }

        else if (used.key ==  animalPick.charAt(3)){
        document.querySelector("#block4").style.visibility = "visible";
        console.log(wintracker++)
        }

        else if (used.key ==  animalPick.charAt(4)){
        document.querySelector("#block5").style.visibility = "visible";
        console.log(wintracker++)
        }

    
        else if (wintracker==5){
            countwins()
            document.querySelector("#usedletters").innerHTML = " ";
            document.querySelector("#liveleft").innerHTML = 6;
            function pickanimal();
        }
    
        
        else if (countDown());
        }
    
        


    document.onkeyup = addletter;





// TRACKING LIVES & CHANGING PICTURE

    var liveleft = 6;

        document.querySelector("#liveleft").innerHTML = liveleft;

    function countDown() {
        liveleft--;
        document.querySelector("#liveleft").innerHTML = liveleft;

        if (liveleft===6){
            document.querySelector(".emojipic").src="pic1.png"; 
        }

        if (liveleft===5){
            document.querySelector(".emojipic").src="pic2.png"; 
        }

        if (liveleft===4){
            document.querySelector(".emojipic").src="pic3.png"; 
        }

        if (liveleft===3){
            document.querySelector(".emojipic").src="pic4.png"; 
        }

        if (liveleft===2){
            document.querySelector(".emojipic").src="pic5.png"; 
        }

        if (liveleft===1){
            document.querySelector(".emojipic").src="pic6.png"; 
        }

        if (liveleft===0){
            document.querySelector(".emojipic").src="pic7.png"; 
            liveleft=7;
        }

    }
        
//TRACKING WINS 

    var wins = 0

    document.querySelector("#wincount").innerHTML = wins;

    function countwins() {
        wins++;
        document.querySelector("#wincount").innerHTML = wins;

    }

    









    

