export interface IField {
  id: number;
  fieldName: string;
  label: string;
  type: string;
  step?: string;
  minValue?: string;
}

export interface IMeal {
  id: string | number;
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

export interface IMealData {
  name: string;
  type: string;
  preparation_time: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}
