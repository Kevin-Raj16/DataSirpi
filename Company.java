/**
 * Main Class
 */

public class Company {

    public static void main(String[] args) {

        Employee emp1 =
                new Employee(
                        101,
                        "Kevin Raj",
                        "React",
                        45000
                );

        Employee emp2 =
                new Employee(
                        102,
                        "Arun",
                        "Java",
                        50000
                );

        Employee emp3 =
                new Employee(
                        103,
                        "Karthik",
                        "Testing",
                        42000
                );

        emp1.displayEmployee();

        emp2.displayEmployee();

        emp3.displayEmployee();

        Employee.displayCompanyDetails();

    }

}
