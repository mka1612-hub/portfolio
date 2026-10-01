const cases = [
  {
    id: "befree",
    title: "Запуск линейки Plus-size",
    category: "Digital",
    tags: ["Digital", "Fashion"],
    image: "./assets/befree-plus-size.webp",
    link: "https://specials.wildberries.ru/promo/befree-style-plus-size",
    task: ["Рассказать о запуске новой для бренда размерной линейки.", "Помочь новому креатору влиться в процессы, обучить работе с digital-проектами."],
    result: ["Я помогла отобрать идеи для подачи клиенту и оформить презентацию.", "Выстроила логику теста, супервизировала UX проекта.", "55% пользователей, начавших тест, прошли его до конца. Проект усилил знание бренда и намерение купить."]
  },
  {
    id: "spelaya-moda",
    title: "Онлайн-лукбук «Спелая мода»",
    category: "Digital",
    tags: ["Digital", "Fashion", "Продакшн"],
    image: "./assets/spelaya-moda.webp",
    link: "https://specials.wildberries.ru/promo/spelayamoda",
    task: ["Улучшить имидж WB, создать образ fashion-площадки.", "Создать равные условия для всех участников проекта."],
    result: ["В креативной группе мы продумали концепцию проекта, выбрали продакшн для проведения съёмки.", "Я предложила структуру лендинга со случайной выдачей блоков, чтобы поставить селлеров в равные условия.", "Я вела креативный надзор на съёмке, в период постпродакшна и при создании лендинга.", "Все селлеры-участники получили рост поисковых запросов и посещений карточек товаров.", "В постаналитике мы увидели повышение ассоциации WB с модой."]
  },
  {
    id: "sela",
    title: "Интерактивный лендинг Back to School",
    category: "Digital",
    tags: ["Digital", "Fashion", "Kids"],
    image: "./assets/sela-school.webp",
    link: "https://specials.wildberries.ru/promo/sela-style-week",
    task: ["Напомнить аудитории о бренде и стимулировать продажи в горячий сезон.", "Показать школьную коллекцию, рассказать пользователю, что капсульная коллекция закрывает потребность в одежде на весь учебный год."],
    result: ["Я предложила формат интерактивного лендинга, который показывает максимальное количество образов и для будних дней, и для выходных.", "Мы перевыполнили KPI по уникальным посетителям на лендинге, больше половины посетителей проекта перешли в подборку товаров."]
  },
  {
    id: "rascvetay",
    title: "Мультибрендовый спецпроект",
    category: "Digital",
    tags: ["Digital", "FMCG"],
    image: "./assets/rascvetay.webp",
    link: "https://cmp.wildberries.ru/promo/rascvetay_spec#start",
    task: ["Привлечь новую аудиторию и усилить знание о брендах-участниках.", "Преодолеть баннерную слепоту пользователей WB с помощью креативной механики.", "Создать равные условия для всех брендов, участвующих в проекте."],
    result: ["Я придумала интерактивный пинборд с милыми персонажами, каждый из которых олицетворял один из брендов-участников.", "Селлеры-участники получили рост посещений карточек фокусных товаров и повышение узнаваемости брендов."]
  },
  {
    id: "roblox",
    title: "Метавселенная Чихо в Roblox",
    category: "Digital",
    tags: ["Digital", "HoReCa", "Gaming"],
    image: "./assets/chiho-roblox.webp",
    task: ["Привлечь молодую аудиторию (зумеров и даже поколение альфа).", "Провзаимодействовать с новой аудиторией, закрепить имидж не просто ресторана, а арт-проекта."],
    result: ["Мы создали игру с полным погружением в вайб Чихо, которая стимулирует повторить игровой опыт в реальности.", "Получили больший поток детей, которые приводят своих родителей и старших сиблингов.", "Пользователи Roblox знакомились с Чихо и приходили за курочкой благодаря купонам, вшитым в игру."]
  },
  {
    id: "newspaper",
    title: "Разработка концепции газеты в Чихо",
    category: "Брендинг",
    tags: ["Брендинг", "HoReCa", "Копирайтинг"],
    image: "./assets/chiho-newspaper.webp",
    gallery: ["./assets/chiho-newspaper-1.webp", "./assets/chiho-newspaper-2.webp", "./assets/chiho-newspaper-3.webp"],
    task: ["Повысить время пребывания в кафе.", "Стимулировать возвраты гостей.", "Проинформировать лояльную аудиторию о вакансиях в компании и о франшизе."],
    solution: ["Я предложила сделать для Чихо газеты, которые гости смогут листать, пока ждут еду. В них нужно было отразить азиатский колорит и новости Чихо, но так, чтобы они не устаревали через месяц.", "Я предложила разбавить новости компании мемами и добавить розыгрыш в газету, чтобы сделать её не перегруженной, читаемой и вовлекающей."],
    result: ["Планировалось, что газеты будут лежать только в одном кафе, но они так понравились гостям, что их разложили в трёх. Газеты помогли Чихо получить бесплатные отклики на вакансии и повысили возвращаемость гостей.", "Макет газеты можно посмотреть ниже."]
  },
  {
    id: "branding",
    title: "Стикеры, вывески и стаканы",
    category: "Брендинг",
    tags: ["Брендинг", "HoReCa", "Копирайтинг"],
    image: "./assets/chiho-branding.webp",
    task: ["Создать брендинговые тексты, которые станут неотъемлемыми элементами фирменного стиля и повысят количество UGC."],
    solution: ["Я брендировала неоновые вывески, стикеры, стаканы и коробочки для коллаборации с Яндекс Лавкой. Написала цепляющие фразы на зумерском, такие, чтобы с ними хотелось фоткаться."],
    result: ["Гости заходят фоткаться с неонками и остаются из-за еды.", "Собрали море UGC с нашими креативами и завирусились.", "Планировали повесить неонки в одном корнере, но стали их использовать во всех Чихо."]
  },
  {
    id: "guides",
    title: "Инструкции для персонала и франчайзинга Чихо",
    category: "Брендинг",
    tags: ["Брендинг", "HoReCa", "Процессы"],
    image: "./assets/chiho-guides.webp",
    task: ["Написать инструкции для тех, кто только погружается в мир Чихо, сделать их простыми и читаемыми. Расставить акценты и добавить эмпатии, ускорить процесс обучения."],
    result: ["Франчайзи обучают свой персонал по написанным мной инструкциям, уже больше 50 ребят стали крутыми и вайбовыми фуд-гидами.", "Управляющим стало проще обучать новеньких, благодаря новым инструкциям и коротким памяткам по процессам."]
  },
  {
    id: "ohotka",
    title: "Карточная игра для ресторана Охотка",
    category: "Брендинг",
    tags: ["Брендинг", "HoReCa", "Игра"],
    image: "./assets/ohotka-game.webp",
    task: ["Вплести идеологию Mindfulness и заботы о психологическом здоровье в культурный код Охотки."],
    solution: ["Я придумала психологическую карточную игру, в которой слышен голос моря."],
    resultLabel: "Примеры карточек",
    result: ["Синие-синие бескрайние просторы. Куда ни посмотри — синева глубокая, до самого горизонта. Что для вас свобода?", "Все закаты красивые, но морские особенные. О чём бы вы поговорили с близким другом, встречая закат на море?", "Камушки, которые пахнут, как море, или ракушки, которые звучат, как оно. То самое летнее платье или по-особенному влажный воздух. Что помогает вам помнить о море вдали от него?"]
  }
];

