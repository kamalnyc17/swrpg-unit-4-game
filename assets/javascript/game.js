
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
        var valArray = [100, 120, 170, 150];

        for (var i=1; i<5; i++){
            var myCounter   = (i).toString().trim();
            myContainer = ".your-charecter" + myCounter;  
            $(".your-charecter").append("<div class='allbox ycharbox your-charecter" + myCounter + "' value='" + myCounter + "1'>");
            $(myContainer).append("<h1 id='char" + myCounter + "'>Obi-Wan Kenobi</h1>");
            $(myContainer).append("<img src='assets/images/star " + myCounter + ".jpg'>");
            $(myContainer).append("<h1 id='point" + myCounter + "' value='" + valArray[i-1] + "'>" + valArray[i-1] + "</h1>");
        }    
        
        pickSelf();
    }

    // function to select the star wars hero I want to play
    var pickSelf = function() {
        $(".ycharbox").on("click", function() {  
            $(".enemy-fighter").show();           
            myOperator  = parseInt(($(this).attr("value")));
            var Counter1 = 1;
            for (var i=1; i<5; i++){

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

    