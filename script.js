/**
 * Stores all students
 */
let students = [];

/**
 * DOM References
 */
const studentName =
    document.getElementById("studentName");

const department =
    document.getElementById("department");

const email =
    document.getElementById("email");

const tableBody =
    document.getElementById("studentTableBody");

const studentCount =
    document.getElementById("studentCount");

const searchStudent =
    document.getElementById("searchStudent");

/**
 * Add Student
 */
function addStudent() {

    const name =
        studentName.value.trim();

    const dept =
        department.value.trim();

    const mail =
        email.value.trim();

    if (!name || !dept || !mail) {

        alert("Please fill all fields");

        return;
    }

    const student = {
        id: Date.now(),
        name,
        dept,
        mail
    };

    students.push(student);

    renderStudents(students);

    clearForm();
}

/**
 * Render Students
 */
function renderStudents(studentData) {

    tableBody.innerHTML = "";

    studentData.forEach(student => {

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.dept}</td>
            <td>${student.mail}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStudent(${student.id})"
                >
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });

    updateStudentCount();
}

/**
 * Delete Student
 */
function deleteStudent(id) {

    students =
        students.filter(
            student => student.id !== id
        );

    renderStudents(students);
}

window.deleteStudent =
    deleteStudent;

/**
 * Update Student Count
 */
function updateStudentCount() {

    studentCount.textContent =
        `Total Students: ${students.length}`;
}

/**
 * Clear Form
 */
function clearForm() {

    studentName.value = "";
    department.value = "";
    email.value = "";
}

/**
 * Search Student
 */
function searchStudents() {

    const searchValue =
        searchStudent.value
            .toLowerCase();

    const filteredStudents =
        students.filter(student =>
            student.name
                .toLowerCase()
                .includes(searchValue)
        );

    renderStudents(filteredStudents);
}

/**
 * Event Listeners
 */
document
    .getElementById("addStudentBtn")
    .addEventListener(
        "click",
        addStudent
    );

searchStudent
    .addEventListener(
        "input",
        searchStudents
    );
