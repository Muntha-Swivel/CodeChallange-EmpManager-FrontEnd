export interface IEmployee extends IObjectKeys {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
  gender: "M" | "F";
}

interface IObjectKeys {
  [key: string]: string | number;
}
