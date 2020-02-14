const ELEMENTS = {
    $getCurrentTimeBtn: $('#get-current-time-btn'),
    $addTimestampBtn: $('#add-timestamp-btn'),
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

    ELEMENTS.$addTimestampBtn.on('click', () => {
        $.ajax('http://localhost:5000/time', {
            method: 'POST',
            success: (data) => {
                ELEMENTS.$response.html(data);
            },
        });
    });

    ELEMENTS.$getHistoryBtn.on('click', () => {
        $.ajax('http://localhost:5000/history', {
            success: (data) => {
                ELEMENTS.$response.html(data);
            },
        });
    });
}