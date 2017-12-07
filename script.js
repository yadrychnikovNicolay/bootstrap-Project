$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(function(){
    $('#characterLeft').text('280 characters left');
    $('#message').keydown(function () {
        var max = 280;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit').addClass('red');
            $('#submit').attr('disabled', true).removeClass('btn-primary').addClass('btn-danger');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left').removeClass('red');
            $('#submit').attr('disabled', false).addClass('btn-primary').removeClass('btn-danger') ;
        }
    });
});
