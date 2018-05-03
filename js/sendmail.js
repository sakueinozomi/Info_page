function sendmail(data) {
    if (data.length < 0) return false;
    alert('mail processing...');
    $('#submit span').text('Your message is sending...');
    $('#submit').attr('disabled','disabled');
    $('#message_alret').html('');
    $.ajax({
        url: 'http://test/email',
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function(data) {
            $('#message_area').show();
            if (false == data.status) {
                $('#message_alret').html(data.message);
            }
            if (true == data.status) {

                alert("Your email is send success!");
                $("form[name='contact']").find(":text,textarea,input").each(function() {
			          $(this).val("");
			      });
            }
            $('#submit span').text('Send Message');
            $('#submit').removeAttr('disabled');
            // $(window).scrollTop(80);
        },
        error: function(e) {

        }
    });
    return false;
};