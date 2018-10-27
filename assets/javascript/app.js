var number = 60;
var intervalId;
var correct = 0;
var wrong = 0;
    
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      correct = 0;
      wrong = 0;
      number = 60;
    }

    function decrement() {
      number--;

      $("#countdown").text(number);

      if (number === 0) {
        stop();

        alert("Out of Time!");
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

        if ($('input[name=question3]:checked').val() == "4") {
          correct++;
        } else{
          wrong++;
        }
      

      $("#correct").html("<h4>Questions Correct: " + correct + "</h4>");
      $("#wrong").html("<h4>Questions Wrong: " + wrong +"</h4>");
    });

    $("#playAgain").click(function(){
      $(".gameScreen").show();
      $(".endScreen").hide();
      $("input:radio").prop("checked", false);
      run();
    });

    run();
