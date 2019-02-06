
    var myOperator;
    var myCharDelete;

    // function to initialize screen
    var initialScreen = function() {
        $(".enemy-fighter").hide();
        $(".btn").hide();
        $(".defender").hide();
    }

    // function to reset the game
    var resetGame = function() {  
        initialScreen(); 
        $(myCharDelete).remove();
        myContainer = ".your-charecter1";        
        $(".your-charecter").append("<div class='allbox ycharbox your-charecter1' value='1'>");
        $(".your-charecter1").append("<h1 id='char1'>Obi-Wan Kenobi</h1>");
        $(".your-charecter1").append("<img src='assets/images/star 1.jpg'>");
        $(".your-charecter1").append("<h1 id='point1' value='200'>200</h1>");
    }
    
    // function to select the star wars hero I want to play
    var pickSelf = function() {
        $(".ycharbox").on("click", function() {  
            $(".enemy-fighter").show();           
            myOperator  = parseInt(($(this).attr("value")));
            var Counter1 = 1;
            for (i=1; i<5; i++){

                if (i !== myOperator){
                    var myCounter   = (i).toString().trim();
                    var enemyCnt    = (Counter1).toString().trim();
                    var myChar  = ".your-charecter" + myCounter + ">#char" + myCounter;
                    var myEnemy = ".enemy-fighter" + enemyCnt;
                    var myImage = ".your-charecter" + myCounter + ">img";
                    var enemyImg= ".enemy-fighter" + enemyCnt;
                    var myPoint = ".your-charecter" + myCounter + ">#point" + myCounter;
                    var enemyPnt= ".enemy-fighter" + enemyCnt;
                    var myChar1 = ".your-charecter" + myCounter;                    
                    
                    $(myChar).appendTo( $(myEnemy) );
                    $(myImage).appendTo( $(enemyImg) );
                    $(myPoint).appendTo( $(enemyPnt) );
                    $(myChar1).remove();

                    Counter1++;
                } else {
                    var myCounter   = (i).toString().trim();
                    myCharDelete = ".your-charecter" + myCounter; 
                }
            }

        });
    }    
    
    // function to select an enemy / defendar
    var pickEnemy = function() {
        $(".enemybox").on("click", function() {    
            $(".btn").show();
            $(".defender").show();         
            myOperator  = parseInt(($(this).attr("value")));
            var Counter1 = 1;
            var myCounter   = (myOperator).toString().trim();
            var enemyCnt    = (Counter1).toString().trim();
            var myChar  = ".enemy-fighter" + myCounter + ">#char" + myCounter;
            var myEnemy = ".current-fighter" + enemyCnt;
            var myImage = ".enemy-fighter" + myCounter + ">img";
            var enemyImg= ".current-fighter" + enemyCnt;
            var myPoint = ".enemy-fighter" + myCounter + ">#point" + myCounter;
            var enemyPnt= ".current-fighter" + enemyCnt;
            var myChar1 = ".enemy-fighter" + myCounter;                    
                    
            $(myChar).appendTo( $(myEnemy) );
            $(myImage).appendTo( $(enemyImg) );
            $(myPoint).appendTo( $(enemyPnt) );
            $(myChar1).remove();

            Counter1++;
        });
    }    

    // process starts here
    $(document).ready( function() {
        initialScreen();
        pickSelf();
        pickEnemy();
        $(".restart").on("click", function() {
            resetGame();
        });
    });



            //
            //$(".enemy-fighter1").css({"background-color": "red", "padding": "20px 20px", "height": "100px", "width": "100px", "float": "left"});
            

