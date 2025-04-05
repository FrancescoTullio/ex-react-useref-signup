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

  const validationObj = {
    userVal: false,
    passVal: false,
    bioVal: false
  }

  const specialChars = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "[", "]", "{", "}", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/",
    "`", "~", "£", `"`
  ];

  const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  const [formData, setFormData] = useState(defaultForm);
  const [val, setVal] = useState(validationObj)




  const handleChange = (event) => {
    const newObj = {
      ...formData,
      [event.target.name]: event.target.value
    };




    if (event.target.name === "userName") {

      if (newObj.userName.trim().length > 5) {
        const iter = newObj.userName.trim()
        const newVal = {
              ...val,
              userVal: false
            }
            let count = 0
        for (const char of iter) {
          if (specialChars.includes(char) || char === " ") {
            count++
          }
        }
        if(count === 0) {
          newVal.userVal = true
        }
        setVal(newVal)
      } else {


        const newVal = {
          ...val,
          userVal: false
        }
        setVal(newVal)
      }
    }

    if (event.target.name === "password") {
      if (newObj.password.trim().length > 8) {
        const iter = newObj.password
        const newVal = {
          ...val,
          passVal: false
        }
        let lettere = 0
        let simboli = 0
        let numeri = 0
        for (const char of iter) {


          if (digits.includes(char)) {
            numeri++
          }
          if (letters.includes(char)) {
            lettere++
          }
          if (specialChars.includes(char)) {
            simboli++
          }
        }

        if (lettere > 0 && simboli > 0 && numeri > 0) {
          newVal.passVal = true
        }

        setVal(newVal)

      } else {
        const newVal = {
          ...val,
          passVal: false
        }
        setVal(newVal)
      }
    }

    if (event.target.name === "biograpy"){
      const newVal = {
        ...val,
        bioVal: false
      }
      if(newObj.biograpy.trim().length >= 100 & newObj.biograpy.trim().length <= 1000){
        newVal.bioVal = true
      }
      setVal(newVal)
    }

    setFormData(newObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.fullName.trim() && formData.userName.trim() && formData.password.trim() && formData.specializzation && formData.anzianity >= 0 && formData.biograpy) {
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
            {
              (!val.userVal && formData.userName) && <p className="text-danger">User non conforme</p>
            }
            {
              val.userVal && <p className="text-success">user ok </p>
            }
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
            {
              (!val.passVal && formData.password) && <p className="text-danger">Password non conforme</p>
            }
            {
              val.passVal && <p className="text-success">Pass ok</p>
            }
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
            {
              (!val.bioVal && formData.biograpy) && <p className="text-danger">Biografia non conforme</p>
            }
            {
              val.bioVal && <p className="text-success">bio ok</p>
            }
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
