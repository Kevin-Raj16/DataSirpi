/**
 * Employee Management System
 *
 * Concepts Covered:
 * - Instance Variables
 * - Static Variables
 * - Static Methods
 * - Static Block
 * - Constructor
 * - Objects
 */

class Employee {

    // ==========================
    // Static Variable
    // Shared among all employees
    // ==========================
    static String companyName;

    static int employeeCount;

    // ==========================
    // Instance Variables
    // Unique for every employee
    // ==========================

    int employeeId;
    String employeeName;
    String department;
    double salary;

    // ==========================
    // Static Block
    // Executes only once
    // ==========================

    static {

        companyName = "DataSirpi Technologies";

        employeeCount = 0;

        System.out.println("=================================");
        System.out.println("Company Initialized");
        System.out.println("=================================");

    }

    // ==========================
    // Constructor
    // ==========================

    Employee(
            int employeeId,
            String employeeName,
            String department,
            double salary
    ){

        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
        this.salary = salary;

        employeeCount++;

    }

    // ==========================
    // Instance Method
    // ==========================

    void displayEmployee(){

        System.out.println("--------------------------");

        System.out.println("Employee ID : "
                + employeeId);

        System.out.println("Employee Name : "
                + employeeName);

        System.out.println("Department : "
                + department);

        System.out.println("Salary : ₹"
                + salary);

        System.out.println("Company : "
                + companyName);

    }

    // ==========================
    // Static Method
    // ==========================

    static void displayCompanyDetails(){

        System.out.println();

        System.out.println("========= COMPANY =========");

        System.out.println("Company : "
                + companyName);

        System.out.println("Total Employees : "
                + employeeCount);

        System.out.println("===========================");

    }

}
