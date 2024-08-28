interface IUser {
  name: string;
  age: number;
  id: number;
  email: string;
}

interface Employees extends IUser {
  salary: number;
}

interface Login {
  login(): IUser;
}
