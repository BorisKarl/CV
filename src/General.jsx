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
        <div className="sectionGrid">
          <form>
            <input
              value={generalInfo.name}
              onChange={handleInput}
              name="name"
              label="name"
              placeholder="name"
            ></input>
            <input
              value={generalInfo.email}
              onChange={handleInput}
              name="email"
              label="email"
              placeholder="email"
            ></input>
            <input
              value={generalInfo.phone}
              onChange={handleInput}
              name="phone"
              label="phone"
              placeholder="phone"
            ></input>
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
        </div>
        <button onClick={resetForm}>RESET</button>
      </>
    );
}
