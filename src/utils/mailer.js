// Функция для отправки AJAX-запроса с использованием Fetch API
export function sendFormData(body) {
    return fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        });



}
