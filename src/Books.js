import React from 'react';
import Book from './Book';

function Books({ books }) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Books;
