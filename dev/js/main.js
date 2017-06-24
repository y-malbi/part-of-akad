
$('.filter-button-group > .btn').click(function(e){
  if ($(this).hasClass('is-checked')){
  }else{
    $('.filter-button-group > .btn').removeClass('is-checked')
    $(this).addClass('is-checked');
  }
});

//  ISOTOPE + MASONRY
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item-size',
    gutter: 30,
    horizontalOrder: true
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});







