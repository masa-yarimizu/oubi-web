$(function() {
    $('#questionNavi .list li')
    .hover(
        function(){
            $(this).stop().animate({
                'width':'250px',
                'height':'30px',
                'marginTop':'-20px'
            },'fast');
        },
        function () {
            $(this).stop().animate({
                'width':'200px',
                'height':'20px',
                'marginTop':'0px'
            },'fast');
        }
    );
});