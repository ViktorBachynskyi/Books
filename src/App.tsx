/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { getBook } from './api/books';
import './App.scss';
import { AddBook } from './components/AddBook/AddBook';
import { BooksListTable } from './components/BooksListTable/BooksListTable';
import { EditBook } from './components/EditBook/EditBook';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [showAddBook, setShowAddBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const booksFromServer = await getBook();

      setBooks(booksFromServer);
    };

    fetchBook();
  }, []);

  const showAddForm = () => {
    setShowAddBook(!showAddBook);
  };

  const toggleSelectedBook = (book?: Book) => {
    if (book) {
      setSelectedBook(book);
    } else {
      setSelectedBook(null);
    }
  };

  return (
    <div className="page">
      <div className={classnames({
        'side-addForm': true,
        'side-addForm--opened': showAddBook,
      })}
      >
        <AddBook
          books={books}
          setBooks={setBooks}
          showAddForm={showAddForm}
        />
      </div>
      <div className="page-content">
        <BooksListTable
          books={books}
          setBooks={setBooks}
          toggleSelectedBook={toggleSelectedBook}
        />
        <button
          type="button"
          onClick={showAddForm}
        >
          Add book
        </button>
      </div>
      <div className={classnames({
        'side-editForm': true,
        'side-editForm--opened': selectedBook,
      })}
      >
        <EditBook
          books={books}
          setBooks={setBooks}
          selectedBook={selectedBook}
          toggleSelectedBook={toggleSelectedBook}
        />
      </div>
    </div>
  );
};
