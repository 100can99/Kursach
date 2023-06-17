$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/dostavka',
        dataType: 'JSON'
    }).done(function( response ) {

        response.dostavka.forEach(dostavka => {
            $('#tbl_dostavka').append(
                `<tr>
                    <td>${dostavka.id}
                    <td>${dostavka.kolicestvo}
                    <td>${dostavka.cena}
                    <td>${dostavka.data}
                    <td>${dostavka.post_name}
                    <td>${dostavka.user_imya}
                    <td>${dostavka.eda_nazvanie}
                </tr>`
            )
        })

    });

    $('#create_dostav').click(function(e){
        $('#create_dostav_popup').show();
    });

    $('#create_dostav_popup_close').click(function(e){
        $('#create_dostav_popup').hide();
    });

    $('#cancel_dostav_dostav').click(function(e){
        $('#create_dostav_popup').hide();
    });

    $('#submit_dostav_dostav').click(function(e){
        e.preventDefault();
        let data = {
            id_edi: $('#inpEda').val(),
            kolicestvo: $('#inpKolicestvo').val(),
            cena: $('#inpCena').val(),
            id_postavshika: $('#inpPost').val(),
            id_user: $('#inpPolz').val()
        };

        $.ajax({
            type: 'POST',
            data: data,
            url: '/dostavka/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан');
                window.location.reload();
            }
            else {
                alert(response.msg);
            }
        });

    });

    $('#edit_dostav').click(function(e){
        $('#edit_dostav_popup').show();
    });

    $('#edit_dostav_popup_close').click(function(e){
        $('#edit_dostav_popup').hide();
    });

    $('#cancel_edit_dostav').click(function(e){
        $('#edit_dostav_popup').hide();
    });

    $('#submit_edit_dostav').click(function(e){
        e.preventDefault();
        let data = {
            id_edi: $('#editinpEda').val(),
            kolicestvo: $('#editinpKolicestvo').val(),
            cena: $('#editinpCena').val(),
            id_postavshika: $('#editinpPost').val(),
            id: $('#editinpPolz').val()
        };

        $.ajax({
            type: 'POST',
            data: data,
            url: '/dostavka/edit',
            dataType: 'JSON'
        }).done(function ( response ){

            if (response.msg === '') {
                alert('Заказ обновлен');
                window.location.reload();
            }
            else {
                alert(response.msg);
            }
        });
    });

    $('#delete_dostav').click(function(e){
        $('#delete_dostav_popup').show();
    });

    $('#delete_dostav_popup_close').click(function(e){
        $('#delete_dostav_popup').hide();
    });

    $('#cancel_delete_dostav').click(function(e){
        $('#delete_dostav_popup').hide();
    });

    $('#submit_delete_dostav').click(function(e){
        e.preventDefault();
        let data = {
            id: $('#deleteinpPolz').val()
        };

        $.ajax({
            type: 'POST',
            data: data,
            url: '/dostavka/delete',
            dataType: 'JSON'
        }).done(function ( response ){

            if (response.msg === '') {
                alert('Заказ обновлен');
                window.location.reload();
            }
            else {
                alert(response.msg);
            }
        });
    });

    
    $('#info_dostav').click(function(e){
        $('#info_dostav_popup').show();
    });

    $('#info_dostav_popup_close').click(function(e){
        $('#info_dostav_popup').hide();
    });

    $('#submit_info_dostav').click(function(e){
        $('#info_dostav_popup').hide();
    });

});