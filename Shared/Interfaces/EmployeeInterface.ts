export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
  gender: "M" | "F";
  onClickDelete?: () => void;
  onClickUpdate?: () => void;
}

interface IObjectKeys {
  [key: string]: string | (() => void);
}
