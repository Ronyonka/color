$(function(){
    $('#submit').on('click', function(e){
        var rgb = $('#rgb').val()
        var hex = $('#hex').val()
        if(rgb.length == '' && $('#hex').val().length != ''){
            hex.toLowerCase()
            $('body').css('background', '#'+hex)
            $('.input').css('background', '#'+hex)
            $('#hex').val('');
            if(hex == 000 || hex == 0000 || hex == 00000 || hex == 000000){
                $('.logo').css('color', '#fff')
                $('.input').css('border-bottom','2px solid #fff')
                $('.input').css('color', '#fff')
                $('input').addClass('myClass')
            }
        }else if(hex.length == '' && rgb.length != ''){
            $('body').css('background', 'rgb(' +rgb + ')')
            $('.input').css('background', 'rgb(' +rgb + ')')
            $('#rgb').val('');
            if(rgb == 0,0,0){
                $('.logo').css('color', '#fff')
                $('.input').css('border-bottom','2px solid #fff')
                $('.input').css('color', '#fff')
                $('input').addClass('myClass')
            }
        }else if(hex.length != '' && rgb.length == ''){

        }
    })
})