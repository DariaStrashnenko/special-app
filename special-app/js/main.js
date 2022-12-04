$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

    let closePopup = function(){
        $('.popup-container').css('display', 'none');
    };{
        $('.popup-container > input[type="text"]').val('');
    };

    $('.close').on('click', function(){
        closePopup();
    });
});