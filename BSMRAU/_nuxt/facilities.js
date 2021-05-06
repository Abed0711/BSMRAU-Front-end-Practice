const data5 = [
    {
        id: "medical",
        dataSrc: "/images/overview/medical-srv.jpg",
        imgSrc: "/hero/err.webp",
        title: "24/7 on campus medical services",
        description: ` The campus has a large and well equipped medical
        center with four specialist doctors. There is also a
        24/7 ambulance service for emergency patient
        transportations. Students can get medical service at
        24/7 basis which is free of cost. Students also get
        the necessary medicines which are prescribed by the
        doctors for their treatments without any cost.`,
        href: "",
    },
    {
        id: "genome",
        dataSrc: "/images/genome/genome.jpg",
        imgSrc: "/images/genome/genome.jpg",
        title: "Genome Center",
        description: `  Genomic information is very important to unveil new
        opportunities for diagnostics and treatment of
        incurable diseases. For this purpose, the Genome
        Center of Jashore University of Science and
        Technology will serve as an important resource on
        the use of genomic data and will provide a
        specialized facility for advanced and
        high-throughput biomedical research. This center
        will herald a new age of cutting-edge research in
        Bangladesh. Its main task is to improve the
        responsible use of genomic information in the
        advancement of human wellbeing and to direct the
        national genome database. Genomic data have already
        restructured the diagnostics and treatment of
        several types of cancer and hereditary disease.`,
        href: "",
    },
    {
        id: "cafe",
        dataSrc: "/images/overview/cafe.jpg",
        imgSrc: "/hero/err.webp",
        title: " About central cafeteria and food",
        description: ` data-v-e79a74a8="" class="paragraph fac-para">
        The university has a two storied big and specious
        central cafeteria which has separated sections for
        teachers, students and stuffs. The cafeteria serves
        a wide variety of delicious foods. One can have
        snacks as well as the major meals of the day from
        the cafeteria at a decent price comparing to other
        restaurants outside of the campus.`,
        href: "",
    },
    {
        id: "audit",
        dataSrc: "/images/overview/gallery.jpg",
        imgSrc: "/hero/err.webp",
        title: "Central auditorium for conferences",
        description: `  A beautiful auditorium/gallery is located at the
        ground floor of the academic building. Special
        events like seminars, conferences, cultural
        programs, discussion, meetings etc. generally take
        place here. A beautiful auditorium/gallery is
        located at the ground floor of the academic
        building. Special events like seminars, conferences,
        cultural programs, discussion, meetings etc.
        generally take place here. A beautiful
        auditorium/gallery is located at the ground floor of
        the academic building. Special events like seminars,
        conferences, cultural programs, discussion, meetings
        etc. generally take place here.`,
        href: "",
    },
    {
        id: "wifi",
        dataSrc: "/images/overview/free-wifi.jpg",
        imgSrc: "/hero/err.webp",
        title: "Free wifi coverage throughout the campus",
        description: ` Internet is an important part of the University
        experience to ensure the students stay connected to
        the world. Generally, information is distributed via
        internet and social communications are routinely
        made by email. Students can get internet services
        from the university computer center &amp; university
        WiFi. Internet is an important part of the
        University experience to ensure the students stay
        connected to the world. Generally, information is
        distributed via internet and social communications
        are routinely made by email. Students can get
        internet services from the university computer
        center &amp; university WiFi.`,
        href: "",
    },
    {
        id: "library",
        dataSrc: "/images/overview/library-digital.jpg",
        imgSrc: "/hero/err.webp",
        title: " Digital Library &amp; research center",
        description: ` The library of JUST provides comfortable, flexible
        study spaces and offers a wealth of excellent
        learning resources, extensive collections of
        information sources and expert help and support from
        Library staff. It contains a rich collection of
        books and other materials specially for science and
        technology discipline. The digitalization of library
        makes it unique from other where the students are
        allowed to use E-book from library authorized sites.
        The Libraries support the academic as well as
        research needs of thousands of students and hundreds
        of teachers of the University.`,
        href: "",
    },
];

const facilityDiv = document.querySelector(".facilities");

let odd = function (items) {
    return `          <div data-v-e79a74a8="" id=${items.id} class="row fac pt-0">
    <div data-v-e79a74a8="" class="col-md-6 mb-5">
        <img
            data-v-e79a74a8=""
            alt=""
            class="fac-img"
            data-src=${items.dataSrc}
            src=${items.imgSrc}
            lazy="error"
        />
    </div>
    <div data-v-e79a74a8="" class="col-md-6 fac-odr">
        <div data-v-e79a74a8="" class="fac-dec">
            <h2 data-v-e79a74a8="" class="fac-title">
                ${items.title}
            </h2>
            <p data-v-e79a74a8="" class="paragraph fac-para">
               ${items.description}
            </p>
            <!---->
        </div>
    </div>
    <!---->
</div>`;
};

let even = function (items) {
    return `<div data-v-e79a74a8="" id=${items.id} class="row fac">
    <div data-v-e79a74a8="" class="col-md-6 fac-odr">
        <div data-v-e79a74a8="" class="fac-dec">
            <h2 data-v-e79a74a8="" class="fac-title">
                ${items.title}
            </h2>
            <p data-v-e79a74a8="" class="paragraph fac-para">
               ${items.description}
            </p>
           
        </div>
    </div>
    <div data-v-e79a74a8="" class="col-md-6 mb-5">
        <img
            data-v-e79a74a8=""
            alt=""
            class="fac-img"
            data-src=${items.dataSrc}
            src=${items.imgSrc}
            lazy="loaded"
        />
    </div>
</div>`;
};

const template = function (items, html, push_div) {
    let news = function () {
        return html(items);
    };
    push_div.insertAdjacentHTML("beforeend", news());
};

for (let i = 0; i < data5.length; i++) {
    if (i % 2 != 0 || i == 0) {
        template(data5[i], odd, facilityDiv);
    } else {
        template(data5[i], even, facilityDiv);
    }
}
