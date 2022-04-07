interface IMealField {
  id: number;
  fieldName: string;
}

export interface IMealOption {
  id: string;
  name: string;
  type: string;
  defaultChecked?: boolean;
  title: string;
  img: string;
  inputFields: IMealField[];
}
