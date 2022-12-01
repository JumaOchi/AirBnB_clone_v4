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
});
