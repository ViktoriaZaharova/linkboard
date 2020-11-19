$('.select').select2({
    width: 'style',
    searchInputPlaceholder: 'Добавить категорию...',
    dropdownParent: $('.modal')
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});