    // global variables
    var myOperator;
    var myCharDelete;
    var enemyCharName;
    var firstTime = true;
    var veryFirstTime = true;
    var myAPscore;
    var enemyAPscore;
    var myNewAP; 
    var myCurHP;   
    var enemyCurHP;
    var myCurHPAttr;
    var enemyCurHPAttr;

    // function to restart the game
    var resetGame = function() { 
        location.reload(true);

        $(myCharDelete).remove();
        var valArray    = [100, 120, 170, 150];
        var hpArray     = [10, 5, 7, 15];

        // recreate the charecters after each game
        for (var j=1; j<5; j++){
            var myCounter   = (j).toString().trim();
            myContainer = ".your-charecter" + myCounter; 
            $(".your-charecter").append("<div class='allbox ycharbox your-charecter" + myCounter + "' value='" + myCounter + "' data-HPscore='" + hpArray[j-1].toString().trim()+  "' >");
            $(myContainer).append("<h6 id='char" + myCounter + "'>Obi-Wan Kenobi</h6>");
            $(myContainer).append("<img src='assets/images/star " + myCounter + ".jpg'>");
            $(myContainer).append("<h6 id='point" + myCounter + "' value='" + valArray[j-1] + "'>" + valArray[j-1] + "</h6>");
        }    
        
        pickSelf();
    }

    // function to select the star wars hero I want to play
    var pickSelf = function() {
        $(".ycharbox").on("click", function() {  
            $(".enemy-fighter").show();           
            myOperator      = parseInt(($(this).attr("value")));   
            var Counter1    = 1;
            for (var i=1; i<5; i++){

                if (i !== myOperator){   // charecters that are not clicked on moved to enemies area
                    var myCounter   = (i).toString().trim();
                    var enemyCnt    = (Counter1).toString().trim();
                    var myChar      = ".your-charecter" + myCounter + ">#char" + myCounter;
                    var myEnemy     = ".enemy-fighter" + enemyCnt;
                    var myImage     = ".your-charecter" + myCounter + ">img";
                    var myPoint     = ".your-charecter" + myCounter + ">#point" + myCounter;
                    var myChar1     = ".your-charecter" + myCounter;                       
                    var tempScore   = parseInt($(myChar1).attr("data-hpscore"));

                    $(myChar).appendTo( $(myEnemy) );
                    $(myImage).appendTo( $(myEnemy) );
                    $(myPoint).appendTo( $(myEnemy) );
                    $(myChar1).remove();
                    $(myEnemy).attr("data-hpscore", tempScore);

                    $('#char'+myCounter).attr( 'id' , 'char'+enemyCnt );
                    $('#point'+myCounter).attr( 'id' , 'point'+enemyCnt );
                    Counter1++;
                } else { // keeping the selected charecter as myself
                    var myCounter   = (i).toString().trim();
                    myCharDelete    = ".your-charecter" + myCounter;
                    myAPscore       = parseInt($(this).attr("data-hpscore"));
                    myNewAP         = parseInt($(this).attr("data-hpscore"));
                    myCurHP         = parseInt($("#point" + myCounter).attr("value"));
                    myCurHPAttr     = $( "#point" + myCounter );
                }
            }

        });
    }    
    
    // function to select an enemy / defendar
    var pickEnemy = function() {
        $(".enemybox").on("click", function() {              
        if (firstTime){ //user can't select multiple enemy at the same time or until defeat the current defendar
            // recreate the current-fighter1 object
            if (!veryFirstTime){
                $(".defender").append("<div class='allbox fighterbox current-fighter1'>");
                $("#result").text("");
            }
            firstTime       = false;  
            veryFirstTime   = false;
            $(".attack").show();
            $(".defender").show();  
            var myCounter;
            myOperator  = parseInt(($(this).attr("value"))); 
            myCounter   = (myOperator).toString().trim();
            var myChar  = ".enemy-fighter" + myCounter + ">#char" + myCounter;
            var myImage = ".enemy-fighter" + myCounter + ">img";
            var myPoint = ".enemy-fighter" + myCounter + ">#point" + myCounter;
            var myChar1 = ".enemy-fighter" + myCounter;    
                     
            enemyAPscore    = parseInt($(this).attr("data-hpscore"));
            enemyCurHP      = parseInt($(".enemy-fighter" + myCounter + ">#point" + myCounter).attr("value"));
            enemyCurHPAttr  = $(".enemy-fighter" + myCounter + ">#point" + myCounter);
            enemyCharName   = $(myChar).text().toUpperCase(); //storing the name of the defendar in global variable
            $(myChar).appendTo( $(".current-fighter1") );
            $(myImage).appendTo( $(".current-fighter1") );
            $(myPoint).appendTo( $(".current-fighter1") );   
            $(myChar1).remove();
        }
        });
    }    

    // attack fuction starts here
    var gameAttack = function() {  
        myCurHP     = myCurHP - enemyAPscore;
        enemyCurHP  = enemyCurHP - myNewAP;      
        $(myCurHPAttr).text(myCurHP);
        $(enemyCurHPAttr).text(enemyCurHP);
        $("#myscore").text("You attacked " + enemyCharName + " for " + myNewAP + " damage.");
        $("#enemyscore").text(enemyCharName + " attacked you back for " + enemyAPscore + " damage.");        
        myNewAP     = myNewAP + myAPscore; // increase my AP after each attack

        if (enemyCurHP < 0){            
            var myChar1 = ".current-fighter1";    
            $(myChar1).remove();   
            firstTime = true;
            $("#myscore").text("");
            $("#enemyscore").text(""); 
            $(".attack").hide();
            // making sure no more enemy left 
            if ($(".enemy-fighter").children().length > 0 ) {
                $("#result").text("You have defeated " + enemyCharName + ".You can choose to fight another enemy");
            } else {
                $("#result").text("You Win. GAME OVER! click <Restart> to play again");
                $(".restart").show();
            }
        }

        if (myCurHP < 0){
            $("#myscore").text("");
            $("#enemyscore").text(""); 
            $("#result").text("You Lose. GAME OVER! click <Restart> to play again");
            $(".restart").show();
            $(".attack").hide();
        }
    }

    // game work flow starts here after the whole page is loaded
    $(document).ready( function() {
        $(".enemy-fighter, .btn, .defender").hide(); //hiding other flexboxes & buttons at the start of the game

        pickSelf();
        pickEnemy();
        $(".restart").on("click", function() {
            resetGame();
        });
        $(".attack").on("click", function(){    
            gameAttack();
        });
    });

    