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

  const resetForm = () => {
    setEducationalInfo(initialValues);
    console.log(educationalInfo);
  };

  return (
    <>
      <form>
        <input
          value={educationalInfo.schoolName}
          onChange={handleInput}
          name="schoolName"
          placeholder="schoolName"
        ></input>
        <input
          value={educationalInfo.studies}
          onChange={handleInput}
          name="studies"
          placeholder="studies"
        ></input>
        <input
          value={educationalInfo.dateOfStudies}
          onChange={handleInput}
          name="dateOfStudies"
          placeholder="dateOfStudies"
        ></input>
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
      <button onClick={resetForm}>RESET</button>
    </>
  );
}
