var regions = [{
        "region_name": "Amazonas",
        "region_code": "AMA",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Áncash",
        "region_code": "ANC",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Apurímac",
        "region_code": "APU",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Arequipa",
        "region_code": "ARE",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Ayacucho",
        "region_code": "AYA",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Cajamarca",
        "region_code": "CAJ",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Callao",
        "region_code": "CAL",
        "cell": "968&nbsp505&nbsp501"
    },
    {
        "region_name": "Cusco",
        "region_code": "CUS",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Huancavelica",
        "region_code": "HUV",
        "cell": "924&nbsp916&nbsp521"
    },
    {
        "region_name": "Huánuco",
        "region_code": "HUA",
        "cell": "968&nbsp505&nbsp501"
    },
    {
        "region_name": "Ica",
        "region_code": "ICA",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Junín",
        "region_code": "JUN",
        "cell": "968&nbsp505&nbsp501"
    },
    {
        "region_name": "La Libertad",
        "region_code": "LAL",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Lambayeque",
        "region_code": "LAM",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Lima",
        "region_code": "LIM",
        "cell": "968&nbsp505&nbsp501"
    },
    {
        "region_name": "Loreto",
        "region_code": "LOR",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Madre de Dios",
        "region_code": "MDD",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Moquegua",
        "region_code": "MOQ",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Pasco",
        "region_code": "PAS",
        "cell": "968&nbsp505&nbsp501"
    },
    {
        "region_name": "Piura",
        "region_code": "PIU",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Puno",
        "region_code": "PUN",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "San Martín",
        "region_code": "SMA",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Tacna",
        "region_code": "TAC",
        "cell": "950&nbsp668&nbsp709"
    },
    {
        "region_name": "Tumbes",
        "region_code": "TUM",
        "cell": "Contacto no Disponible"
    },
    {
        "region_name": "Ucayali",
        "region_code": "UCA",
        "cell": "921&nbsp498&nbsp917"
    }
];


var temp_array = regions.map(function (item) {
    return item.cell;
});
var highest_value = String.apply(String, temp_array);

$(function () {

    for (i = 0; i < regions.length; i++) {

        $('#' + regions[i].region_code)
            .css({
                'fill': 'rgba(11, 104, 170,' + regions[i].cell / highest_value + ')'
            })
            .data('Región', regions[i]);
    }

    $('.map g').mouseover(function (e) {
            var region_data = $(this).data('Región');
            $('<div class="info_panel">' +
                    region_data.region_name + '<br>' +
                    'Celular: ' + region_data.cell.toLocaleString("en-UK") +
                    '</div>'
                )
                .appendTo('body');
        })
        .mouseleave(function () {
            $('.info_panel').remove();
        })
        .mousemove(function (e) {
            var mouseX = e.pageX,
                mouseY = e.pageY;

            $('.info_panel').css({
                top: mouseY - 50,
                left: mouseX - ($('.info_panel').width() / 2)
            });
        });

});