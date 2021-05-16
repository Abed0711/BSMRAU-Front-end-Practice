const data8 = [
    { title: "Faculty of Engineering and Technology" },
    { title: " Engineering and Technology" },
    { title: "Faculty  Technology" },
    { title: "of Engineering and Technology" },
    { title: "Faculty of Engineering " },
];
const data9 = [
    [
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
    ],
    [
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
    ],
    [
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
    ],
    [{ head: "Chemical Engineering", href: "#" }],
    [
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
        { head: "Chemical Engineering", href: "#" },
    ],
];

const template = function (data, html, push_div) {
    let news = data.map(function (items) {
        return html(items);
    });

    news = news.join("");
    push_div.innerHTML = news;
};

let dept = function (items) {
    return `        <div data-v-77ad9b8a="" data-v-0de0b17b="" class="card">
    <div data-v-77ad9b8a="" class="card-body">
        <h4 data-v-77ad9b8a="" class="card-title">Department Of</h4>
        <h2 data-v-77ad9b8a="" class="card-subtitle">
            ${items.head}
        </h2>
        <span data-v-77ad9b8a="" class="line"></span>
        <div data-v-7400bec4="" data-v-77ad9b8a="" class="brm">
            <a
                data-v-7400bec4=""
                href=${items.href}
                class="btn-rm"
            >
                Visit Website
            </a>
        </div>
    </div>
</div>`;
};

const pushdiv = document.querySelector(".depts");

let Facilities = function (items) {
    for (i = 0; i < items.length; i++) {
        pushdiv.insertAdjacentHTML(
            "beforeend",
            `    <div data-v-0de0b17b="">
            <h1 data-v-0de0b17b="" class="glnc-tx">
                ${items[i].title}
            </h1>
            <div data-v-0de0b17b=""  class="ofc-list">
        
            </div>
        </div>`
        );
    }
};
Facilities(data8);

const lists = document.querySelectorAll(".ofc-list");

for (i = 0; i < data9.length; i++) {
    template(data9[i], dept, lists[i]);
}
