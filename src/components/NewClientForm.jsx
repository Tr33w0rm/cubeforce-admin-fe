import axios from "axios";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

function NewClientForm({ setShowForm }) {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    firstname: "",
    lastname: "",
    creator: "chris_vogels_internal_id",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // const res = await axios.post("http://localhost:4000/api/v1/company", formData);
    // if (res.status === '201') {}
    setFormData({
      company: "",
      email: "",
      firstname: "",
      lastname: "",
      creator: "chris_vogels_internal_id",
    });
    setShowForm(false);
  }

  return (
    <div className="panel">
      <div
        className="panel-close"
        onClick={() => {
          setShowForm(false);
        }}
      >
        <RiCloseCircleFill />
      </div>
      <form onSubmit={handleSubmit}>
        <header className="form-header">
          <p className="form-title">Create new client</p>
        </header>
        <div className="form-input">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Contact Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="firstname">Contact Firstname</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="lastname">Contact Lastname</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewClientForm;
