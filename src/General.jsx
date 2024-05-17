import { useState } from "react";

export function GeneralInfo() {
    const initialValues = {
      name: "",
      email: "",
      phone: ""
    };

    const [generalInfo, setGeneralInfo] = useState(initialValues);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setGeneralInfo({...generalInfo, [name]: value})
        console.log(generalInfo);
    }

    const resetForm = () => {
        setGeneralInfo( { 
        name: "",
        email: "",
        phone: ""
    });
    console.log(generalInfo);
    }

    return (
      <>
        <section className="infoBlock">
          <form className="inputform">
            <h2>Fill in your contact info here</h2>
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
