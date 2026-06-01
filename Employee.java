/**
 * Employee Management Example
 */
public class Employee {

    private int empId;
    private String empName;
    private double salary;

    public Employee(int empId, String empName, double salary) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }

    public void displayEmployee() {
        System.out.println("Employee ID : " + empId);
        System.out.println("Employee Name : " + empName);
        System.out.println("Salary : " + salary);
    }

    public static void main(String[] args) {

        Employee emp1 =
                new Employee(1001, "Kevin Raj", 45000);

        Employee emp2 =
                new Employee(1002, "Satya", 55000);

        emp1.displayEmployee();
        emp2.displayEmployee();
    }
}
