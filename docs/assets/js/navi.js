// Скрипт ведения простой документации на JS/CSS/HTML
// date: 8 августа 2022 г.
/**
 *  Словарь доступных страниц ссылок.
 * Добавили страницу – добавили строку в словарь.
 * 
 */
pageDict = {

	// "404": "Страница не найдена",
	"az": "Азъ",
	"about": "О проекте",
	"contacts": "Контакты",
	"navi-page": "Оглавление и поиск"
}

// Зачистка хранилища клавишей `ESC`
document.addEventListener('keyup', function (event) {
	if (event.key === 'Escape') {
		alert("ВЫ ПОЧИСТИЛИ ЛОКАЛЬНЫЕ ДАННЫЕ ЭТОГО РЕСУРСА.\nЭТО ПОЛЕЗНО!");
		localStorage.clear();
	}
});

// Проверка и установка стартового значения
if (localStorage.getItem("az") != 1) {

	localStorage.setItem("color", '#ffffff');
}


function switchColorScheme() {

	whiteBG = '#ffffff';
	darkBG = '#070000';
	naviLight = `box-shadow: 0px 10 22 #fffaf5; background:linear-gradient(180deg, ${whiteBG} 98%, #b36c71 1%)`;
	naviDark = `box-shadow: 0px 20px 52px #611816; background:linear-gradient(180deg, ${darkBG} 98%, red 1%)`;

	trgr = localStorage.getItem('color') == whiteBG ? true : false;

	localStorage.setItem(
		'ystm', 'Yabo-system © Third Millennium'
	)

	localStorage.setItem(
		'az', 1
	)

	if (!trgr) {
		localStorage.setItem('color', whiteBG);
		localStorage.setItem('navidark', naviLight);

	} else {
		localStorage.setItem('color', darkBG);
		localStorage.setItem('navidark', naviDark);

	}

	document.body.style.background = localStorage.getItem('color');
	document.getElementsByClassName('navi')[0].style = localStorage.getItem('navidark');

}
// =================end localStorage =============

//  Download default value of localStorage
document.body.style.background = localStorage.getItem('color');
document.getElementsByClassName('navi')[0].style = localStorage.getItem('navidark');



/** Переключатель доменного имени. 
	Корректировка ссылок с учетом доменного имени. 
*/
var tempVar = document.location.host.split('/')
var domain = document.location.host.split('.').length;
var folderProjectOfGitHub = "???";

switch (domain) {
	case 2:
		// код для ЛИЧНОГО поддомена второго уровня
		folderProjectOfGitHub = `/${tempVar[0]}`;
		break;
	case 3:
		// код для ЛИЧНОГО поддомена 3-го уровня
		folderProjectOfGitHub = "";

		break;

	default:
		// домен третьего уровня по умолчанию yuorename.github.io
		folderProjectOfGitHub = `/${tempVar[0]}/`;
		break;
}


// словарь ключей для рандомной-сортировки
keyPageDict = [];
for (const key in pageDict) {
	keyPageDict.push(key);
}
// Случайная сортировка
keyPageDict.sort(() => Math.random() - 0.5);

navi_page = 'navi-page';

/**
 * Ключ текущей просматриваемой страницы
 */
keyDay = "";

/**
 * Количество елементов в меню навигации.
 */
itemsNavi = 7;

/**
 * Функция разбирает  URL текущей страницы
 * проверяет имя на присутствие в массиве 
 * 
 * @returns строку с именем текущей страницы.
 */

function namePage() {

	stringTabTitle = 'ДОК-РЕПО А374';
	str = document.URL.split('/').pop().split('.')[0];
	if (str != "") {

		for (const key in pageDict) {
			if (Object.hasOwnProperty.call(pageDict, key)) {
				if (key === str.substring(0, key.length)) {

					keyDay = key;

					namePageTab = pageDict[key];

					stringTabTitle = `${namePageTab} ••• ${document.location.hostname}`;
				}

			}

		}
	}

	return stringTabTitle;
}

/**
 * Функция составляет навигацию липкого-бара из станиц словаря
 * 
 * @returns HTML строку
 */
