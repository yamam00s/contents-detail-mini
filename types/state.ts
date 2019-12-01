import { Person, Contents, Status, Stock } from "~/types";

export interface RootState {
  people: Person[];
}

export interface ContentsState {
  contents: Contents | null
  status: Status | null
  stock: Stock | null
}
