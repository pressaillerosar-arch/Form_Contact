import { useState } from "react";
import "./EmployeeForm.css";

const DEPARTMENTS = [
  "Tech", "Design", "Finance", "RH",
  "Operations", "Marketing", "Juridique",
];

const emptyForm = { name: "", position: "", department: "" };

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name       = "Le nom est requis.";
    if (!form.position.trim()) e.position   = "Le poste est requis.";
    if (!form.department)      e.department = "Le département est requis.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onAdd({ ...form, id: Date.now(), active: true });
    setForm(emptyForm);
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2 className="form-title">Ajouter un employé</h2>
        <p className="form-subtitle">
          Le profil apparaîtra immédiatement dans la liste.
        </p>
      </div>

      {success && (
        <div className="form-success">
          <span>✓</span> Employé ajouté avec succès !
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="form-body">
        {/* Name */}
        <div className="form-field">
          <label className="form-label" htmlFor="name">Nom complet</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="ex : Marie Dupont"
            className={`form-input ${errors.name ? "form-input--error" : ""}`}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        {/* Position */}
        <div className="form-field">
          <label className="form-label" htmlFor="position">Poste</label>
          <input
            id="position"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="ex : Développeur Backend"
            className={`form-input ${errors.position ? "form-input--error" : ""}`}
          />
          {errors.position && <span className="form-error">{errors.position}</span>}
        </div>

        {/* Department */}
        <div className="form-field">
          <label className="form-label" htmlFor="department">Département</label>
          <select
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
            className={`form-input form-select ${errors.department ? "form-input--error" : ""}`}
          >
            <option value="">Sélectionner un département</option>
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.department && <span className="form-error">{errors.department}</span>}
        </div>

        <button type="submit" className="form-submit">
          + Ajouter l'employé
        </button>
      </form>
    </div>
  );
}
