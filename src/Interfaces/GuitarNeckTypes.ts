export interface IGuitarString {
  id: string;
  class: string;
  notes: string[];
}

export interface INoteItem {
  Name:string,
  String:string,
  Fret:number,
}

export interface ISelectedNote {
  Note:string,
  String:IGuitarString,
  Fret:number,
}
