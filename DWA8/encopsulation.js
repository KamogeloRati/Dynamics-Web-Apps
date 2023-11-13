/**
 * Object representing a book preview with necessary information.
 * @typedef {Object} BookPreview
 * @property {string} id - The unique identifier for the book.
 * @property {string} image - The URL for the book image.
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 */

/**
 * Factory function to create book previews.
 * @param {BookPreview} book - The book information.
 * @returns {string} - The HTML structure representing the book preview.
 */
const createPreview = (book) => {
  return `
    <div class="preview" data-id="${book.id}" data-preview>
        <img src="${book.image}" alt="" class="preview__image">
        <div class="preview__info">
            <h3 class="preview__title">${book.title}</h3>
            <small class="preview__author">${authors[book.author]}</small>
        </div>
    </div>`;
};

// Example use of createPreview
const sampleBook = {
  id: "1",
  image: "example.jpg",
  title: "Sample Book Title",
  author: "John Doe"
};

const samplePreview = createPreview(sampleBook);
console.log(samplePreview); // This would output the HTML structure of the book preview
