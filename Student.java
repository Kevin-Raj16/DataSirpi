/**
 * Student class demonstrating different types of methods.
 */
class Student {

    private int studentId;
    private String studentName;
    private String course;
    private int marks;

    /**
     * Constructor
     */
    Student(int studentId, String studentName, String course, int marks) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.course = course;
        this.marks = marks;
    }

    /**
     * Method with no parameters and no return value
     */
    void displayStudent() {

        System.out.println("----------------------------");
        System.out.println("Student ID : " + studentId);
        System.out.println("Name       : " + studentName);
        System.out.println("Course     : " + course);
        System.out.println("Marks      : " + marks);

    }

    /**
     * Method with parameters
     */
    void updateMarks(int newMarks) {

        marks = newMarks;

    }

    /**
     * Method with return value
     */
    String calculateGrade() {

        if (marks >= 90)
            return "A";

        if (marks >= 75)
            return "B";

        if (marks >= 60)
            return "C";

        return "D";

    }

    /**
     * Method with parameters and return value
     */
    boolean isEligibleForPlacement(int minimumMarks) {

        return marks >= minimumMarks;

    }

}
