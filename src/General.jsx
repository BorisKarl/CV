import { useState } from "react";

let input_disabled = false;

export function GeneralInfo() {
  const initialValues = {
    name: "",
    email: "",
    phone: ""
  };

  const [generalInfo, setGeneralInfo] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const resetForm = (e) => {
    const button = document.getElementById("addGeneral");
    setGeneralInfo(initialValues);
    e.preventDefault();
    input_disabled = false;
    button.classList.remove("hide_button");
    button.classList.add("show_button");

  };

  const addInfo = (e) => {
    e.preventDefault();
    setGeneralInfo({
      name: generalInfo.name,
      email: generalInfo.email,
      phone: generalInfo.phone,
    });

    const button = document.getElementById("addGeneral");
    if (
      generalInfo.name !== "" &&
      generalInfo.phone != "" &&
      generalInfo.email !== ""
    ) {
      button.classList.remove("show_button");
      button.classList.add("hide_button");
      input_disabled = true;
    }
  };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <div id="puffer"></div>
          <h2>Contact Info</h2>
          <input
            value={generalInfo.name}
            onChange={handleInput}
            disabled={input_disabled}
            name="name"
            label="name"
            placeholder="Name"
            maxLength="20"
          ></input>
          <input
            value={generalInfo.email}
            onChange={handleInput}
            disabled={input_disabled}
            name="email"
            label="email"
            placeholder="Email"
            maxLength="20"
          ></input>
          <input
            value={generalInfo.phone}
            onChange={handleInput}
            disabled={input_disabled}
            name="phone"
            label="phone"
            placeholder="Phone"
            maxLength="20"
          ></input>
          <button id="addGeneral" onClick={addInfo}>
            ADD
          </button>
          <button onClick={resetForm}>RESET</button>
        </form>
        <div id="puffer"></div>
        <table className="generalInfoTable">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            <tr>
              <td>{generalInfo.name}</td>
              <td>{generalInfo.email}</td>
              <td>{generalInfo.phone}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
