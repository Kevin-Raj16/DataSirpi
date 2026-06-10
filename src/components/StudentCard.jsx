/**
 * Reusable Student Card Component
 */
function StudentCard({
  name,
  department,
  email,
  attendance
}) {
  return (
    <div className="card">

      <h2>{name}</h2>

      <p>
        Department:
        {department}
      </p>

      <p>
        Email:
        {email}
      </p>

      <p>
        Attendance:
        {attendance}
      </p>

    </div>
  );
}

export default StudentCard;
