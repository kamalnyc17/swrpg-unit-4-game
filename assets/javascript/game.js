
    var myOperator;
    var myCharDelete;
    var firstTime = true;

    // function to initialize screen
    var initialScreen = function() {
        $(".enemy-fighter").hide();
        $(".btn").hide();
        $(".defender").hide();
    }

    // function to reset the game
    var resetGame = function() { 
        location.reload(true);
        initialScreen();  

        $(myCharDelete).remove();
        var valArray = [100, 120, 170, 150];

        for (var j=1; j<5; j++){
            var myCounter   = (j).toString().trim();
            myContainer = ".your-charecter" + myCounter;  
            $(".your-charecter").append("<div class='allbox ycharbox your-charecter" + myCounter + "' value='" + myCounter + "1'>");
            $(myContainer).append("<h1 id='char" + myCounter + "'>Obi-Wan Kenobi</h1>");
            $(myContainer).append("<img src='assets/images/star " + myCounter + ".jpg'>");
            $(myContainer).append("<h1 id='point" + myCounter + "' value='" + valArray[j-1] + "'>" + valArray[j-1] + "</h1>");
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
                    var myPoint = ".your-charecter" + myCounter + ">#point" + myCounter;
                    var myChar1 = ".your-charecter" + myCounter;                    
                    
                    $(myChar).appendTo( $(myEnemy) );
                    $(myImage).appendTo( $(myEnemy) );
                    $(myPoint).appendTo( $(myEnemy) );
                    $(myChar1).remove();

                    $('#char'+myCounter).attr( 'id' , 'char'+enemyCnt );
                    $('#point'+myCounter).attr( 'id' , 'point'+enemyCnt );
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
        if (firstTime){ //user can't select multiple enemy at the same time
            firstTime = false;  
            $(".btn").show();
            $(".defender").show();  
            var myCounter;
            myOperator  = parseInt(($(this).attr("value"))); 
            myCounter   = (myOperator).toString().trim();
            var myChar  = ".enemy-fighter" + myCounter + ">#char" + myCounter;
            var myImage = ".enemy-fighter" + myCounter + ">img";
            var myPoint = ".enemy-fighter" + myCounter + ">#point" + myCounter;
            var myChar1 = ".enemy-fighter" + myCounter;                    
                    
            $(myChar).appendTo( $(".current-fighter1") );
            $(myImage).appendTo( $(".current-fighter1") );
            $(myPoint).appendTo( $(".current-fighter1") );
            $(myChar1).remove();
        }
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
        $(".attack").on("click", function(){
            alert( "Working on it");
        });
    });

    