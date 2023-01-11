$.getJSON('/public/js/datos.json', function (json) {
    $('.traducir').click(function () {        
        let lang = $(this).attr('id');        
        $('.language').each(function (index, element) {            
            $(this).text(json[lang][$(this).attr('key')]);
        });
    })
});