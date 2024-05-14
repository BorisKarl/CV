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
      <form>
        <input
          value={practicalInfo.companyName}
          onChange={handleInput}
          name="companyName"
          placeholder="companyName"
        ></input>
        <input
          value={practicalInfo.position}
          onChange={handleInput}
          name="position"
          placeholder="position"
        ></input>
        <input
          value={practicalInfo.responsibilities}
          onChange={handleInput}
          name="responsibilities"
          placeholder="responsibilities"
        ></input>
        <input
          value={practicalInfo.date}
          onChange={handleInput}
          name="date"
          placeholder="date"
        ></input>
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
      <button onClick={resetForm}>RESET</button>
    </>
  );
}
