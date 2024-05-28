import { useState } from "react";

let input_disabled = false;

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
  };

  const resetPractical = (e) => {
    e.preventDefault();
    setPracticalInfo(initialValues);
    const button = document.getElementById("addPractical");
    button.classList.remove("hide_button");
    button.classList.add("show_button");
  };

    const addInfo = (e) => {
      e.preventDefault();
      setPracticalInfo({
        companyName: practicalInfo.companyName,
        position: practicalInfo.position,
        responsibilities: practicalInfo.responsibilities,
        date: practicalInfo.date,
      });

      const button = document.getElementById("addPractical");
      if (
          practicalInfo.companyName !== "" &&
          practicalInfo.position != "" &&
          practicalInfo.responsibilities !== "" &&
          practicalInfo.date !== ""
      ) {
         button.classList.remove("show_button");
         button.classList.add("hide_button");
      }
    };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <h2>Practical Info</h2>
          <input
            value={practicalInfo.companyName}
            onChange={handleInput}
            disabled={input_disabled}
            name="companyName"
            placeholder="Company Name"
            maxLength="20"
          ></input>
          <input
            value={practicalInfo.position}
            onChange={handleInput}
            disabled={input_disabled}
            name="position"
            placeholder="Position"
            maxLength="20"
          ></input>
          <input
            value={practicalInfo.responsibilities}
            onChange={handleInput}
            disabled={input_disabled}
            name="responsibilities"
            placeholder="Responsibilities"
            maxLength="40"
          ></input>
          <input
            value={practicalInfo.date}
            onChange={handleInput}
            disabled={input_disabled}
            name="date"
            placeholder="From when to when"
            maxLength="20"
          ></input>
          <button id="addPractical" onClick={addInfo}>
            ADD
          </button>
          <button onClick={resetPractical}>RESET</button>
        </form>
        <div id="puffer"></div>
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
    </>
  );
}
