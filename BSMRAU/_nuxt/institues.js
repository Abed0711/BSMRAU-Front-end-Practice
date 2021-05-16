const template = function (data, html, push_div) {
    let news = data.map(function (items) {
        return html(items);
    });

    news = news.join("");
    push_div.innerHTML = news;
};

data10 = [
    {
        title: "Office Of",
        sub: "Dr M. A. Wazid Miah Institute of Advance Studies",
        href: "/offices/wmias",
    },
];

const PushInst = document.querySelector("#insti");

let institue = function (items) {
    return `<div data-v-837ef47a="" class="card">
    <div data-v-837ef47a="" class="card-body">
        <h4 data-v-837ef47a="" class="card-title">${items.title}</h4>
        <h2 data-v-837ef47a="" class="card-subtitle">
            ${items.sub}
        </h2>
        <span data-v-837ef47a="" class="line"></span>
        <a
            data-v-837ef47a=""
            href=${items.href}
            class="card-link"
            >Visit Site
            <span data-v-837ef47a=""
                ><svg
                    data-v-837ef47a=""
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                >
                    <g>
                        <g>
                            <path
                                d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
C514.096,145.416,514.096,131.933,505.755,123.592z"
                            ></path>
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g></svg></span
        ></a>
    </div>
</div>`;
};

template(data10, institue, PushInst);