function toNavi() {

	counter = 1;
	htmlString = '<div class="navi-item" id="navi-icon-home"><a href="/#navi"><span class="icons">🏠</span></a></div>';

	for (const key of keyPageDict) {

		if (key != keyDay && counter < itemsNavi && key != 'dobro-day' && key != '404' && key != 'search-result') {

			if (!pageDict[key].split(' ')[1]) {
				var element = pageDict[key];

			} else if (pageDict[key].split(' ').length > 1) {
				var element = pageDict[key].slice(0, 7);

			}

			if (element.length > 8 || element.split(' ').length > 1) {
				element = element.slice(0, element.length - 3) + "…";
			}

			htmlString += `<div class="navi-item"><a title="${pageDict[key]}" href="/${folderProjectOfGitHub}${key}#navi">${element}</a></div>`;
			counter += 1;

		}
		if (counter == itemsNavi) {
			break;
		}

	}

	cday = new Date().getDate();

	htmlString += `<div class="navi-item" id="navi-day"><a href="dobro-day"><span id="navi-dobro-day">День </span></a><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html"><span class="${folderProjectOfGitHub}number-day" id="number-day">${cday}</span></a></div><div class="navi-item" title="ПОИСК И НАВИГАЦИЯ" id="navi-page-search"><a href="${folderProjectOfGitHub}navi-page#navi"><span class="icons">🔍</span></a></div><div class="navi-item" title="Цветность" id="colorScheme"><a onclick="switchColorScheme()"><span class="icons">🔘</span></a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = namePage();
	document.getElementById('navi').innerHTML = toNavi();
}

navi();

/** Увеличивает картинку по клику по заданным параметрам.
 * 
 * @param {int} rsz увеличение размера картинки при клике
 * @param {int} speed animation 
 */
function rsz(rsz = 100, speed = 0.1) {

	let array = document.querySelectorAll('img');

	for (let index = 0; index < array.length; index++) {

		let item = array[index].style = `transform: rotate(0deg); width: ${rsz}%; transition: all ${speed}s ease .2s;`;

	}

}
count = 1;

/** Уменьшает картинку по клику по заданным параметрам.
 * 
 * @param {*} par 
 * @param {*} speed 
 */
function imgResize(par, speed) {

	if (count % 2) {
		rsz(par, speed);
		// alert();
	} else
		rsz(22);
	// ширина в `%` для `image` при втором клике

	count = count + 1;

}


/**
 * Генерирует список  ссылок на страницы и добавляет их на указанную страницу навигации
 * по `id="navi-page"`
*/
function naviPage() {
	list = "";

	for (const ii in pageDict) {

		if (ii != navi_page) {

			list += `
		
		<span class="navi-item" style="background: #fef4e8; padding: 0em 1em;margin: 1em 1em 0em 0em; line-height: 2"><a href="${ii}"> ${pageDict[ii]} </a></span>

		`
		}
	}
	naviDiv = "<span>" + list + "<span>";

	document.getElementById('navi-page').innerHTML = naviDiv;
}
if (keyDay == navi_page) {
	naviPage()
}


// ----- kern()----

function kern() {

	rrr = document.getElementById('kern').style.fontKerning;
	// color = document.getElementById('kern').style.color;

	if (rrr === 'none') {
		document.getElementById('kern').style.fontKerning = "normal";
		document.getElementById('kern').style.color = "#777";
	} else {
		document.getElementById('kern').style.fontKerning = "none";
		document.getElementById('kern').style.color = "#99769c";
	}
}

// ---------end: kern()-----

// ------ Скрытие меню ------
var startScroll = 0;
window.addEventListener('scroll', function () {
	let currentPosition = this.scrollY;
	if (currentPosition > startScroll && currentPosition > 444) {
		document.querySelector('.navi').classList.add("navi-hidden");
		console.log();
	}
	else {
		document.querySelector('.navi').classList.remove("navi-hidden");
	}
	startScroll = currentPosition;

});
// ------end: Скрытие меню ------
