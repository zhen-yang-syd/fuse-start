class User {
  private id!: number;
  protected name!: string;
  address!: string;
  constructor({
    id,
    name,
    address,
  }: {
    id: number;
    name: string;
    address: string;
  }) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  getNameWithAddress(): string {
    return `${this.name} lives at ${this.address}`;
  }
  //   only work User.getEmployeeCount();
  // not work on john.getEmployeeCount();
  static getEmployeeCount() {
    return 100;
  }
  get empId():number {
        return this.id;
  }
  set empId(id:number) {
    this.id = id;
  }
}


let john = new User({ id: 1, name: "John Doe", address: "123 Main St." });
console.log(john);
console.log(john.address)
console.log(john.getNameWithAddress());


class Manager extends User {
    private employees: User[] = [];
    constructor(manager: { id: number; name: string; address: string }) {
        super(manager);
    }
    addEmployee(employee: User) {
        this.employees.push(employee);
    }
    getEmployees() {
        return this.employees;
    }
}