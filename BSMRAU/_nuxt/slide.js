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

    const allCards = document.querySelectorAll(".card-slide");

    //animation

    count = 0;
    size = card[0].clientWidth + 10;
    let timeout = setInterval(change, 2000);

    window.addEventListener("resize", function () {
        size = card[0].clientWidth + 10;
        transition();
    });

    function transition() {
        slideCards.addEventListener("mouseover", function () {
            clearInterval(timeout);
        });
        slideCards.addEventListener("mouseout", function () {
            timeout = setInterval(change, 2000);
        });

        // TRANSITIONEND
        console.log(allCards[count]);
        slideCards.addEventListener("transitionend", () => {
            if (allCards[count].id == "A6") {
                slideCards.style.transition = "none";
                count = card.length - count;
                slideCards.style.transform =
                    "translateX(" + -size * count + "px)";
            }
        });
    }
    transition();
    // CHANGE
    function change() {
        slideCards.style.transition = "transform 0.5s ease";
        count++;
        slideCards.style.transform = "translateX(" + -size * count + "px)";
    }
}
