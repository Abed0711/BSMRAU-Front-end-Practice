const data7 = [
    {
        id: 1,
        compName: "5th Bangladesh University Games Athletics (Male)",
        date: "2017-2018",
        venue: "DU/BUET",
        champ: "Champion",
    },
    {
        id: 2,
        compName: "5th Bangladesh University Games Athletics (Male)",
        date: "2017-2018",
        venue: "DU/BUET",
        champ: "Champion",
    },
    {
        id: 3,
        compName: "5th Bangladesh University Games Athletics (Male)",
        date: "2017-2018",
        venue: "DU/BUET",
        champ: "Champion",
    },
    {
        id: 4,
        compName: "5th Bangladesh University Games Athletics (Male)",
        date: "2017-2018",
        venue: "DU/BUET",
        champ: "Champion",
    },
];
const achive = document.querySelector("#tbody");

const template = function (data, html, push_div) {
    let news = data.map(function (items) {
        return html(items);
    });

    news = news.join("");
    push_div.innerHTML = news;
};

let gallery = function (items) {
    return `<tr>
    <th scope="row">${items.id}</th>
    <td>${items.compName}</td>
    <td>${items.data}</td>
    <td>${items.venue}</td>
    <td><span>${items.champ}</span></td>
    <td><!----></td>
    <td><!----></td>
</tr>
`;
};

template(data7, gallery, achive);
