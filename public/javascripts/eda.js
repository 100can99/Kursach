$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/eda',
        dataType: 'JSON'
    }).done(function( response ) {

        response.eda.forEach(eda => {
            $('#tbl_eda').append(
                `<tr>
                    <td>${eda.id}
                    <td>${eda.nazvanie}
                    <td>${eda.tip}
                    <td>${eda.cena_label}
                    <td>${eda.kolicestvo_label}
                </tr>`
            )
        })

    });
})