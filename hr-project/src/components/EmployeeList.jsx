import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

export default function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <div className="list-header">
        <h2 className="list-title">Employés</h2>
        <span className="list-count">
          {employees.length} {employees.length <= 1 ? "membre" : "membres"}
        </span>
      </div>

      {employees.length === 0 ? (
        <div className="list-empty">Aucun employé pour l'instant.</div>
      ) : (
        <div className="list-grid">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
}
