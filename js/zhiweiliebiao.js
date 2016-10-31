$(document).ready(function(){
    var n=0;
    var next=0;
    var t=setInterval(move,2000);
    function move(){
        next=n+1;
        if(next>=$(".list").length){
            next=0;
        }
        // console.log()
        $(".list").eq(n).animate({opacity:0},600);
        $(".list").eq(next).animate({opacity:1},600);
        $(".cir").eq(n).removeClass("cirfir");
        $(".cir").eq(next).addClass("cirfir");
        n=next;
    };
    $(".turn").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,2000)
    })
    $(".cir").each(function(index){
        $(this).click(function(){

            $(".list").eq(n).animate({opacity:0},600);
            $(".list").eq(index).animate({opacity:1},600);
            $(".cir").eq(n).removeClass("cirfir");
            $(".cir").eq(index).addClass("cirfir");
            n=index;
        })
    })
        




})