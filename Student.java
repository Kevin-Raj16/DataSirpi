/**
 * Student class demonstrates
 * Class, Object and Constructor concepts.
 */
public class Student {

    // Instance variables
    private int id;
    private String name;
    private String department;

    /**
     * Parameterized Constructor
     */
    public Student(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    /**
     * Display student details
     */
    public void displayStudent() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("--------------------");
    }

    public static void main(String[] args) {

        // Creating Objects
        Student s1 = new Student(101, "Kevin", "CSE");
        Student s2 = new Student(102, "Arun", "IT");

        s1.displayStudent();
        s2.displayStudent();
    }
}
