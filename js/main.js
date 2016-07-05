$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate:'a',
    type:'image',
    gallery: {
      enabled: true,
      navigationByImgClick: true,
      preload: [0,1]
    }
  });
});

$(document).ready(function() {
    $('#search').hideseek({
      list: '.list',
      nodata: 'No results found.'
    });
});
