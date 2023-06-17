$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/prodazhi',
        dataType: 'JSON'
    }).done(function( response ) {

        response.prodazhi.forEach(prodazhi => {
            $('#tbl_prodazhi').append(
                `<tr>
                    <td>${prodazhi.id}
                    <td>${prodazhi.user_label}
                    <td>${prodazhi.edi_label}
                    <td>${prodazhi.kolicestvo}
                    <td>${prodazhi.data}
                </tr>`
            )
        })

    });
})