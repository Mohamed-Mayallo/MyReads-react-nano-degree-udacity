import React, { Component } from 'react';

class Book extends Component {
  updateShelf = event => {
    this.props.changeBookShelf(this.props.book, event.target.value);
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.updateShelf} defaultValue="move">
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors &&
            this.props.book.authors.length &&
            this.props.book.authors.join(', ')}
        </div>
      </div>
    );
  }
}

export default Book;
