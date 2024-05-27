import { useState } from "react";

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
  };

  return (
    <>
      <section className="infoBlock">
        <form className="inputform">
          <h2>Educational Info</h2>
          <input
            value={educationalInfo.schoolName}
            onChange={handleInput}
            name="schoolName"
            placeholder="Name of your school"
            maxLength="36"
          ></input>
          <input
            value={educationalInfo.studies}
            onChange={handleInput}
            name="studies"
            placeholder="Subject"
            maxLength="20"
          ></input>
          <input
            value={educationalInfo.dateOfStudies}
            onChange={handleInput}
            name="dateOfStudies"
            placeholder="Date"
            maxLength="15"
          ></input>
          <button onClick={resetForm}>RESET</button>
        </form>
        <div className="sectionGrid">
          <section className="generalInfoSection">
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
        </div>
      </section>
    </>
  );
}
