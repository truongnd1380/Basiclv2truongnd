export class List {
  id: number;
  title: string;
  des:string;
  detail: string;
  category: number;
  public: boolean;
  data_pubblic: Date;
  position?:position[];
  thumbs?: ImageData;
}
export class position {
  id: number;
  label?:string;
}

export const Categories = [
  { id: 0, label: "Thời sự" },
  { id: 1, label: "Thế giới" },
  { id: 2, label: "Kinh doanh" },
  { id: 3, label: "Giải chí" },
  { id: 4, label: "Thể thao" },
  { id: 5, label: "Thể thao 1" },
  { id: 6, label: "Thể thao 2" },
  { id: 7, label: "Thể thao 3" },
  { id: 8, label: "Thể thao 4" },
  { id: 9, label: "Thể thao 5" },
  { id: 10, label: "Thể thao 6" },
  { id: 11, label: "Thể thao 7" },
  { id: 12, label: "Thể thao 8" },
]
export const Positions = [
  { id: 0, label: "Việt Nam" },
  { id: 1, label: "Châu Á" },
  { id: 2, label: "Châu Âu" },
  { id: 3, label: "Châu Mỹ" }
]
export const Public = [
  { id: 0, label: "Yes" },
  { id: 1, label: "No" },
]
