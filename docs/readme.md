<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Документация `AZDOC`

<span id="az1-img" class="img" onclick="imgResize()">![img](assets/svg/000-start.svg)</span>

Разместите папку `docs` в корне вашего проета в `github` и просто добавляйте страницы в папку `/docs`.

Скопируйте содержимое `000.md` в свою страницу с расширением `.md` и добавте в файле `navi.js` в словарь `pageDict{}` запись, — где ключ это имя страницы, и значение, которое будет отображено в меню.

**ПРМЕР** для стрраниц `az.md` и `contacts.md`

```js
// navi.js
pageDict = {
	az: "Азъ",
	contacts: "Контакты",
};
```

Загрузите проект в Гитхаб и включите `pages` в настройках `Github`.

Если вам нужно добавить поиск по материалам большой документации, лучше воспользуйтесь `Google-search` инструментами.

<br>

<span id="az2-img-2" class="img" onclick="imgResize()">![img](assets/svg/000-end.svg)</span>
