document.getElementById("navbar-placeholder").innerHTML = `
<div class="container-fluid bg-dark nav">
    <div class="container">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg px-0" role="navigation">
            <div class="navbar-brand d-lg-none">
                <img class="rounded-right" src="./img/logo.jpg" width="40" height="40"
                    alt="Logo Lorem Ipsum Institute of Technology" />
            </div>
            <div class="collapse navbar-collapse" id="nav-bar-content">
                <div class="navbar-nav mr-auto">
                    <ul class="nav-item">
                        <a class="nav-link" href="./" tabindex="0">Homepage</a>
                    </ul>
                    <ul class="nav-item dropdown" class="menu-toggle">
                    <button class="nav-link dropdown-toggle custom-button" href="#"
                        id="toggler-faculties"
                        tabindex="0"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onclick="toggleDropdown('faculties')"
                        >
                        Faculties
                    </button>
                    <ul class="dropdown-menu" id="navbar-faculties" style="visibility: hidden;">
                        <li>
                            <a class="dropdown-item" href="./empty.html?title=Applied+sciences" tabindex="0">Applied
                                sciences</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="./empty.html?title=Architecture+%26+planning"
                                tabindex="0">Architecture &amp; planning</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="./empty.html?title=Construction+%26+environment"
                                tabindex="0">Construction &amp; environment</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="./empty.html?title=Engineering"
                                tabindex="0">Engineering</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="./empty.html?title=Health+%26+social+sciences"
                                tabindex="0">Health &amp; social sciences</a>
                        </li>
                    </ul>
                    </ul>
                    <ul class="nav-item dropdown">
                        <button class="nav-link dropdown-toggle custom-button" href="#" id="toggler-education"
                        tabindex="0"
                        aria-haspopup="true" 
                        aria-expanded="false"
                        onclick="toggleDropdown('education')"
                        >
                        Education &amp; research
                        </button>
                        <ul class="dropdown-menu" id="navbar-education" style="visibility: hidden;">
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Bachelor" tabindex="0">Bachelor</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Master" tabindex="0">Master</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Continuing+education"
                                    tabindex="0">Continuing education</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Doctorate" tabindex="0">Doctorate</a>
                            </li>
                        </ul>
                    </ul>
                    <ul class="nav-item dropdown">
                        <button class="nav-link dropdown-toggle custom-button" href="#" id="toggler-industry"
                        tabindex="0"
                        aria-haspopup="true" 
                        aria-expanded="false"
                        onclick="toggleDropdown('industry')"
                        >
                        Industry &amp; partners
                        </button>
                        <ul class="dropdown-menu" id="navbar-industry" style="visibility: hidden;">
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Public+relations" tabindex="0">Public
                                    relations</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Commercialization"
                                    tabindex="0">Commercialization</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="./empty.html?title=Sponsors+%26+partners"
                                    tabindex="0">Sponsors &amp; partners</a>
                            </li>
                        </ul>
                    </ul>
                    <ul class="nav-item" style="list-style: none">
                        <li class="nav-item">
                            <a class="nav-link" href="./login.html" tabindex="0">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
`