import { useState } from "react";
import NewClientForm from "../components/NewClientForm";

function ClientManagement() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main>
      <h1 className="page-title">Client Management</h1>
      <div className="page-navigation">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Create Client
        </button>
      </div>
      <div className="content">Hi there</div>
      {showForm && <NewClientForm setShowForm={setShowForm} />}
    </main>
  );
}

export default ClientManagement;
