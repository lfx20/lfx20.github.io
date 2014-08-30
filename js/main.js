$(document).ready(function(){
    var playerChoiceImg = "#player-choice img";
    var computerChoiceImg = "#computer-choice img";
    $(".img-choice").on("click",function(){
        var playerChoice = $(this).attr("id");
        $(playerChoiceImg).css("left","0");
        $(playerChoiceImg).attr("src","img/" + playerChoice +".png").addClass("img-base-position").animate({left:"236px"},"slow");
        $("#player-choice-text").text($(this).attr("id"));
        var computerChoice = Math.random();
        if (computerChoice < 0.33) {
            computerChoice = "rock";
        } else if (computerChoice > 0.34 || computerChoice < 0.66) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        $(computerChoiceImg).css("left","0");
        $(computerChoiceImg).attr("src","img/" + computerChoice + ".png").addClass("img-flipH img-base-position").animate({left:"-236px"},"slow");
        $("#computer-choice-text").text(computerChoice);
        compareChoice(playerChoice,computerChoice);
        checkWinner(playerRoundWin,computerRoundWin);
    });



    var playerRoundWin = 0;
    var computerRoundWin = 0;
    var drawMessage = "Draw";
    var playerWinMessage = "You Win";
    var computerWinMessage = "Computer Wins";
    var compareChoice = function(choice1,choice2) {
        if (choice1 === choice2) {
            /* Draw */
            cleanAvatars();
            $("#couchDraw").css("display","inline-block");
            showBubble(drawMessage);
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                /* Player1 Wins */
                playerRoundWin +=1;
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#playerWins").css("display","inline-block");
                showBubble(playerWinMessage);
            } else if (choice2 === "paper") {
                /* Computer Wins */
                computerRoundWin +=1;
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#computerWins").css("display","inline-block");
                showBubble(computerWinMessage);
            }
        } else if (choice1 === "paper"){
            if (choice2 === "scissors") {
                /* Computer Wins */
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#computerWins").css("display","inline-block");
                showBubble(computerWinMessage);
                computerRoundWin +=1;
            } else if (choice2 === "rock") {
                /* Player1 Wins */
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#playerWins").css("display","inline-block");
                showBubble(playerWinMessage);
                playerRoundWin +=1;
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                /* Computer Wins */
                $("#computer-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#computerWins").css("display","inline-block");
                showBubble(computerWinMessage);
                computerRoundWin +=1;
            } else if (choice2 === "paper") {
                /* Player1 Wins */
                $("#player-trophy").prepend('<img src="img/trophy.png" width="52" height="50"> ');
                cleanAvatars();
                $("#playerWins").css("display","inline-block");
                showBubble(playerWinMessage);
                playerRoundWin +=1;
            }
        }
    }

    var playerWins = 0;
    var computerWins = 0;
    var continueBtn = '<br/><br/><button class="btn btn-green" onclick="close_modal();">Continue</button>';
    var checkWinner = function(win1, win2) {
        if (win1 < 3 && win2 < 3) {
            return;
        } else if (win1 > win2) {
            playerWins +=1;
            $(".modal").modal_box({title:"Congratulations!",description:"You are the Winner!" + continueBtn, color:"green"});
            GameWin("player");
            cleanImgChoice();
            playerRoundWin = 0;
            computerRoundWin = 0;
        } else if (win1 < win2) {
            computerWins +=1;
            $('.modal').modal_box({title:"You Lost!", description:"The Computer won this game!" + continueBtn, color: "red"});
            GameWin("computer");
            cleanImgChoice();
            playerRoundWin = 0;
            computerRoundWin = 0;
        }
        cleanTrophy();
        cleanChoiceText();
        cleanAvatars();
        cleanBubble();
    }

    var cleanTrophy = function(){
        $("#player-trophy img").remove();
        $("#computer-trophy img").remove();
    }

    var cleanChoiceText = function(){
        $("#player-choice-text").empty();
        $("#computer-choice-text").empty();
    }

    var cleanAvatars = function(){
        $("#computerWins").css("display","none");
        $("#playerWins").css("display","none");
        $("#couchDraw").css("display","none");
    }

    var showBubble = function(msg) {
        $("#bubble").css("display","inline-block");
        $(".bubble-message").text(msg);
    }

    var cleanBubble = function(){
        $("#bubble").css("display","none");
    }

    var cleanImgChoice = function(){
        $("#player-choice img").attr("src","img/empty.png");
        $("#computer-choice img").attr("src","img/empty.png");
    }

    var GameWin = function(who){
        win = " Game Win";
        wins = " Game Wins";
        if (who == "player") {
            if (playerWins > 1) {
                $("#player-win-counter").text(playerWins + wins);
            } else {
                $("#player-win-counter").text(playerWins + win);
            }
        }
        else if (who == "computer") {
            if (computerWins > 1) {
                $("#computer-win-counter").text(computerWins + wins);
            } else {
                $("#computer-win-counter").text(computerWins + win);
            }
        }
    }

    var resetAll = function(){
        playerWins = 0;
        computerWins = 0;
        $("#player-win-counter").text(playerWins + win);
        $("#computer-win-counter").text(computerWins + win);
        cleanChoiceText();
        cleanAvatars();
        cleanBubble();
        cleanTrophy();
    }

    $("#start-over").on("click",function(){
        resetAll();
    })

//    $(function() {
//        $( "#winner-modal" ).dialog({
//            autoOpen: false,
//            show: {
//                effect: "explode",
//                duration: 1000
//            },
//            hide: {
//                effect: "explode",
//                duration: 1000
//            },
//            closeOnEscape: true,
//            modal: true
//        });
//
//
//    });
});
