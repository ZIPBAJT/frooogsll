самый главный файл `npm run dev`
localhost:3000
новые строки в папке pages/

# Как настроить ноутбук

Установить:

- https://nodejs.org/ (LTS версия)
- https://code.visualstudio.com/Download
- https://cli.github.com/
- https://git-scm.com/download/win

Потом:

```
git config --global user.name 'твое имя'
git config --global user.email 'твой имейл'
```

# Как подключать библиотеки

`npm i -S название_библиотеки`

# Как создать новый проект и связать с гитхабом

1. Создать пустой репозиторий на гитхабе и нажать там галочку "добавить README.md" при создании проекта. В названии проекта желательно использовать только маленькие английские буквы и цифры.

2. Склонировать репозиторий: `gh repo clone имя_репозитория` в терминале

3. Открыть папку проекта в VSCode

4. Создать новый проект: `npx create-next-app .` в терминале

5. Добавить изменения в VSCode, создать коммит и запушить на сервер

# сочитание клавиш

ctrl + / добавить комм
ctrl + s save
ctrl + shift + i консоль в браузере

# прочее

https://getcssscan.com/css-box-shadow-examples красивые тени

# ошибки и решения

ReferenceError: Popover is not defined
забыл добавить и импорт

the name `Button` is defined multiple times
решение буттон импортируется несколки раз
