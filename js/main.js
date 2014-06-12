$(document).ready(function(){
    $(".img-choice").on("click",function(){
        var playerChoice = $(this).attr("id");
        console.log("Player chose " + playerChoice);
        $("#player-choice img").attr("src","img/" + playerChoice +".png");
        $("#player-choice-text").text($(this).attr("id"));
        var computerChoice = Math.random();
        if (computerChoice < 0.33) {
            computerChoice = "rock";
        } else if (computerChoice > 0.34 || computerChoice < 0.66) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log("Computer chose: " + computerChoice);
        $("#computer-choice img").attr("src","img/" + computerChoice + ".png");
        $("#computer-choice-text").text(computerChoice);
        compareChoice(playerChoice,computerChoice);
        checkWinner(playerRoundWin,computerRoundWin);
    });



    var playerRoundWin = 0;
    var computerRoundWin = 0;
    var compareChoice = function(choice1,choice2) {
        if (choice1 === choice2) {
            console.log("Both the same");
            console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                console.log("player1 wins");
                playerRoundWin +=1;
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            } else if (choice2 === "paper") {
                console.log("computer wins");
                computerRoundWin +=1;
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            }
        } else if (choice1 === "paper"){
            if (choice2 === "scissors") {
                console.log("computer wins");
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                computerRoundWin +=1;
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            } else if (choice2 === "rock") {
                console.log("player wins");
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                playerRoundWin +=1;
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                console.log("computer wins");
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                computerRoundWin +=1;
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            } else if (choice2 === "paper") {
                console.log("player wins");
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                playerRoundWin +=1;
                console.log("Player: " + playerRoundWin + " wins. Computer: " + computerRoundWin);
            }
        }
    }

    var playerWins = 0;
    var computerWins = 0;
    var checkWinner = function(win1, win2) {
        if (win1 < 3 && win2 < 3) {
            return;
        } else if (win1 > win2) {
            playerWins +=1;
            $( "#winner-modal").empty().prepend("<h1>The winner of this game is you!</h1>").dialog( "open" );
            console.log(playerWins);
            $("#player-win-counter").text(playerWins);
            $("#player-choice img").attr("src","");
            $("#computer-choice img").attr("src","");
            playerRoundWin = 0;
            computerRoundWin = 0;
        } else if (win1 < win2) {
            computerWins +=1;
            $( "#winner-modal").empty().prepend("<h1>The winner of this game is Computer!</h1>").dialog( "open" );
            $("#computer-win-counter").text(computerWins);
            $("#player-choice img").attr("src","");
            $("#computer-choice img").attr("src","");
            playerRoundWin = 0;
            computerRoundWin = 0;
        }
        cleanTrophy();
        cleanChoiceText();
    }

    var cleanTrophy = function(){
        $("#player-trophy img").remove();
        $("#computer-trophy img").remove();
    }

    var cleanChoiceText = function(){
        $("#player-choice-text").empty();
        $("#computer-choice-text").empty();
    }

    var resetAll = function(){
        playerWins = 0;
        computerWins = 0;
        $("#player-win-counter").text(playerWins);
        $("#computer-win-counter").text(computerWins);
        cleanChoiceText();
    }

    $("#start-over").on("click",function(){
        resetAll();
    })

    $(function() {
        $( "#winner-modal" ).dialog({
            autoOpen: false,
            show: {
                effect: "explode",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            },
            closeOnEscape: true,
            modal: true
        });


    });
});
