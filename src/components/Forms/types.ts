export interface FormDataProps {
  name: string;
  birthday: string;
  gender: string;
  occupation: string;
  maritalStatus: string;
  religion: string;
  zipCode: string;
  street: string;
  number: string;
  addressDetails: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface Gender {
  name: string;
  value: string;
}

export type GenderListProps = Array<Gender>;
