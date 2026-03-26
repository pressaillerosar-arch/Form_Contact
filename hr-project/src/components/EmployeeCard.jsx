import "./EmployeeCard.css";

const DEPT_COLORS = {
  Tech:       { bg: "#e0f2fe", text: "#0369a1", dot: "#38bdf8" },
  Operations: { bg: "#fef9c3", text: "#854d0e", dot: "#fbbf24" },
  Design:     { bg: "#fce7f3", text: "#9d174d", dot: "#f472b6" },
  Finance:    { bg: "#d1fae5", text: "#065f46", dot: "#34d399" },
  RH:         { bg: "#ede9fe", text: "#5b21b6", dot: "#a78bfa" },
  Marketing:  { bg: "#ffedd5", text: "#9a3412", dot: "#fb923c" },
  Juridique:  { bg: "#f0fdf4", text: "#166534", dot: "#4ade80" },
};

const AVATAR_COLORS = [
  "#6366f1", "#ec4899", "#14b8a6", "#f59e0b",
  "#8b5cf6", "#10b981", "#3b82f6", "#ef4444",
];

function getDeptStyle(dept) {
  return DEPT_COLORS[dept] || { bg: "#f1f5f9", text: "#475569", dot: "#94a3b8" };
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export default function EmployeeCard({ employee }) {
  const { name, position, department, active } = employee;
  const dept = getDeptStyle(department);
  const avatarBg = getAvatarColor(name);

  return (
    <div className="employee-card">
      <div className="card-header">
        <div className="avatar" style={{ background: avatarBg }}>
          {getInitials(name)}
        </div>
        <div className="card-info">
          <div className="card-name">{name}</div>
          <div className="card-position">{position}</div>
        </div>
      </div>

      <div className="card-footer">
        <span
          className="badge badge-dept"
          style={{ background: dept.bg, color: dept.text }}
        >
          <span className="badge-dot" style={{ background: dept.dot }} />
          {department}
        </span>

        <span className={`badge badge-status ${active ? "badge-active" : "badge-inactive"}`}>
          <span className="badge-dot" />
          {active ? "Actif" : "Inactif"}
        </span>
      </div>
    </div>
  );
}
