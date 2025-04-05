import { useState } from "react";

function App() {
  const optionSpec = ["Full Stack", "Frontend", "Backend"];

  const defaultForm = {
    fullName: "",
    userName: "",
    password: "",
    specializzation: "",
    anzianity: "",
    biograpy: ""
  };

  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (event) => {
    const newObj = {
      ...formData,
      [event.target.name]: event.target.value
    };

    setFormData(newObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.fullName.trim() && formData.userName.trim() && formData.password.trim() && formData.specializzation && formData.anzianity >= 0 && formData.biograpy){
      console.log(formData);
    } else {
      console.log("qualcosa non va nel form");
      
    }
    
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Iscriviti alla piattaforma</h1>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Specializzazione</label>
            <select
              className="form-select"
              name="specializzation"
              value={formData.specializzation}
              onChange={handleChange}
            >
              <option value="">Seleziona una specializzazione</option>
              {optionSpec.map((curElem, i) => (
                <option value={curElem} key={i}>
                  {curElem}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Anni di Esperienza</label>
            <input
              type="number"
              className="form-control"
              name="anzianity"
              value={formData.anzianity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Biografia</label>
            <textarea
              name="biograpy"
              className="form-control"
              rows="5"
              value={formData.biograpy}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Iscriviti
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
