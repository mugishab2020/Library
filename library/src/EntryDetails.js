function EntryDetails({ student }) {
  return (
    <div className="entry-details" key={student.id}>
      <p>
        <span className="entry-details__title">Ref Id:</span> {student.refId}
      </p>
      <p>
        <span className="entry-details__title">Reg No:</span>{" "}
        {student.regNumber}
      </p>
      <p>
        <span className="entry-details__title">First Name:</span>{" "}
        {student.firstName}
      </p>
      <p>
        <span className="entry-details__title">Last Name:</span>{" "}
        {student.lastName}
      </p>
      <p>
        <span className="entry-details__title">Gender:</span> {student.gender}
      </p>
      <p>
        <span className="entry-details__title">Department:</span>{" "}
        {student.department}
      </p>
      <p>
        <span className="entry-details__title">Level:</span> {student.level}
      </p>
    </div>
  );
}

export default EntryDetails;
