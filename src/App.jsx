import { useState } from "react"

function App() {

  const optionSpec = ["Full Stack", "Frontend", "Backend"]

  const dafaulForm = {
    fullName: "",
    userName: "",
    password: "",
    specializzation: "",
    anzianity: "",
    biograpy: ""
  }

  const [formData, setFormData] = useState(dafaulForm)

  const handleChange = (event) => {
    const newObj = {
      ...formData,
      [event.target.name]: event.target.value
    }

    setFormData(newObj)
  }
    

  

  return (
    <>
      <div className="container">
        <h1 className="text-center">iscritivi alla piattaforma</h1>
        <form action="" className="form-control">
          <div className="mb-3">
            <label className="form-contro">Nome</label>
            <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={(event) => handleChange(event)} />
          </div>
          <div className="mb-3">
            <label className="form-contro">Username</label>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={(event) => handleChange(event)} />
          </div>
          <div className="mb-3">
            <label className="form-contro">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={(event) => handleChange(event)} />
          </div>
          <div className="mb-3">
            <select className="form-select" name="specializzation" value={formData.specializzation} onChange={handleChange}>
              <option value="">seleziona una specializzazione</option>
              {
                optionSpec.map((curElem, i) => <option value={curElem} key={i}>{curElem}</option>)
              }
            </select>
          </div>
          <div className="mb-3">
            <label className="form-contro">Anni di Esperienza</label>
            <input type="number" className="form-control" name="anzianity" value={formData.anzianity} onChange={(event) => handleChange(event)} />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-data">
              <textarea name="biograpy" className="form-data" rows="5" value={formData.biograpy} onChange={handleChange}></textarea>
            </label>
          </div>



          <button className="btn btn-primary" type="submite">iscrciviti</button>
        </form>
      </div>
    </>
  )
}

export default App
