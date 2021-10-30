abstract class Department {
  static fiscalYear = 2021;
  protected employees: string[] = [];

  constructor(protected readonly id: string, protected name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  printFiscalYear() {
    console.log('Year: ' + Department.fiscalYear);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log(`${this.name} Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }

    AccountingDepartment.instance = new AccountingDepartment('d2', []);
    return AccountingDepartment.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee = Department.createEmployee('Max');
console.log(employee, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);
it.describe();
it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();
it.printFiscalYear();

const accounting = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Everything is working...';
accounting.printReports();
console.log(accounting.mostRecentReport);

const newAccounting = AccountingDepartment.getInstance();
console.log(accounting === newAccounting);
