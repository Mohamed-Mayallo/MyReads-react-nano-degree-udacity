import React from 'react';
import Books from './Books';

function Shelves({ shelves }) {
  return (
    <div>
      {shelves.map(shelf => (
        <div className="bookshelf" key={shelf.key}>
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <Books books={shelf.books} />
        </div>
      ))}
    </div>
  );
}

export default Shelves;
