$(document).ready(function() {

    var easter_egg = new Konami(function() { 
        $("iframe").show();
        $("iframe")[0].src += "?autoplay=1";
    });

    var bgm = $("#bgm")[0];
    var fiveMinutes = 45 * 1;
    var display = document.querySelector('#time');

    $(".start").on("click", function() {
        bgm.volume = 0.1;
        bgm.play();
        $(this).css("display", "none");
        $(".man").css("position", "fixed");
        animateDiv($('.man1'));
        animateDiv($('.man2'));
        animateDiv($('.man3'));
        animateDiv($('.man4'));
        animateDiv($('.man5'));
        animateDiv($('.man6'));
        animateDiv($('.man7'));
        animateDiv($('.man8'));
        animateDiv($('.man9'));
        animateDiv($('.man10'));
        animateDiv($('.man11'));
        animateDiv($('.man12'));
        animateDiv($('.bratok1'));
        animateDiv($('.bratok2'));
        animateDiv($('.bratok3'));
        simulator();
    
        startTimer(fiveMinutes, display);
        $(".beer-meter").css("display", "inline-block");
    });

    function simulator() {
        var del = $(".remove");
        var bratok = $(".remove-bratok");
        
        del.on("click", function(){
            function clickSFX1() {
            var clickSound = $("#clickSFX1")[0];
            clickSound.play(); 
        }
            function clickSFX2() {
            var clickSound = $("#clickSFX2")[0];
            clickSound.volume = 0.5;
            clickSound.play();
        }
            function clickSFX3() {
            var clickSound = $("#clickSFX3")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX4() {
            var clickSound = $("#clickSFX4")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX5() {
            var clickSound = $("#clickSFX5")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX6() {
            var clickSound = $("#clickSFX6")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX7() {
            var clickSound = $("#clickSFX7")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX8() {
            var clickSound = $("#clickSFX8")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX9() {
            var clickSound = $("#clickSFX9")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX10() {
            var clickSound = $("#clickSFX10")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
            function clickSFX11() {
            var clickSound = $("#clickSFX11")[0];
                clickSound.volume = 0.5;
            clickSound.play(); 
        }
        var clickArray = [clickSFX1, clickSFX2, clickSFX3, clickSFX4, clickSFX5, clickSFX6, clickSFX7, clickSFX8, clickSFX9, clickSFX10, clickSFX11];
        clickArray[Math.floor(Math.random() * clickArray.length)]();
    
        $(this).parent().addClass("removed");
        $(this).parent().css("color", "white");
        $(this).css("color", "black");
        
        if ($("#container").children(".removed").length === 12) {
            var ending = $("#ending")[0];
            bgm.pause();
            ending.volume = 0.3;
            ending.play();
            $(".win-message").show();
            $("#container").hide();
        }
    });
        
    bratok.on("click", function() {
        function clickBratok1() {
            var clickSound = $("#clickBratok1")[0];
            clickSound.play();
        }
        function clickBratok2() {
            var clickSound = $("#clickBratok2")[0];
            clickSound.play();
        }
            function clickBratok3() {
            var clickSound = $("#clickBratok3")[0];
            clickSound.play();
        }
        function clickBratok4() {
            var clickSound = $("#clickBratok4")[0];
            clickSound.play();
        }
        function clickBratok5() {
            var clickSound = $("#clickBratok5")[0];
            clickSound.play();
        }
        var clickArray = [clickBratok1, clickBratok2, clickBratok3, clickBratok4, clickBratok5];

        clickArray[Math.floor(Math.random() * clickArray.length)]();
        $(this).text("Ой, извини, браток");
        $(this).parent().css("background", "#5fd347");
        $(this).css("color", "black");
    });
    }

    function makeNewPosition($container) {
        var h = $container.height() - 10;
        var w = $container.width() - 10;
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        return [nh, nw];
    }

    function animateDiv($target) {
        var newq = makeNewPosition($target.parent());
        var oldq = $target.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
    
        $target.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function() {
            animateDiv($target);
        });
    };

    function calcSpeed(prev, next) {
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
        var greatest = x > y ? x : y;
        var speedModifier = 0.3;
        var speed = Math.ceil(greatest / speedModifier);
        return speed;
    }

    function startTimer(duration, display) {
        var gameOver = $("#game-over")[0];
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (timer === 2) {
                function Otryzhka() {
            var otryzhka = $("#otryzhka")[0];
            otryzhka.play(); 
            }  
            Otryzhka();
            }
            if (--timer < 0) {
    
                bgm.pause();
                $(".lose-message").show();
                $("#container").hide();
                gameOver.play();
                gameOver.volume=0.3;
            
                if ($("#container").children(".removed").length === 12) {
                gameOver.pause();
            }
            var pidorsRemoved = $("#container").children(".removed").length;;
            var pidorsLeft = 13 - pidorsRemoved;
            $(".pidors-left").text(pidorsLeft);
            }
        }, 1000);
    }
        
    $(".try-again").on("click", function(){
        location.reload(true);
    })
});

