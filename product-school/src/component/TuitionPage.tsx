
import { useNavigate } from "react-router-dom";

export const TuitionPage = () => {
  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate('/CourseList'); 
  };


  return (
    <div>
      <div className="tuitionPaymentpage">
        <div className="tuitionPaymentpageLeft">
          <h1>Tuition payment options</h1>
          <div>
            {" "}
            We have flexible options to get you on your way to your Product
            Management goals:
          </div>
          <p>
            &#x2713; Employer sponsorship. Convince your manager by using this
            template
          </p>
          <p>&#x2713; Interest free installment plans</p>
          <p>
            &#x2713; Enroll three people or more and get a group discount. Learn
            more
          </p>
          <div className="tuitionPaymentpageBtn">
            <button
              style={{ color: "antiquewhite", backgroundColor: "#07182c" }}
              onClick={handleEnroll}
            >
              ENROLL NOW
            </button>
            <button
              className="btnHver"
              style={{ color: "#07182c", border: "1px solid #07182c" ,cursor:'pointer'}} 
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>

        <div className="tuitionPaymentpageRyt">
          <img
            style={{ border: "none" }}
            src="https://images.ctfassets.net/6nwv0fapso8r/22RE6GYShCF8aC0JQlEzZ4/11c4cfc0191827f7395953763bfd9e3b/Salary_Graph_-_A_2x.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
