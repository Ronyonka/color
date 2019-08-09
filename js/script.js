$(function(){
    $('#submit').on('click', function(e){
        var rgb = $('#rgb').val()
        var hex = $('#hex').val()
        $('body').css('background', '#'+hex)
        $('.input').css('background', '#'+hex)
        if(hex == 000){
            $('.logo').css('color', '#fff')
            $('.input').css('border-bottom','2px solid #fff')
        }
    })
})