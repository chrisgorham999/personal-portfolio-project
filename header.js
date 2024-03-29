/*
======================================
; Title: header.js 
; Author: Chris Gorham
; Date: 31 Jan 2023
; Description: This code is used for the header in all pages in the Personal Portfolio Project
; Sources Used: 
; WEB 330 GitHub Page, URL: https://github.com/buwebdev/web-330/blob/master/portfolio/header.js
; CSS Text Roller: https://codepen.io/marcell0lopes/pen/oNemQmB
;=====================================
*/


class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Icon Bar (Sidebar - hidden on small screens) -->
        <nav class="w3-sidebar w3-bar-block gorham-small w3-hide-small w3-center">
          <!-- Avatar image in top left corner -->
          <img class="gorham-filter gorham-opacity gorham-opacity-off" src="https://chrisgorham999.github.io/personal-portfolio-project/images/portrait.png" style="width:100%">
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/index.html" class="w3-bar-item w3-button gorham-padding-12 gorham-black">
            <i class="fa fa-home gorham-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/resume.html" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
          <i class="fa fa-solid fa-file gorham-xxlarge"></i>
          <p>RESUME</p>
          </a>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/projects.html" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
            <i class="fa fa-solid fa-folder gorham-xxlarge"></i>
            <p>PROJECTS</p>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/devops.html" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
            <i class="fa fa-solid fa-film gorham-xxlarge"></i>
            <p>DEVOPS PRESENTATIONS</p>
            </a>
          </a>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/database-diagrams.html" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
          <i class="fa fa-solid fa-database gorham-xxlarge"></i>
          <p>DATABASE DIAGRAMS</p>
          </a>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/api.html" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
          <i class="fa fa-laptop gorham-xxlarge"></i>
          <p>API UNIT TESTS</p>
          </a>
          <a href="https://chrisgorham999.github.io/personal-portfolio-project/index.html#bucket-list" class="w3-bar-item w3-button gorham-padding-12 w3-hover-black">
          <i class="fa fa-list gorham-xxlarge"></i>
          <p>BUCKET LIST</p>
          </a>
          </nav>
        

        <div class="gorham-padding-12" id="main">
        <!-- Header/Home -->
        <header class="gorham-logo" id="home">
          <img class="gorham-filter" src="https://chrisgorham999.github.io/personal-portfolio-project/images/logo.png"><br><br><br>
        <div class="main">
          <h1>Bellevue University <div class="roller">
          <span id="rolltext">Web<br/>
          Development<br/>
          Program<br/>
          <span id="online">Online</span><br/>
        </div>
          </h1>
    
  </div>
        </header>
        `;
    }
}

customElements.define("header-component", Header);