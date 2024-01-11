 // Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first(true, true).stop(true, true).slideDown(300);
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first(true, true).stop(true, true).slideUp(300);
});
