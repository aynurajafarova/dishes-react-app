export interface IField {
  id: number;
  fieldName: string;
  label: string;
  type: string;
}

export interface IMeal {
  id: string;
  name: string;
  type: string;
  defaultChecked?: boolean;
  title: string;
  value: string;
  img: string;
  inputFields: IField[];
}

export interface IRegisteredFieldItem {
  name: string;
  type: string;
  count: number;
}
