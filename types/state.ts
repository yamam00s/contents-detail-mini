import { Person, Contents } from "~/types";

export interface RootState {
  people: Person[];
}

export interface ContentsState {
  contents: Contents | null;
}
