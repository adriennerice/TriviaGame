var number = 60;
var intervalId;
var correct = 0;
var wrong = 0;
    
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      correct = 0;
      wrong = 0;
    }

    function decrement() {
      number--;

      $("#countdown").html(number);

      if (number === 0) {
        stop();

        alert("Time Up!");
      }
    }

   
    function stop() {
      $(".gameScreen").hide();
      $(".endScreen").show();
  
      clearInterval(intervalId);
    }


    $("#triviaForm").on("submit", function(event){
        stop();

        event.preventDefault(); 

        if ($('input[name=question1]:checked').val() == "3") {
          correct++;
        } else{
          wrong++;
        }
        
        if ($('input[name=question2]:checked').val() == "true") {
          correct++;
        } else{
          wrong++;
        }
      

      $("#correct").html("<h3>Questions Correct: " + correct + "</h3>");
      $("#wrong").html("<h3>Questions Wrong: " + wrong +"</h3>");
    });

    $("#playAgain").click(function(){
      $(".gameScreen").show();
      $(".endScreen").hide();
      $("input:radio").prop("checked", false);
      run();
    });

    run();
