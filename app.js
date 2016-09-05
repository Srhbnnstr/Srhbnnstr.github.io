$(function() {
  var form = $('#ajax-contact');

  var messages = $('#messages');

  $(form).submit(function(event) {
    event.preventDefault();
  }

  var formData = $('#ajax-contact').serialize();
    $.ajax({
     type: 'POST',
     url: $(form).attr('action'),
     data: formData
  })
  .done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(messages).removeClass('error');
    $(messages).addClass('success');

    // Set the message text.
    $(messages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
  })
  .fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(messages).removeClass('success');
    $(messages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(messages).text(data.responseText);
    } else {
        $(messages).text('Oops! An error occured and your message could not be sent.');
    }
});
});
