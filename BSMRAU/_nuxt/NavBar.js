const NavBar = document.querySelector("#wrapper");

const Header = function (data7) {
    NavBar.insertAdjacentHTML(
        "beforeend",
        ` <div class="header header-highlight" data-v-6e78c3c4="">
        <div class="fixed-menu" data-v-6e78c3c4="">
            <!-- Highlight  Start  -->
    
            <div
                id="oScroll"
                onmouseover="pauseScroll()"
                onmouseout="resumeScroll()"
            >
                <div class="highlight">Highlighted</div>
                <div id="scroll" style="left: -2062px">
                    <span class="items"
                        ><a
                            href=""
                            target="_blank"
                            class="link"
                        >
                            ****BdREN Platform এর আওতাধীন
                            বিশ্ববিদ্যালয়ের শিক্ষার্থীরা
                            ফ্রি অনলাইন ক্লাশ কারার সুবিধা
                            পাবে *****
                        </a></span
                    >
                    <span class="items"
                        ><a
                            href="/Notice/জরুরী-বিজ্ঞপ্তি-09092020.pdf"
                            target="_blank"
                            class="link"
                        >
                            *** ২০/০৯/২০২০ তারিখ হইতে আন্ডার
                            গ্র্যাজুয়েট প্রোগ্রামের শিক্ষা
                            কার্যক্রম অনলাইন এর মাধ্যমে শুরু
                            ***
                        </a></span
                    >
                </div>
            </div>
    
            <!-- END of Highlight  -->
            <div
                id="hamburger"
                class="hamburger"
                data-v-6e78c3c4=""
            >
                <span
                    class="bar bar-1"
                    data-v-6e78c3c4=""
                ></span>
                <span
                    class="bar bar-2"
                    data-v-6e78c3c4=""
                ></span>
                <span
                    class="bar bar-3"
                    data-v-6e78c3c4=""
                ></span>
            </div>
            <a
                href=${data7.logoHref}
                aria-current="page"
                class="header__logo header__logo--big nuxt-link-exact-active nuxt-link-active"
                data-v-6e78c3c4=""
                ><img
                    src=${data7.logo}
                    alt="logo-big"
                    class="header__logo__val"
                    data-v-6e78c3c4=""
            /></a>
            <div
                class="header__logo header__logo--mob"
                data-v-6e78c3c4=""
            >
                <div
                    class="d-flex justify-content-start"
                    data-v-6e78c3c4=""
                >
                    <div class="mslogo" data-v-6e78c3c4="">
                        <a
                            href="/"
                            aria-current="page"
                            class="logo nuxt-link-exact-active nuxt-link-active"
                            data-v-6e78c3c4=""
                            ><img
                                src=${data7.mslogo}
                                alt="logo-lg"
                                class="header__logo__lg"
                                data-v-6e78c3c4=""
                            />
                            <!-- <img
                                src=""
                                alt="logo-mob"
                                class="header__logo__tx"
                                data-v-6e78c3c4=""
                        /> -->
                        </a>
                    </div>
                </div>
            </div>
            <div
                class="header__nav navications navtop"
                data-v-6e78c3c4=""
            >
                <div
                    class="text-right mb-2 pb-1"
                    data-v-6e78c3c4=""
                >
                    <span data-v-6e78c3c4=""
                        ><a
                            href="/news"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >news</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/notices"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Notices</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/events"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Events</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/nocs"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >NOC</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/downloads"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Downloads</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/notices?tag=tender"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Tender</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            target="_blank"
                            href="https://alumni.just.edu.bd/"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Alumni</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            href="/offices/ints"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >ISC</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            target="_blank"
                            href="http://justir.just.edu.bd:8080/xmlui/"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >JUST IR</a
                        ></span
                    ><span data-v-6e78c3c4=""
                        ><a
                            target="_blank"
                            href="https://old.just.edu.bd/"
                            class="top-menu-item cPointer"
                            data-v-6e78c3c4=""
                            >Old Website</a
                        ></span
                    >
                </div>
                <ul
                    class="nav-list navigations__left"
                    data-v-6e78c3c4=""
                >
                    <span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Home
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/vc/speech"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Message From The
                                        Vice Chancellor
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/at-a-glance"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        JUST At A Glance
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >About
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/map"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Map
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://alumni.just.edu.bd"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Alumni</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/at-a-glance"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        At a Glance
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >FACILITIES
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href=${data7.facilities}
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Facilities
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href=${data7.gallery}
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Sports Gallery
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href=${data7.achive}
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Sports Achievements
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Research
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/research"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Research
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/research/publications"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Publications
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/research/industrial-collaboration"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Industrial
                                        Collaboration
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/research/projects"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Official Projects
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Admissions
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://gstadmission.ac.bd/"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Undergraduate</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/post-graduate"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Post Graduate
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/diploma"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Diploma
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/offices/ints"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Foreign Students
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Academics
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/faculties"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Faculties
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/departments"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Departments
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/academics/institutes"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Institutes
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/Research-Laboratory"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Research Laboratory
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/calendar"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Calendar
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/offices/librarian"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Library
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Administrations
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/offices"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Offices
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/regent-board"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Regent Board
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/academic-council"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Academic Council
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/authority-and-administration"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Authority
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/pages/various-just-committees-and-working-groups"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Committees and
                                        Working-group
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/webportals"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Web Portal
                                    </a>
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >Login
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;amp;service=mail&amp;amp;hd=just.edu.bd&amp;amp;sacu=1&amp;amp;flowName=GlifWebSignIn&amp;amp;flowEntry=AddSession"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Webmail</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://automation.just.edu.bd/"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Profile Login</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://app.ithenticate.com/en_us/login"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >TURNITIN</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://lms.just.edu.bd/login/"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Learning Management
                                        System (LMS)</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSemFrfm5duiS2Ije4TSFzAm2IvVxBwhohb88H0o7BaiPd5A1g/viewform?vc=0&amp;c=0&amp;w=1"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >TURNITIN REQUEST
                                        FORM</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfHv7XnfcMiIb_eJ492gDauKNpCKDZrl19PAZqEeqpNnB3gkA/viewform"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Profile and Mail
                                        request form</a
                                    >
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScot2MRoeFGtLmNLvdrMd39GbafuRceQ59xPkExwL4nMQK2bA/viewform"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Student email id
                                        request</a
                                    >
                                </li>
                            </ul>
                        </li></span
                    ><span data-v-6e78c3c4=""
                        ><li
                            class="nav-list__item"
                            data-v-6e78c3c4=""
                        >
                            <a
                                href="#"
                                class="nav-list__item__link"
                                data-v-6e78c3c4=""
                                >CAREER
                            </a>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 213.333 213.333"
                                xml:space="preserve"
                                class="icon"
                                style="
                                    enable-background: new 0
                                        0 213.333 213.333;
                                "
                                data-v-6e78c3c4=""
                            >
                                <g>
                                    <g>
                                        <polygon
                                            points="0,53.333 106.667,160 213.333,53.333 		"
                                        ></polygon>
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
                                <g></g>
                            </svg>
                            <ul
                                class="nav-list__item__sub sublist sublist--last"
                                data-v-6e78c3c4=""
                            >
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="/notices"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                    >
                                        Circular
                                    </a>
                                </li>
                                <li
                                    class="sublist__item"
                                    data-v-6e78c3c4=""
                                >
                                    <a
                                        href="https://career.just.edu.bd/"
                                        target="_blank"
                                        class="sublist__item__val cPointer"
                                        data-v-6e78c3c4=""
                                        >Apply online</a
                                    >
                                </li>
                            </ul>
                        </li></span
                    >
                </ul>
            </div>
        </div>
    </div>
    <div class="sidebar" data-v-fff37be6="">
    <ul id="container" class="sidebar__list" data-v-fff37be6="">
        <li data-v-fff37be6="">
            <span data-v-fff37be6=""
                ><a
                    href="/news"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >news</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/notices"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Notices</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/events"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Events</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/nocs"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >NOC</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/downloads"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Downloads</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/notices?tag=tender"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Tender</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    target="_blank"
                    href="https://alumni.just.edu.bd/"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Alumni</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    href="/offices/ints"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >ISC</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    target="_blank"
                    href="http://justir.just.edu.bd:8080/xmlui/"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >JUST IR</a
                ></span
            ><span data-v-fff37be6=""
                ><a
                    target="_blank"
                    href="https://old.just.edu.bd/"
                    class="sidebar__list--item scollapsible"
                    data-v-fff37be6=""
                    >Old Website</a
                ></span
            >
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Home
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul
                class="sidebar__sub-list strans sclosed"
                data-v-fff37be6=""
                style="height: 0px; max-height: 0px"
            >
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/vc/speech" class="d-block" data-v-fff37be6="">
                        Message From The Vice Chancellor
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/at-a-glance" class="d-block" data-v-fff37be6="">
                        JUST At A Glance
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                About
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul
                class="sidebar__sub-list strans sclosed"
                data-v-fff37be6=""
                style="height: 0px; max-height: 0px"
            >
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/map" class="d-block" data-v-fff37be6=""> Map </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://alumni.just.edu.bd"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Alumni</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/at-a-glance" class="d-block" data-v-fff37be6="">
                        At a Glance
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                FACILITIES
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul
                class="sidebar__sub-list strans sclosed"
                data-v-fff37be6=""
                style="height: 0px; max-height: 0px"
            >
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href=${data7.facilities} class="d-block" data-v-fff37be6="">
                        Facilities
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href=${data7.gallery}
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Sports Gallery
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href=${data7.achive}
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Sports Achievements
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Research
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/research" class="d-block" data-v-fff37be6="">
                        Research
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/research/publications"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Publications
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/research/industrial-collaboration"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Industrial Collaboration
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/research/projects"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Official Projects
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Admissions
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://gstadmission.ac.bd/"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Undergraduate</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/post-graduate"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Post Graduate
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/pages/diploma" class="d-block" data-v-fff37be6="">
                        Diploma
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/offices/ints" class="d-block" data-v-fff37be6="">
                        Foreign Students
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Academics
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/faculties" class="d-block" data-v-fff37be6="">
                        Faculties
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/departments" class="d-block" data-v-fff37be6="">
                        Departments
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/academics/institutes"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Institutes
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/Research-Laboratory"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Research Laboratory
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/calendar" class="d-block" data-v-fff37be6="">
                        Calendar
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/offices/librarian"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Library
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Administrations
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/offices" class="d-block" data-v-fff37be6="">
                        Offices
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/regent-board"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Regent Board
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/academic-council"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Academic Council
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/authority-and-administration"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Authority
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="/pages/various-just-committees-and-working-groups"
                        class="d-block"
                        data-v-fff37be6=""
                    >
                        Committees and Working-group
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/webportals" class="d-block" data-v-fff37be6="">
                        Web Portal
                    </a>
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                Login
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;amp;service=mail&amp;amp;hd=just.edu.bd&amp;amp;sacu=1&amp;amp;flowName=GlifWebSignIn&amp;amp;flowEntry=AddSession"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Webmail</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://automation.just.edu.bd/"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Profile Login</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://app.ithenticate.com/en_us/login"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >TURNITIN</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://lms.just.edu.bd/login/"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Learning Management System (LMS)</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSemFrfm5duiS2Ije4TSFzAm2IvVxBwhohb88H0o7BaiPd5A1g/viewform?vc=0&amp;c=0&amp;w=1"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >TURNITIN REQUEST FORM</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfHv7XnfcMiIb_eJ492gDauKNpCKDZrl19PAZqEeqpNnB3gkA/viewform"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Profile and Mail request form</a
                    >
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScot2MRoeFGtLmNLvdrMd39GbafuRceQ59xPkExwL4nMQK2bA/viewform"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Student email id request</a
                    >
                </li>
            </ul>
        </li>
        <li data-v-fff37be6="">
            <a
                href="#"
                class="sidebar__list--item scollapsible"
                data-v-fff37be6=""
            >
                CAREER
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.011 512.011"
                    xml:space="preserve"
                    class="icon"
                    style="enable-background: new 0 0 512.011 512.011"
                    data-v-fff37be6=""
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
                    <g></g></svg
            ></a>
            <ul class="sidebar__sub-list strans sclosed" data-v-fff37be6="">
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a href="/notices" class="d-block" data-v-fff37be6="">
                        Circular
                    </a>
                </li>
                <li class="sidebar__sub-list--item" data-v-fff37be6="">
                    <a
                        href="https://career.just.edu.bd/"
                        target="_blank"
                        class="d-block"
                        data-v-fff37be6=""
                        >Apply online</a
                    >
                </li>
            </ul>
        </li>
    </ul>
</div>

    `
    );

    const navbar = document.getElementById("hamburger");
    const navlist = document.getElementById("wrapper");
    const sidebar = document.querySelector(".sidebar");

    navbar.addEventListener("click", function () {
        navbar.classList.toggle("is-active");
        navlist.classList.toggle("nav-active");
        sidebar.classList.toggle("sidebar-active");
    });

    const mobilescoll = document.querySelectorAll("li>.scollapsible");
    const strans = document.querySelector(".strans");

    // mobilescoll.forEach(function (mbsc) {
    //     mbsc.addEventListener("click", function () {
    //         mbsc.target.classList.toggle("active");
    //         strans.forEach(function (stran) {
    //             stran.target.classList.toggle("sclosed");
    //         });
    //         strans.style.height;
    //     });
    // });

    mobilescoll.forEach(function (mob) {
        mob.addEventListener("click", function (e) {
            e.target.classList.toggle("active");
            let ul = e.target.parentElement.children[1];
            ul.classList.toggle("sclosed");
            if (e.target.classList.contains("active")) {
                ul.style.maxHeight = "none";
            } else {
                ul.style.maxHeight = "0px";
            }
        });
    });
};

Header(data7[0]);
