import "./Reports.css";

function Reports() {
  return (
    <section className="reports">
      <div className="reports-container">
        <h2>Reports & Publications</h2>

        <div className="reports-grid">
          <div className="report-card">
            <h3>Annual Report 2024</h3>
            <button>Download PDF</button>
          </div>

          <div className="report-card">
            <h3>Annual Report 2025</h3>
            <button>Download PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reports;
