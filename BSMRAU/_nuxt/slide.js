// For Slider //

const datas = [
    {
        slideImage: "1.jpg",
        heading: "Book Of Research Abstract 2018",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "2.jpg",
        heading: "Book Of Research Abstract 2018-2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "3.jpg",
        heading: "Book Of Research Abstract 2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "2.jpg",
        heading: "Book Of Research Abstract 2018-2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "1.jpg",
        heading: "Book Of Research Abstract 2018",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    {
        slideImage: "3.jpg",
        heading: "Book Of Research Abstract 2019",
        teacherImage: "Photo-Aminul-Sir-2-x-2-Edit-01-PP-150x150.jpg",
        teacherName: "Prof. Dr. A. K. M. Aminul Islam",
        pdf: "",
    },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
    // { slideImage: "", heading: "", teacherImage: "", teacherName: "" },
];

let card, size, count;
let query1 = window.matchMedia("(min-width:1741px)");
let query2 = window.matchMedia("(max-width:1740px)");

const slideCards = document.querySelector(".slide-cards");
window.addEventListener("DOMContentLoaded", displayMenuItems());

function displayMenuItems() {
    let id = 0;
    let displayMenu = datas.map(function (item) {
        return `    <div id='A${id++}' class="card-slide">
        <img class="card-image" src=${item.slideImage} alt="" />
        <div class="heading">
            <h3>${item.heading}</h3>
        </div>
        <div class="teacher">
            <img class="teachers-img" src=${item.teacherImage} alt="" />
            <h4 class="teacher-name">${item.teacherName}</h4>
        </div>
        <hr />
        <div class="slide-footer">
            <div class="fotter-cover">
                <a class="read-more" href="${item.pdf}"> READ MORE </a>
                <div class="span-arrow">
                    <span class="arrow-card"></span>
                    <span class="arrow-card"></span>
                    <span class="arrow-card"></span>
                </div>
            </div>
        </div>
    </div>`;
    });

    displayMenu = displayMenu.join("");
    slideCards.innerHTML = displayMenu;
    card = document.querySelectorAll(".card-slide");

    const firstClone = card[0].cloneNode(true);
    const secondClone = card[1].cloneNode(true);
    const thirdClone = card[2].cloneNode(true);
    const fourthClone = card[3].cloneNode(true);

    firstClone.id = "first_clone";
    secondClone.id = "second_clone";
    thirdClone.id = "third_clone";
    fourthClone.id = "fourth_clone";

    slideCards.append(firstClone);
    slideCards.append(secondClone);
    slideCards.append(thirdClone);
    slideCards.append(fourthClone);

    const allCards = document.querySelectorAll(".card-slide");

    //animation

    count = 0;
    size = card[0].clientWidth + 10;
    let timeout = setInterval(change, 2000);

    window.addEventListener("resize", function () {
        size = card[0].clientWidth + 10;
    });

    slideCards.addEventListener("mouseover", function () {
        clearInterval(timeout);
    });
    slideCards.addEventListener("mouseout", function () {
        timeout = setInterval(change, 2000);
    });

    // CHANGE

    function change() {
        slideCards.style.transition = "transform 0.5s ease";
        count++;
        slideCards.style.transform = "translateX(" + -size * count + "px)";
    }

    // TRANSITIONEND

    slideCards.addEventListener("transitionend", () => {
        if (allCards[count].id === "first_clone") {
            slideCards.style.transition = "none";
            count = card.length - count;
            slideCards.style.transform = "translateX(" + -size * count + "px)";
        }
    });
}

// For Notice //

const datas2 = [
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
    },
    {
        date: "28 April 2021",
        details: `details Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Eligendi officiis quae quaerat
obcaecati neque hic velit provident voluptatum autem
labore!`,
    },
];

const pushNotice = document.getElementById("pushNotice");

let display = datas2.map(function (items) {
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
            <button>Download</button>
        </div>
    </div>
    </div>`;
});

display = display.join("");
pushNotice.innerHTML = display;
