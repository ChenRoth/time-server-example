const ELEMENTS = {
    $getCurrentTimeBtn: $('#get-current-time-btn'),
    $addTimestampBtn: $('add-timestamp-btn'),
    $getHistoryBtn: $('#get-history-btn'),
    $response: $('#response'),
}

main();

function main() {
    ELEMENTS.$getCurrentTimeBtn.on('click', () => {
        $.ajax('http://localhost:5000/time', {
            success: (data) => {
                ELEMENTS.$response.html(data);
            },
        });
    });
}