$(document).ready( function() {
    var myOperator;
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
        /*      
        if (myOperator===4){
            $('.your-charecter>#char4').appendTo( $('.enemy-fighter3') );
            $('.your-charecter4>img').appendTo( $('.enemy-fighter3') );
            $('.your-charecter4>#point4').appendTo( $('.enemy-fighter3') );
            $(".your-charecter4").remove();
        }
        */
    });
})

            //$(".your-charecter4").hide();
            //$(".enemy-fighter1").css({"background-color": "red", "padding": "20px 20px", "height": "100px", "width": "100px", "float": "left"});
            
