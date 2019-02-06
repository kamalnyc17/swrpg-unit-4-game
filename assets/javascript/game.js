
    var myOperator;

    // function to select the star wars hero I want to play
    var pickSelf = function() {
        $(".ycharbox").on("click", function() {             
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
                }
            }

        });
    }    
    
    // function to select an enemy / defendar
    var pickEnemy = function() {
        $(".enemybox").on("click", function() {             
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
        pickSelf();
        pickEnemy();
    });


/*
$(document).ready( function() {
    $(".ycharbox").on("click", function() { 
        
        myOperator = parseInt(($(this).attr("value")));
        console.log(myOperator);
        if (myOperator===1) {
            var testStr = '.your-charecter' +'1>#char1';
            $(testStr).appendTo( $('.enemy-fighter1') );
            $('.your-charecter1>img').appendTo( $('.enemy-fighter1') );
            $('.your-charecter1>#point1').appendTo( $('.enemy-fighter1') );
            $(".your-charecter1").remove();
        }
        if (myOperator===2){
            $('.your-charecter2>#char2').appendTo( $('.enemy-fighter2') );
            $('.your-charecter2>img').appendTo( $('.enemy-fighter2') );
            $('.your-charecter2>#point2').appendTo( $('.enemy-fighter2') );
            $(".your-charecter2").remove();
        }
        if (myOperator===3){
            $('.your-charecter3>#char3').appendTo( $('.enemy-fighter3') );
            $('.your-charecter3>img').appendTo( $('.enemy-fighter3') );
            $('.your-charecter3>#point3').appendTo( $('.enemy-fighter3') );
            $(".your-charecter3").remove();
        }      
        if (myOperator===4){
            $('.your-charecter>#char4').appendTo( $('.enemy-fighter3') );
            $('.your-charecter4>img').appendTo( $('.enemy-fighter3') );
            $('.your-charecter4>#point4').appendTo( $('.enemy-fighter3') );
            $(".your-charecter4").remove();
        }
    });
})

            //$(".your-charecter4").hide();
            //$(".enemy-fighter1").css({"background-color": "red", "padding": "20px 20px", "height": "100px", "width": "100px", "float": "left"});
*/            

