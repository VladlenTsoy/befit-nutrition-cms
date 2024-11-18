const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  apps: [{
    name: process.env.APP_NAME, // Имя приложения
    script: 'yarn', // Используем npm для запуска
    args: 'start', // Аргумент для npm (запуск команды `npm start`)
    cwd: './', // Рабочая директория (корень проекта Strapi)
    instances: 1, // Количество инстансов (1 для разработки, может быть больше для продакшена)
    autorestart: true, // Автоматический перезапуск при сбоях
    watch: false, // Отключение наблюдения за файлами (включите в dev-режиме)
    max_memory_restart: '1G', // Перезапуск при превышении 1 ГБ памяти
  },],
};
