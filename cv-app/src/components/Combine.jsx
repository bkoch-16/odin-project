import { useState } from "react";
import "../styles/combine.css";
import Output from "./Output";
import InputSection from "./InputSection";

export default function Combine() {
  const [editToggle, setEditToggle] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const [schoolOne, setSchoolOne] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [schoolTwo, setSchoolTwo] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [schoolThree, setSchoolThree] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [jobOne, setJobOne] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  const [jobTwo, setJobTwo] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  const [jobThree, setJobThree] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleSchoolOneNameChange(e) {
    setSchoolOne({ ...schoolOne, schoolName: e.target.value });
  }

  function handleSchoolOneStudyChange(e) {
    setSchoolOne({ ...schoolOne, studyName: e.target.value });
  }

  function handleSchoolOneDateChange(e) {
    setSchoolOne({ ...schoolOne, studyDate: e.target.value });
  }

  function handleSchoolTwoNameChange(e) {
    setSchoolTwo({ ...schoolTwo, schoolName: e.target.value });
  }

  function handleSchoolTwoStudyChange(e) {
    setSchoolTwo({ ...schoolTwo, studyName: e.target.value });
  }

  function handleSchoolTwoDateChange(e) {
    setSchoolTwo({ ...schoolTwo, studyDate: e.target.value });
  }

  function handleSchoolThreeNameChange(e) {
    setSchoolThree({ ...schoolThree, schoolName: e.target.value });
  }

  function handleSchoolThreeStudyChange(e) {
    setSchoolThree({ ...schoolThree, studyName: e.target.value });
  }

  function handleSchoolThreeDateChange(e) {
    setSchoolThree({ ...schoolThree, studyDate: e.target.value });
  }

  function handleJobOneCompanyChange(e) {
    setJobOne({ ...jobOne, companyName: e.target.value });
  }

  function handleJobOneTitleChange(e) {
    setJobOne({ ...jobOne, jobName: e.target.value });
  }

  function handleJobOneResponsibilityOneChange(e) {
    const newResp = [...jobOne.responsibilities];
    newResp[0] = e.target.value;
    setJobOne({
      ...jobOne,
      responsibilities: newResp,
    });
  }

  function handleJobOneResponsibilityTwoChange(e) {
    const newResp = [...jobOne.responsibilities];
    newResp[1] = e.target.value;
    setJobOne({
      ...jobOne,
      responsibilities: newResp,
    });
  }

  function handleJobOneResponsibilityThreeChange(e) {
    const newResp = [...jobOne.responsibilities];
    newResp[2] = e.target.value;
    setJobOne({
      ...jobOne,
      responsibilities: newResp,
    });
  }

  function handleJobOneDateChange(e) {
    setJobOne({ ...jobOne, date: e.target.value });
  }

  function handleJobTwoCompanyChange(e) {
    setJobTwo({ ...jobTwo, companyName: e.target.value });
  }

  function handleJobTwoTitleChange(e) {
    setJobTwo({ ...jobTwo, jobName: e.target.value });
  }

  function handleJobTwoResponsibilityOneChange(e) {
    const newResp = [...jobTwo.responsibilities];
    newResp[0] = e.target.value;
    setJobTwo({
      ...jobTwo,
      responsibilities: newResp,
    });
  }

  function handleJobTwoResponsibilityTwoChange(e) {
    const newResp = [...jobTwo.responsibilities];
    newResp[1] = e.target.value;
    setJobTwo({
      ...jobTwo,
      responsibilities: newResp,
    });
  }

  function handleJobTwoResponsibilityThreeChange(e) {
    const newResp = [...jobTwo.responsibilities];
    newResp[2] = e.target.value;
    setJobTwo({
      ...jobTwo,
      responsibilities: newResp,
    });
  }

  function handleJobTwoDateChange(e) {
    setJobTwo({ ...jobTwo, date: e.target.value });
  }

  function handleJobThreeCompanyChange(e) {
    setJobThree({ ...jobThree, companyName: e.target.value });
  }

  function handleJobThreeTitleChange(e) {
    setJobThree({ ...jobThree, jobName: e.target.value });
  }

  function handleJobThreeResponsibilityOneChange(e) {
    const newResp = [...jobThree.responsibilities];
    newResp[0] = e.target.value;
    setJobThree({
      ...jobThree,
      responsibilities: newResp,
    });
  }

  function handleJobThreeResponsibilityTwoChange(e) {
    const newResp = [...jobThree.responsibilities];
    newResp[1] = e.target.value;
    setJobThree({
      ...jobThree,
      responsibilities: newResp,
    });
  }

  function handleJobThreeResponsibilityThreeChange(e) {
    const newResp = [...jobThree.responsibilities];
    newResp[2] = e.target.value;
    setJobThree({
      ...jobThree,
      responsibilities: newResp,
    });
  }

  function handleJobThreeDateChange(e) {
    setJobThree({ ...jobThree, date: e.target.value });
  }

  const handleSubmit = () => {
    setEditToggle(false);
  };

  const handleEdit = () => {
    setEditToggle(true);
  };

  if (editToggle === false) {
    return (
      <Output
        editToggle={editToggle}
        name={name}
        email={email}
        phone={phone}
        location={location}
        handleEdit={handleEdit}
        schoolOne={schoolOne}
        schoolTwo={schoolTwo}
        schoolThree={schoolThree}
        jobOne={jobOne}
        jobTwo={jobTwo}
        jobThree={jobThree}
      />
    );
  }
  return (
    <InputSection
      name={name}
      handleNameChange={handleNameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      phone={phone}
      handlePhoneChange={handlePhoneChange}
      location={location}
      handleLocationChange={handleLocationChange}
      handleSubmit={handleSubmit}
      schoolOne={schoolOne}
      handleSchoolOneNameChange={handleSchoolOneNameChange}
      handleSchoolOneStudyChange={handleSchoolOneStudyChange}
      handleSchoolOneDateChange={handleSchoolOneDateChange}
      schoolTwo={schoolTwo}
      handleSchoolTwoNameChange={handleSchoolTwoNameChange}
      handleSchoolTwoStudyChange={handleSchoolTwoStudyChange}
      handleSchoolTwoDateChange={handleSchoolTwoDateChange}
      schoolThree={schoolThree}
      handleSchoolThreeNameChange={handleSchoolThreeNameChange}
      handleSchoolThreeStudyChange={handleSchoolThreeStudyChange}
      handleSchoolThreeDateChange={handleSchoolThreeDateChange}
      jobOne={jobOne}
      handleJobOneCompanyChange={handleJobOneCompanyChange}
      handleJobOneTitleChange={handleJobOneTitleChange}
      handleJobOneResponsibilityOneChange={handleJobOneResponsibilityOneChange}
      handleJobOneResponsibilityTwoChange={handleJobOneResponsibilityTwoChange}
      handleJobOneResponsibilityThreeChange={
        handleJobOneResponsibilityThreeChange
      }
      handleJobOneDateChange={handleJobOneDateChange}
      jobTwo={jobTwo}
      handleJobTwoCompanyChange={handleJobTwoCompanyChange}
      handleJobTwoTitleChange={handleJobTwoTitleChange}
      handleJobTwoResponsibilityOneChange={handleJobTwoResponsibilityOneChange}
      handleJobTwoResponsibilityTwoChange={handleJobTwoResponsibilityTwoChange}
      handleJobTwoResponsibilityThreeChange={
        handleJobTwoResponsibilityThreeChange
      }
      handleJobTwoDateChange={handleJobTwoDateChange}
      jobThree={jobThree}
      handleJobThreeCompanyChange={handleJobThreeCompanyChange}
      handleJobThreeTitleChange={handleJobThreeTitleChange}
      handleJobThreeResponsibilityOneChange={
        handleJobThreeResponsibilityOneChange
      }
      handleJobThreeResponsibilityTwoChange={
        handleJobThreeResponsibilityTwoChange
      }
      handleJobThreeResponsibilityThreeChange={
        handleJobThreeResponsibilityThreeChange
      }
      handleJobThreeDateChange={handleJobThreeDateChange}
      j
    />
  );
}
