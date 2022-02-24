const API_URL = 'https://my-json-server.typicode.com/ViktorBachynskyi/json-server/books';

export async function getBook(): Promise<Book[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export async function addBook(newBook: Book | null): Promise<Book[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
}

export async function deleteBook(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  return response.json();
}