const filterOrder = ["Все", "Digital", "Брендинг", "HoReCa", "Fashion", "Kids", "Копирайтинг"];
const caseGrid = document.querySelector("#case-grid");
const filters = document.querySelector("#filters");
const count = document.querySelector("#filter-count");
let activeFilter = "Все";

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderCases() {
  const visible = activeFilter === "Все" ? cases : cases.filter((item) => item.tags.includes(activeFilter));
  count.textContent = `${visible.length} ${visible.length === 1 ? "кейс" : visible.length < 5 ? "кейса" : "кейсов"}`;
  caseGrid.innerHTML = visible.map((item, index) => `
    <details class="case-card" id="case-${item.id}">
      <summary>
        <div class="case-card__visual">
          <img src="${item.image}" alt="Иллюстрация проекта «${item.title}»" loading="lazy" />
          <span class="case-card__number">${String(index + 1).padStart(2, "0")}</span>
          <span class="case-card__category">${item.category}</span>
        </div>
        <div class="case-card__intro">
          <div class="case-card__tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <h3>${item.title}</h3>
          <span class="case-card__more"><b>+</b> раскрыть кейс</span>
        </div>
      </summary>
      <div class="case-card__body">
        <div><h4>Какая была задача?</h4>${list(item.task)}</div>
        ${item.solution ? `<div><h4>Какое решение я предложила?</h4>${list(item.solution)}</div>` : ""}
        <div><h4>${item.resultLabel || "Что получилось?"}</h4>${list(item.result)}</div>
        ${item.gallery ? `<div class="case-card__gallery">${item.gallery.map((image, i) => `<img src="${image}" alt="Разворот газеты Чихо ${i + 1}" loading="lazy" />`).join("")}</div>` : ""}
        ${item.link ? `<a class="case-card__link" href="${item.link}" target="_blank" rel="noreferrer">Открыть проект ↗</a>` : ""}
      </div>
    </details>
  `).join("");
  bindPrepositions(caseGrid);
}

function bindPrepositions(root) {
  const pattern = /(^|\s)(в|во|на|по|из|из-за|за|к|ко|с|со|у|о|об|обо|от|до|для|без|над|под|при|про|через|между|перед|вокруг|около)\s+/gi;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = node.nodeValue.replace(pattern, "$1$2\u00a0"); });
}

filterOrder.forEach((filter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter";
  button.textContent = filter;
  button.setAttribute("aria-pressed", filter === activeFilter ? "true" : "false");
  button.addEventListener("click", () => {
    activeFilter = filter;
    document.querySelectorAll(".filter").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderCases();
  });
  filters.append(button);
});

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("is-open", !isOpen);
});
navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});

renderCases();
bindPrepositions(document.body);
