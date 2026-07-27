/**
 * Main class
 */
public class StudentManagement {

    public static void main(String[] args) {

        Student student1 =
                new Student(
                        101,
                        "Kevin Raj",
                        "Computer Science",
                        82
                );

        Student student2 =
                new Student(
                        102,
                        "Arun",
                        "Information Technology",
                        67
                );

        student1.displayStudent();

        System.out.println(
                "Grade : " +
                student1.calculateGrade()
        );

        System.out.println(
                "Placement Eligible : " +
                student1.isEligibleForPlacement(70)
        );

        System.out.println();

        student2.displayStudent();

        System.out.println(
                "Grade : " +
                student2.calculateGrade()
        );

        System.out.println(
                "Placement Eligible : " +
                student2.isEligibleForPlacement(70)
        );

        System.out.println("\nUpdating Student 2 Marks...\n");

        student2.updateMarks(92);

        student2.displayStudent();

        System.out.println(
                "Grade : " +
                student2.calculateGrade()
        );

        System.out.println(
                "Placement Eligible : " +
                student2.isEligibleForPlacement(70)
        );

    }

}
