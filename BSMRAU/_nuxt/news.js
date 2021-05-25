// Datas For Notice Section //

const data2 = [{
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
        link: ``,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
        link: ``,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
        link: ``,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
        link: ``,
    },
];

// Datas For News three items Section //

const data3 = [{
        headlinelink: ``,
        headline: ``,
        image: ``,
        newsSubTitle: "",
        details: ``,
    },
    {
        headlinelink: ``,
        headline: `  `,
        image: ``,
        newsSubTitle: "",
        details: ` `,
    },
    {
        headlinelink: ``,
        headline: ``,
        image: ``,
        newsSubTitle: "",
        details: ` `,
    },
];

// Datas For New Focus Section //

const data4 = [{
    img: ``,
    subtitle: `  `,
    newsTitle: ``,
    newsTitleLink: ``,
    details: ``,
}, ];

// Div Notice //

const pushNotice = document.getElementById("pushNotice");

// Div News //

const Fnews = document.getElementById("focus-news");
const AllNews = document.getElementById("AllNews");

const template = function(data, html, push_div) {
    let news = data.map(function(items) {
        return html(items);
    });

    news = news.join("");
    push_div.innerHTML = news;
};

let Notice = function(items) {
    return `<div class="col-sm-6 my-3 col-12">
    <div class="notice-cover">
        <div class="notice-date">
            ${items.date}
            <svg
                data-v-abe9ddd2=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="thumbtack"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="fa-fw mr-2 svg-inline--fa fa-thumbtack fa-w-12 pin__icon"
                style="max-width: 1.7rem"
            >
                <path
                    d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"
                ></path>
            </svg>
        </div>
        <div class="notice-details">
           ${items.details}
        </div>
        <div class="notice-button">
            <a href=${items.link}>Download</a>
        </div>
    </div>
    </div>`;
};

let htmlAllNews = function(items) {
    return `<div data-v-226c2264="" class="col-md-4 mb-5 card">
    <a
        href=${items.headline}
        class="link"
        ><div>
            <img
                src=${items.image}
                class="img-fluid news__preview__img mb-4"
            />
            <div >
                <p class="news-subtitle">
                    ${items.newsSubTitle}
                </p>
                <h5
                    class="news-title news-title--small"
                >
                    ${items.headline}
                </h5>
                <p data-v-226c2264="" class="news-excerpt">
                    ${items.details}
                </p>
                <div
                    data-v-7400bec4=""
                    data-v-226c2264=""
                    class="brm"
                >
                    <a
                        data-v-7400bec4=""
                        href=${items.headlinelink}
                        class="btn-rm"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div></a
    >
    </div>`;
};

let focusNews = function(items) {
    return `<div data-v-226c2264="" class="col-md-4">
    <img
        data-v-226c2264=""
        alt="Responsive image"
        class="news-img"
        src=${items.img}
        lazy="loaded"
    />
  </div>
  <div data-v-226c2264="" class="col-md-8">
    <p data-v-226c2264="" class="news-subtitle">
      ${items.subtitle}
    </p>
    <h1 data-v-226c2264="" class="news-title news-title-main">
        ${items.newsTitle}
    </h1>
    <p data-v-226c2264="" class="news-excerpt">
       ${items.details}
    </p>
    <div data-v-226c2264="" class="brm">
        <a
            data-v-7400bec4=""
            href=${items.newsTitleLink}
            class="btn-rm"
        >
            Read more
        </a>
    </div>
  </div>`;
};

template(data3, htmlAllNews, AllNews);
template(data4, focusNews, Fnews);
template(data2, Notice, pushNotice);