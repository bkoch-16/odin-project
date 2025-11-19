export default function Output({
  editToggle,
  name,
  email,
  phone,
  location,
  handleEdit,
  schoolOne,
  schoolTwo,
  schoolThree,
  jobOne,
  jobTwo,
  jobThree,
}) {
  if (!editToggle) {
    return (
      <>
        {name && (
          <>
            <h4>{name}</h4>
          </>
        )}
        {email && (
          <>
            <h6>Email: </h6>
            <span>{email}</span>
            <br />
          </>
        )}
        {phone && (
          <>
            <h6>Phone: </h6>
            <span>{phone}</span>
            <br />
          </>
        )}
        {location && (
          <>
            <h6>Location: </h6>
            <span>{location}</span>
            <br />
          </>
        )}

        {(schoolOne.schoolName ||
          schoolOne.studyName ||
          schoolOne.studyDate) && (
          <>
            <hr />
            <h5>Schools</h5>
          </>
        )}
        {schoolOne.schoolName && (
          <>
            <h6>School: </h6>
            <span>{schoolOne.schoolName}</span>
            <br />
          </>
        )}

        {schoolOne.studyName && (
          <>
            <h6>Study: </h6>
            <span>{schoolOne.studyName}</span>
            <br />
          </>
        )}

        {schoolOne.studyDate && (
          <>
            <h6>Dates: </h6>
            <span>{schoolOne.studyDate}</span>
            <br />
          </>
        )}
        {(schoolTwo.schoolName ||
          schoolTwo.studyName ||
          schoolTwo.studyDate) && (
          <>
            <br />
          </>
        )}
        {schoolTwo.schoolName && (
          <>
            <h6>School: </h6>
            <span>{schoolTwo.schoolName}</span>
            <br />
          </>
        )}

        {schoolTwo.studyName && (
          <>
            <h6>Study: </h6>
            <span>{schoolTwo.studyName}</span>
            <br />
          </>
        )}

        {schoolTwo.studyDate && (
          <>
            <h6>Dates: </h6>
            <span>{schoolTwo.studyDate}</span>
            <br />
          </>
        )}
        {(schoolThree.schoolName ||
          schoolThree.studyName ||
          schoolThree.studyDate) && (
          <>
            <br />
          </>
        )}
        {schoolThree.schoolName && (
          <>
            <h6>School: </h6>
            <span>{schoolThree.schoolName}</span>
            <br />
          </>
        )}

        {schoolThree.studyName && (
          <>
            <h6>Study: </h6>
            <span>{schoolThree.studyName}</span>
            <br />
          </>
        )}

        {schoolThree.studyDate && (
          <>
            <h6>Dates: </h6>
            <span>{schoolThree.studyDate}</span>
            <br />
          </>
        )}

        {(jobOne.companyName ||
          jobOne.jobName ||
          jobOne.responsibilities[0] ||
          jobOne.responsibilities[1] ||
          jobOne.responsibilities[2] ||
          jobOne.date) && (
          <>
            <hr />
            <h5>Work Experience</h5>
          </>
        )}
        {jobOne.companyName && (
          <>
            <h6>Company: </h6>
            <span>{jobOne.companyName}</span>
            <br />
          </>
        )}

        {jobOne.jobName && (
          <>
            <h6>Job Title: </h6>
            <span>{jobOne.jobName}</span>
            <br />
          </>
        )}

        {jobOne.responsibilities[0] && (
          <>
            <h6>Responsibilities:</h6>
            <br />
            <ul>
              <li>{jobOne.responsibilities[0]}</li>
              {jobOne.responsibilities[1] && (
                <li>{jobOne.responsibilities[1]}</li>
              )}
              {jobOne.responsibilities[2] && (
                <li>{jobOne.responsibilities[2]}</li>
              )}
            </ul>
          </>
        )}

        {jobOne.date && (
          <>
            <h6>Dates: </h6>
            <span>{jobOne.date}</span>
            <br />
          </>
        )}

        {(jobTwo.companyName ||
          jobTwo.jobName ||
          jobTwo.responsibilities[0] ||
          jobTwo.responsibilities[1] ||
          jobTwo.responsibilities[2] ||
          jobTwo.date) && (
          <>
            <br />
          </>
        )}
        {jobTwo.companyName && (
          <>
            <h6>Company: </h6>
            <span>{jobTwo.companyName}</span>
            <br />
          </>
        )}

        {jobTwo.jobName && (
          <>
            <h6>Job Title: </h6>
            <span>{jobTwo.jobName}</span>
            <br />
          </>
        )}

        {jobTwo.responsibilities[0] && (
          <>
            <h6>Responsibilities:</h6>
            <br />
            <ul>
              <li>{jobTwo.responsibilities[0]}</li>
              {jobTwo.responsibilities[1] && (
                <li>{jobTwo.responsibilities[1]}</li>
              )}
              {jobTwo.responsibilities[2] && (
                <li>{jobTwo.responsibilities[2]}</li>
              )}
            </ul>
          </>
        )}

        {jobTwo.date && (
          <>
            <h6>Dates: </h6>
            <span>{jobTwo.date}</span>
            <br />
          </>
        )}

        {(jobThree.companyName ||
          jobThree.jobName ||
          jobThree.responsibilities[0] ||
          jobThree.responsibilities[1] ||
          jobThree.responsibilities[2] ||
          jobThree.date) && (
          <>
            <br />
          </>
        )}
        {jobThree.companyName && (
          <>
            <h6>Company: </h6>
            <span>{jobThree.companyName}</span>
            <br />
          </>
        )}

        {jobThree.jobName && (
          <>
            <h6>Job Title: </h6>
            <span>{jobThree.jobName}</span>
            <br />
          </>
        )}

        {jobThree.responsibilities[0] && (
          <>
            <h6>Responsibilities:</h6>
            <br />
            <ul>
              <li>{jobThree.responsibilities[0]}</li>
              {jobThree.responsibilities[1] && (
                <li>{jobThree.responsibilities[1]}</li>
              )}
              {jobThree.responsibilities[2] && (
                <li>{jobThree.responsibilities[2]}</li>
              )}
            </ul>
          </>
        )}

        {jobThree.date && (
          <>
            <h6>Dates: </h6>
            <span>{jobThree.date}</span>
            <br />
            <hr />
          </>
        )}

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}
