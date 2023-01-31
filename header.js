class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Icon Bar (Sidebar - hidden on small screens) -->
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
          <!-- Avatar image in top left corner -->
          <img class="w3-opacity" src="portrait.png" style="width:100%">
          <a href="index.html" class="w3-bar-item w3-button w3-padding-large w3-black">
            <i class="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a href="index.html#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
          </a>
          <a href="resume.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-solid fa-file w3-xxlarge"></i>
          <p>RESUME</p>
          </a>
          <a href="projects.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-solid fa-folder w3-xxlarge"></i>
            <p>PROJECTS</p>
          </a>
          <a href="database-diagrams.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-solid fa-database w3-xxlarge"></i>
          <p>DATABASE DIAGRAMS</p>
          </a>
          <a href="api.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-laptop w3-xxlarge"></i>
          <p>API UNIT TESTS</p>
          </a>
          <a href="index.html#bucket-list" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-list w3-xxlarge"></i>
          <p>BUCKET LIST</p>
          </a>
          </nav>
        

        <div class="w3-padding-large" id="main">
        <!-- Header/Home -->
        <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h1 class="w3-jumbo">Chris Gorham's Portfolio</h1>
          <p>Bellevue University Web Development Program</p>
        </header>
        `;
    }
}

customElements.define("header-component", Header);
