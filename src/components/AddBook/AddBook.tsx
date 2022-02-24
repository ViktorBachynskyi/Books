import React, { useState } from 'react';
import { addBook } from '../../api/books';
import './AddBook.scss';

type Props = {
  books: Book[],
  setBooks: (book: Book[]) => void,
  showAddForm: () => void,
};

export const AddBook: React.FC<Props> = (props) => {
  const [newBook, setNewBook] = useState({
    id: 0,
    title: '',
    author: '',
    category: '',
    ISBN: '',
  });

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook({
      ...newBook,
      id: Math.random(),
      [event.target.name]: event.target.value,
    });
  };

  const clearInput = () => {
    setNewBook({
      id: 0,
      title: '',
      author: '',
      category: '',
      ISBN: '',
    });
  };

  const addNewBook = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addBook(newBook);

    props.setBooks([...props.books, newBook]);
    clearInput();
  };

  return (
    <form className="addBook-form" onSubmit={addNewBook}>
      <fieldset className="addBook-form__container">
        <button
          type="button"
          className="addBook-form__button-close"
          onClick={() => props.showAddForm()}
        >
          X
        </button>
        <legend>Add book</legend>
        Book title
        <input
          name="title"
          value={newBook.title}
          type="text"
          required
          onChange={inputHander}
        />
        Author name
        <input
          name="author"
          value={newBook.author}
          type="text"
          required
          onChange={inputHander}
        />
        Category
        <input
          name="category"
          value={newBook.category}
          type="text"
          required
          onChange={inputHander}
        />
        International Standard Book Number (ISBN)
        <input
          name="ISBN"
          value={newBook.ISBN}
          type="text"
          required
          autoComplete="off"
          minLength={6}
          maxLength={6}
          onChange={inputHander}
        />
        <button
          type="submit"
          className="addBook-form__button"
        >
          Add book
        </button>
      </fieldset>
    </form>
  );
};
