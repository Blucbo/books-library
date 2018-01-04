export interface Writer {
  id: number;
  full_name: string;
  biography: string;
  books: [{ name: string, id: number}];
}
