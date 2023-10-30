let page = 1;
let matches = books;

function createPreview(book) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', book.id);

  element.innerHTML = `
    <img class="preview__image" src="${book.image}" />
    <div class="preview__info">
      <h3 class="preview__title">${book.title}</h3>
      <div class="preview__author">${authors[book.author]}</div>
    </div>
  `;

  return element;
}

function addPreviewsToDOM(previews) {
  const fragment = document.createDocumentFragment();
  previews.forEach((book) => {
    const preview = createPreview(book);
    fragment.appendChild(preview);
  });

  document.querySelector('[data-list-items]').appendChild(fragment);
}

function populateDropdownOptions(data, selector, allOptionText) {
  const dropdownHtml = document.createDocumentFragment();
  const allOption = document.createElement('option');
  allOption.value = 'any';
  allOption.innerText = allOptionText;
  dropdownHtml.appendChild(allOption);

  for (const [id, name] of Object.entries(data)) {
    const option = document.createElement('option');
    option.value = id;
    option.innerText = name;
    dropdownHtml.appendChild(option);
  }

  document.querySelector(selector).appendChild(dropdownHtml);
}

// Theme management functions
const themeManager = {
    selectedTheme: null,
  
    selectTheme(theme) {
      this.selectedTheme = theme;
      // You can add logic to handle theme selection and storage
    },
  
    getSelectedTheme() {
      return this.selectedTheme;
    },
  };
  
  // CSS style application function
  function applyStyles(theme) {
    const styles = {
      day: { dark: '10, 10, 20', light: '255, 255, 255' },
      night: { dark: '255, 255, 255', light: '10, 10, 20' },
    };
  
    const selectedThemeStyles = styles[theme];
    const cssVariables = document.documentElement.style;
  
    // Apply CSS styles based on the selected theme
    cssVariables.setProperty('--color-dark', selectedThemeStyles.dark);
    cssVariables.setProperty('--color-light', selectedThemeStyles.light);
  }
  
  //  using the theme manager and applying styles
  themeManager.selectTheme('day'); // Select a theme
  const selectedTheme = themeManager.getSelectedTheme();
  applyStyles(selectedTheme); // Apply styles based on the selected theme
  

function filterBooks(filters) {
  return books.filter((book) => {
    const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
    const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === 'any' || book.author === filters.author;

    return genreMatch && titleMatch && authorMatch;
  });
}

function updatePageButtons() {
  const remainingBooks = matches.length - (page * BOOKS_PER_PAGE);
  document.querySelector('[data-list-button]').disabled = remainingBooks <= 0;
  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remainingBooks > 0 ? remainingBooks : 0})</span>
  `;
}

const OverlayManager = {
    showOverlay(overlaySelector) {
      const overlay = document.querySelector(overlaySelector);
      if (overlay) {
        overlay.open = true;
      }
    },
  
    hideOverlay(overlaySelector) {
      const overlay = document.querySelector(overlaySelector);
      if (overlay) {
        overlay.open = false;
      }
    },
  };
  

document.querySelector('[data-list-button]').addEventListener('click', () => {
  const previews = matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE);
  addPreviewsToDOM(previews);
  page += 1;
  updatePageButtons();
});

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  matches = filterBooks(filters);
  page = 1;
  updatePageButtons();
  updatePreviews();
  closeOverlay('[data-search-overlay]');
});

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  closeOverlay('[data-search-overlay]');
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  closeOverlay('[data-settings-overlay]');
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  openOverlay('[data-search-overlay]');
  document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  openOverlay('[data-settings-overlay]');
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  closeOverlay('[data-list-active]');
});

populateDropdownOptions(genres, '[data-search-genres]', 'All Genres');
populateDropdownOptions(authors, '[data-search-authors]', 'All Authors');

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);
  setTheme(theme);
  closeOverlay('[data-settings-overlay]');
});
