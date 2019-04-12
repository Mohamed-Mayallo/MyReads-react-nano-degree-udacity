import React from 'react';
import Books from './Books';

function Shelves({ shelves, changeBookShelf }) {
  return (
    <div>
      {shelves.map(shelf => (
        <div className="bookshelf" key={shelf.key}>
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <Books books={shelf.books} changeBookShelf={changeBookShelf} />
        </div>
      ))}
    </div>
  );
}

export default Shelves;
