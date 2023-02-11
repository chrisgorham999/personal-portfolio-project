/*
======================================
; Title: footer.js 
; Author: Chris Gorham
; Date: 31 Jan 2023
; Description: This code is used for the footer in all pages in the Personal Portfolio Project
; Sources Used: 
; WEB 330 GitHub Page, URL: https://github.com/buwebdev/web-330/blob/master/portfolio/footer.js
;=====================================
*/

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="w3-text-grey footer-links">
                <p class="footer-links">
                
                <a href="https://github.com/chrisgorham999" target="resource window">Chris Gorham GitHub Repositories</A><br>
                
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="resource window">Bellevue University Web Development Degree</A><br>
                <a href="https://www.youtube.com/user/bellevueuniversity" target="resource window">Bellevue University YouTube Channel</A><br>
                <a href="https://github.com/buwebdev/web-330" target="resource window">Bellevue Web 330 GitHub</A><br>
                </p>
                <p class="footer-links">
                Copyright &copy; 2023 <a href="https://www.bellevue.edu target="resource window">Bellevue University</a>
                </p>
                </footer>
        `;
    }
}

customElements.define("footer-component", Footer);