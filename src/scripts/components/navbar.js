class MenuNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="menu-mobile">
          <div>
            <a href="/" class="logo-resto">Nearby Resto</a>
          </div>

          <div class="menu-container">
            <button class="menu" aria-label="Ini adalah tombol untuk menu mobile" type="button">
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item">
            <a href="/">Beranda</a>
          </li>
          <li class="nav-item">
            <a href="#/favorite">Favorit</a>
          </li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/rifki-ramadhan-b98a6b195/"
            target="_blank" rel="noopener noreferrer">Tentang</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('navigation-bar', MenuNav);
