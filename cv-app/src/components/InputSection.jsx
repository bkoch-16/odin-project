import Input from "./Input";

export default function InputSection({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange,
  location,
  handleLocationChange,
  handleSubmit,
  schoolOne,
  handleSchoolOneNameChange,
  handleSchoolOneStudyChange,
  handleSchoolOneDateChange,
  schoolTwo,
  handleSchoolTwoNameChange,
  handleSchoolTwoStudyChange,
  handleSchoolTwoDateChange,
  schoolThree,
  handleSchoolThreeNameChange,
  handleSchoolThreeStudyChange,
  handleSchoolThreeDateChange,
  jobOne,
  handleJobOneCompanyChange,
  handleJobOneTitleChange,
  handleJobOneResponsibilityOneChange,
  handleJobOneResponsibilityTwoChange,
  handleJobOneResponsibilityThreeChange,
  handleJobOneDateChange,
  jobTwo,
  handleJobTwoCompanyChange,
  handleJobTwoTitleChange,
  handleJobTwoResponsibilityOneChange,
  handleJobTwoResponsibilityTwoChange,
  handleJobTwoResponsibilityThreeChange,
  handleJobTwoDateChange,
  jobThree,
  handleJobThreeCompanyChange,
  handleJobThreeTitleChange,
  handleJobThreeResponsibilityOneChange,
  handleJobThreeResponsibilityTwoChange,
  handleJobThreeResponsibilityThreeChange,
  handleJobThreeDateChange,
}) {
  return (
    <>
      <h2>General</h2>
      <Input title="Full Name" value={name} onChange={handleNameChange} />
      <br />
      <Input
        title="Email"
        value={email}
        onChange={handleEmailChange}
        type="email"
      />
      <br />
      <Input
        title="Phone"
        value={phone}
        onChange={handlePhoneChange}
        type="tel"
      />
      <br />
      <Input
        title="Location"
        value={location}
        onChange={handleLocationChange}
      />
      <br />
      <h2>Schools</h2>
      <h3>School One</h3>
      <Input
        title="Name"
        value={schoolOne.schoolName}
        onChange={handleSchoolOneNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolOne.studyName}
        onChange={handleSchoolOneStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolOne.studyDate}
        onChange={handleSchoolOneDateChange}
      />
      <br />
      <h3>School Two</h3>
      <Input
        title="Name"
        value={schoolTwo.schoolName}
        onChange={handleSchoolTwoNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolTwo.studyName}
        onChange={handleSchoolTwoStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolTwo.studyDate}
        onChange={handleSchoolTwoDateChange}
      />
      <br />
      <h3>School Three</h3>
      <Input
        title="Name"
        value={schoolThree.schoolName}
        onChange={handleSchoolThreeNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolThree.studyName}
        onChange={handleSchoolThreeStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolThree.studyDate}
        onChange={handleSchoolThreeDateChange}
      />
      <br />
      <h2>Jobs</h2>
      <h3>Job One</h3>
      <Input
        title="Company"
        value={jobOne.companyName}
        onChange={handleJobOneCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobOne.jobName}
        onChange={handleJobOneTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobOne.responsibilities[0]}
        onChange={handleJobOneResponsibilityOneChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobOne.responsibilities[1]}
        onChange={handleJobOneResponsibilityTwoChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobOne.responsibilities[2]}
        onChange={handleJobOneResponsibilityThreeChange}
      />
      <br />
      <Input
        title="Date"
        value={jobOne.date}
        onChange={handleJobOneDateChange}
      />
      <br />
      <h3>Job Two</h3>
      <Input
        title="Company"
        value={jobTwo.companyName}
        onChange={handleJobTwoCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobTwo.jobName}
        onChange={handleJobTwoTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobTwo.responsibilities[0]}
        onChange={handleJobTwoResponsibilityOneChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobTwo.responsibilities[1]}
        onChange={handleJobTwoResponsibilityTwoChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobTwo.responsibilities[2]}
        onChange={handleJobTwoResponsibilityThreeChange}
      />
      <br />
      <Input
        title="Date"
        value={jobTwo.date}
        onChange={handleJobTwoDateChange}
      />
      <br />
      <h3>Job Three</h3>
      <Input
        title="Company"
        value={jobThree.companyName}
        onChange={handleJobThreeCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobThree.jobName}
        onChange={handleJobThreeTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobThree.responsibilities[0]}
        onChange={handleJobThreeResponsibilityOneChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobThree.responsibilities[1]}
        onChange={handleJobThreeResponsibilityTwoChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobThree.responsibilities[2]}
        onChange={handleJobThreeResponsibilityThreeChange}
      />
      <br />
      <Input
        title="Date"
        value={jobThree.date}
        onChange={handleJobThreeDateChange}
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
