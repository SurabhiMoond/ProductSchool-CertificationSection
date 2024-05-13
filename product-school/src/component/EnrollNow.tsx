import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const EnrollNow = () => {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClick) {
      setIsClick(false);
    }
  }, [isClick]);

  const handleEnroll = () => {
    navigate('/CourseList'); // Redirect to the courseList page
  };
  return (
    <div>
      <div className="enrollNowDiv">
        <div
          className="enrollNowDivHead"
          style={{ textAlign: "center", height: "13rem", color: "#07182c" }}
        >
          <h1>
            We help you get your first Product <br /> Management job and hit the{" "}
            <br /> ground running. Here's how:
          </h1>
        </div>
        <div
          className="enrollNowDivMain"
          style={{
            display: "flex",
            gap: "4rem",
            marginLeft: "2rem",
            alignItems: "justify",
            justifyContent: "center",
            color: "#07182c",
          }}
        >
          {/* div----------------1 */}
          <div className="enrollNowDivMainImg1" style={{ width: "26%" }}>
            <img
              src="https://images.ctfassets.net/6nwv0fapso8r/1mpjvtIsjXyCqzNwR9NXKg/011488f9cdb20a60836f66f72010f0e0/PMC_Recognized-Instructors_2x.svg"
              alt=""
            />
            <h3>Top Silicon Valley instructors</h3>
            <p>
              You’ll learn directly from proven Product Leaders from top Silicon
              Valley tech companies like Google, Meta, and Amazon leveraging
              their real world experiences, frameworks, and approaches to help
              you excel.{" "}
            </p>
          </div>
          {/* div------------2 */}
          <div className="enrollNowDivMainImg2" style={{ width: "26%" }}>
            <img
              src="https://images.ctfassets.net/6nwv0fapso8r/49GabAwrugleGjxPTU4FHw/a4f28bcc5cf874f44c3583d1a0232cfd/PMC_One-to-one_2x.svg"
              alt=""
            />
            <h3>More instructor time tailored to you</h3>
            <p>
              Our live online classes are strictly limited to a small number of
              students per class. Whereas programs at other institutions can
              have 400+ learners, our courses guarantee personalized attention
              from instructors and tailored feedback to help you master the art
              of product.
            </p>
          </div>
          {/* div-----3 */}
          <div className="enrollNowDivMainImg3" style={{ width: "26%" }}>
            <img
              src="https://images.ctfassets.net/6nwv0fapso8r/i05ZiXpZA1OPfUsZlFmn2/3867c6e765d38fb0dfa33d62316af5fa/PMC_Industry-wide_credibility_2x.svg"
              alt=""
            />
            <h3>Industry-wide recognition from hiring managers</h3>
            <p>
              We've helped thousands of aspiring PM land jobs at companies like
              Google and Microsoft. That's why hiring managers from all
              industries recognize and value applicants with Product School
              certifications.
            </p>
          </div>
        </div>
        <button
          className="enrollBtn"
          style={{
            padding: "0.7rem",
            borderRadius: "0.2rem",
            marginLeft: "45%",
            marginTop: "3rem",
          }}
       onClick={handleEnroll} >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};
