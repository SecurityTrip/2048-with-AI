// Импортируем необходимые модули
const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const { join } = require('node:path');

// Устанавливаем хост и порт для сервера
const hostname = '127.0.0.1';
const port = 3000;

// Создаем сервер
const server = createServer((req, res) => {
    // Проверяем, что клиент запрашивает корневой адрес
    if (req.url === '/') {
        // Путь к файлу HTML
        const filePath = join(__dirname, 'index.html');

        // Читаем файл HTML
        readFile(filePath, (err, data) => {
            if (err) {
                // Если произошла ошибка, отправляем 500 Internal Server Error
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                // Если файл прочитан успешно, отправляем его содержимое клиенту
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else {
        // Для других запросов возвращаем 404 Not Found
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

// Запускаем сервер
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});