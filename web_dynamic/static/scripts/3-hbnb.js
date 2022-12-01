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
  $.post('http://0.0.0.0:5001/api/v1/places_search/', { 'Content-Type': 'application/json', data: {} },
    function (data) {
      const container = document.getElementsByClassName('title_box');
      const place = container.getElementsByTagName('DIV');
      for (let i = 0; i < place.length; i++) {
        let placeI = '<article><div><h2>' + `${data[i].name}` + '</h2><div>$' + `${data[i].price_by_night}` + '</div></div><div><div>' + `${data[i].max_guest}` + '</div><div>' + `${data[i].number_rooms}` + '</div><div>' + `${data[i].number_bathrooms}` + '</div></div><div>' + `${data[i].description}` + '</div></article>';
      }
      $('section.places').append('placeI');
    }
  );
});
