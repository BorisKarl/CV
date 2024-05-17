import { useState } from "react";

export function PracticalInfo() {
  const initialValues = {
    companyName: "",
    position: "",
    responsibilities: "",
    date: ""
  };

  const [practicalInfo, setPracticalInfo] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPracticalInfo({ ...practicalInfo, [name]: value });
    console.log(practicalInfo);
  };

  const resetForm = () => {
    setPracticalInfo(initialValues);
    console.log(practicalInfo);
  };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <h2>Fill in your practical info here</h2>
          <input
            value={practicalInfo.companyName}
            onChange={handleInput}
            name="companyName"
            placeholder="Company Name"
            maxLength="20"
          ></input>
          <input
            value={practicalInfo.position}
            onChange={handleInput}
            name="position"
            placeholder="Position"
            maxLength="20"
          ></input>
          <input
            value={practicalInfo.responsibilities}
            onChange={handleInput}
            name="responsibilities"
            placeholder="Responsibilities"
            maxLength="40"
          ></input>
          <input
            value={practicalInfo.date}
            onChange={handleInput}
            name="date"
            placeholder="From when to when"
            maxLength="20"
          ></input>
          <button onClick={resetForm}>RESET</button>
        </form>
        <div className="sectionGrid">
          <section className="generalInfoSection">
            <table className="generalInfoTable">
              <tbody>
                <tr>
                  <th>Name of Company</th>
                  <th>Position</th>
                  <th>Responsibility</th>
                  <th>Date of employment</th>
                </tr>
                <tr>
                  <td>{practicalInfo.companyName}</td>
                  <td>{practicalInfo.position}</td>
                  <td>{practicalInfo.responsibilities}</td>
                  <td>{practicalInfo.date}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </>
  );
}
