$(document).ready(function () {
    $("#submit").click(function (event) {
        event.preventDefault(); //取消reload
        $.ajax({
            method: "post",
            url: "./ajax_data",
            data: {
                message: $("#message").val(),
            },
            success: function (receive) {
                $("#review").text(receive);
                $('#message').val("");
            }
        })
    })
})