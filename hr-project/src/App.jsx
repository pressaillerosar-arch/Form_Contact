import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

const initialEmployees = [
  { id: 1, name: "Sophie Moreau", position: "Développeuse Frontend", department: "Tech", active: true },
  { id: 2, name: "Thomas Leroy", position: "Chef de Projet", department: "Operations", active: true },
  { id: 3, name: "Amina Diallo", position: "Designer UX", department: "Design", active: true },
  { id: 4, name: "Lucas Bernard", position: "Analyste Data", department: "Finance", active: false },
  { id: 5, name: "Chloé Petit", position: "RH Manager", department: "RH", active: true },
];

export default function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAdd = (newEmployee) => {
    setEmployees((prev) => [newEmployee, ...prev]);
  };

  const activeCount = employees.filter((e) => e.active).length;

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="navbar-title">PeopleHub</span>
          <span className="navbar-subtitle">Gestion des Ressources Humaines</span>
        </div>
        <div className="navbar-stats">
          <div className="stat">
            <div className="stat-value stat-total">{employees.length}</div>
            <div className="stat-label">Total</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-value stat-active">{activeCount}</div>
            <div className="stat-label">Actifs</div>
          </div>
        </div>
      </header>

      {/* Layout */}
      <main className="main-layout">
        <aside className="sidebar">
          <EmployeeForm onAdd={handleAdd} />
        </aside>
        <section className="content">
          <EmployeeList employees={employees} />
        </section>
      </main>
    </div>
  );
}
