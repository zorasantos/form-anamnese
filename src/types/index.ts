export interface IPersonalDataProps {
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

export interface IDifficultProps {
  difficultFirst: string;
  difficultSecond: string;
  difficultThird: string;
  objective: string;
}

interface Gender {
  name: string;
  value: string;
}

export interface ILoginProps {
  name: string;
  token: string;
  term: boolean;
}

export type GenderListProps = Array<Gender>;
