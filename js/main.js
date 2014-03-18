	var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.navbar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

	//Contact form setup
  $('#price-tooltip').tooltip();

  
  $('.mainMail').submit( function() {
  
    var mail = $(this);
    $.ajax({
      type: "POST",
      
      url : "js/contactengine.php",
      data: $(this).serialize(),
      success: function() {
          $(mail).parents().find('.submitSuccess').removeClass('hidden');
          setTimeout(function() { $(mail).parents().find(".submitSuccess").addClass('hidden'); }, 15000);       
        },
      error: function() {
        $(mail).parents().find('.submitFail').removeClass('hidden');
        setTimeout(function() { $(mail).parents().find(".submitFail").addClass('hidden'); }, 15000);
      }
      });
    return false;
  });
    