import React, { useEffect, useState } from 'react';
import './EditBook.scss';

type Props = {
  books: Book[],
  setBooks: (book: Book[]) => void,
  selectedBook: Book | null,
  toggleSelectedBook: (book?: Book) => void,
};

const initialState: Book = {
  id: 0,
  title: '',
  author: '',
  category: '',
  ISBN: '',
};

export const EditBook: React.FC<Props> = ({
  books,
  setBooks,
  selectedBook,
  toggleSelectedBook,
}) => {
  const [editingBook, setEditingBook] = useState(selectedBook || initialState);

  useEffect(() => {
    if (selectedBook) {
      setEditingBook(selectedBook);
    }
  }, [selectedBook]);

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingBook({
      ...editingBook,
      [event.target.name]: event.target.value,
    });
  };

  const clearInput = () => {
    setEditingBook({
      id: 0,
      title: '',
      author: '',
      category: '',
      ISBN: '',
    });
  };

  const editBook = () => {
    const index = books.find((book: Book) => book.id === editingBook.id);

    if (index) {
      books.splice(books
        .findIndex((book: Book) => book.id === editingBook.id), 1, editingBook);

      setBooks(
        [...books],
      );
    } else {
      clearInput();
    }
  };

  return (
    <form className="addBook-form">
      <fieldset className="addBook-form__container">
        <button
          type="button"
          className="addBook-form__button-close"
          onClick={() => toggleSelectedBook()}
        >
          X
        </button>
        <legend>Edit book</legend>
        Book title
        <input
          name="title"
          value={editingBook.title}
          type="text"
          required
          onChange={inputHander}
        />
        Author name
        <input
          name="author"
          value={editingBook.author}
          type="text"
          required
          onChange={inputHander}
        />
        Category
        <input
          name="category"
          value={editingBook.category}
          type="text"
          required
          onChange={inputHander}
        />
        International Standard Book Number (ISBN)
        <input
          name="ISBN"
          value={editingBook.ISBN}
          type="text"
          required
          autoComplete="off"
          minLength={6}
          maxLength={6}
          onChange={inputHander}
        />
        <button
          type="button"
          className="addBook-form__button"
          onClick={editBook}
        >
          Edit book
        </button>
      </fieldset>
    </form>
  );
};
