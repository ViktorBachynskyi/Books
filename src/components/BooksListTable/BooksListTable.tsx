import React from 'react';
import { deleteBook } from '../../api/books';
import './BooksListTable.scss';

type Props = {
  books: Book[];
  setBooks: (book: Book[]) => void,
  toggleSelectedBook: (book?: Book) => void,
};

export const BooksListTable: React.FC<Props> = (props) => {
  const removeBook = async (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    await deleteBook(id);

    props.setBooks(props.books.filter((book: Book) => book.id !== id));
  };

  return (
    <div className="books">
      <table className="books__table">
        <tbody>
          <tr>
            <td>Book title</td>
            <td>Author name</td>
            <td>Category</td>
            <td>ISBN</td>
            <td>Actions</td>
          </tr>
        </tbody>
        {props.books.map(book => (
          <tbody key={book.id}>
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.ISBN}</td>
              <td className="books__field-actions">
                <button
                  type="button"
                  onClick={() => props.toggleSelectedBook(book)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={(event) => removeBook(event, book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
