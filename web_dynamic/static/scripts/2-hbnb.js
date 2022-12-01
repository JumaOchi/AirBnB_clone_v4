document.addEventListener('DOMContentLoaded', (event) => {
  let list = [];
  const dict = {};
  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
      list = Object.keys(dict);
      $('DIV.amenities h4').append(Object.values(dict));
    } else {
      delete amenityDict[$(this).attr('data-id')];
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/',
    function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  );
});
