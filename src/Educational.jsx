import { useState } from "react";

let input_disabled = false;


export function EducationalInfo() {
  const initialValues = {
    schoolName: "",
    studies: "",
    dateOfStudies: ""
  };

  const [educationalInfo, setEducationalInfo] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEducationalInfo({ ...educationalInfo, [name]: value });
    console.log(educationalInfo);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setEducationalInfo(initialValues);
    input_disabled = false;
  };
  
    const addInfo = (e) => {
      e.preventDefault();
      setEducationalInfo({
      schoolName:    educationalInfo.schoolName,
      studies:       educationalInfo.studies,
      dateOfStudies: educationalInfo.dateOfStudies
      });

      const button = document.getElementById("addEdu");
      if (
        educationalInfo.schoolName !== "" &&
        educationalInfo.studies != "" &&
        educationalInfo.dateOfStudies !== ""
      ) {
        button.style.display = "none";
        input_disabled = true;
      }
    };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <h2>Educational Info</h2>
          <input
            value={educationalInfo.schoolName}
            onChange={handleInput}
            disabled={input_disabled}
            name="schoolName"
            placeholder="Name of your school"
            maxLength="36"
          ></input>
          <input
            value={educationalInfo.studies}
            onChange={handleInput}
            disabled={input_disabled}
            name="studies"
            placeholder="Subject"
            maxLength="20"
          ></input>
          <input
            value={educationalInfo.dateOfStudies}
            onChange={handleInput}
            disabled={input_disabled}
            name="dateOfStudies"
            placeholder="Date"
            maxLength="15"
          ></input>
          <button id="addEdu" onClick={addInfo}>
            ADD
          </button>
          <button onClick={resetForm}>RESET</button>
        </form>
        <div id="puffer"></div>
        <table className="generalInfoTable">
          <tbody>
            <tr>
              <th>Name of School</th>
              <th>Title of studies</th>
              <th>Date of study</th>
            </tr>
            <tr>
              <td>{educationalInfo.schoolName}</td>
              <td>{educationalInfo.studies}</td>
              <td>{educationalInfo.dateOfStudies}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
