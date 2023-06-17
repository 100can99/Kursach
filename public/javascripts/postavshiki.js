$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/postavshiki',
        dataType: 'JSON'
    }).done(function( response ) {

        response.postavshiki.forEach(postavshiki => {
            $('#tbl_postavshiki').append(
                `<tr>
                    <td>${postavshiki.id}
                    <td>${postavshiki.nazvanie}
                    <td>${postavshiki.telephone_label}
                    <td>${postavshiki.address}
                </tr>`
            )
        })

    });
})