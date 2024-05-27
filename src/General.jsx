import { useState } from "react";

export function GeneralInfo() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const [generalInfo, setGeneralInfo] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
    console.log(generalInfo);
  };

  const resetForm = (e) => {
    setGeneralInfo(initialValues);
    e.preventDefault();
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
      button.style.display = "none";
    }
  };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <h2>Contact Info</h2>
          <input
            value={generalInfo.name}
            onChange={handleInput}
            name="name"
            label="name"
            placeholder="Name"
            maxLength="20"
          ></input>
          <input
            value={generalInfo.email}
            onChange={handleInput}
            name="email"
            label="email"
            placeholder="Email"
            maxLength="20"
          ></input>
          <input
            value={generalInfo.phone}
            onChange={handleInput}
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

        <section className="generalInfoSection">
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
      </section>
    </>
  );
}
