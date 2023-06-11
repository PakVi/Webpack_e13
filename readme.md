<h1>Skillfactory FPW homework E13</h1>

<h3>Техническое задание:</h3>

В прошлом модуле мы с вами попробовали настроить Webpack. Теперь нужно добавить следующие возможности:

1)Установить и настроить webpack-dev-server. 

2)Настроить hot module replacement.

3)Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).

4)Настроить JSON-server и отображать полученные с него данные.

5)Добавить запуск линтера при комите.

<h3>Для запуска проекта:</h3>

```bash
git clone https://github.com/EmoSerge/Webpack-Homework.git
cd webpack-homework
npm i
npm i --save-dev ajv
```

<h3>Для запуска в режиме разработки:</h3>

```bash
npm run start-dev
```

<h5>Страница будет доступна по адресу:</h5>
http://localhost:8080/


<h3>Для запуска в рабочем режиме:</h3>

```bash
npm run start-prod
```

<h5>Страница будет доступна по адресу:</h5>
http://localhost:8080/


<h3>Для запуска JSON-сервера:</h3>

```bash
json-server --watch db.json
```

<h5>Страница будет доступна по адресу:</h5>
http://localhost:3000


<h3>Для коммита с запуском линтера:</h3>

```bash
git commit -a -m "commit"
```


