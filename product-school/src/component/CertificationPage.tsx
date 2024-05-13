
import { useEffect, useState } from "react";
import { Course } from "../interface/interface";
import { useNavigate } from "react-router-dom";
import { VideoComp } from "./VideoComp";
import { EnrollNow } from "./EnrollNow";
import { MetaDiv } from "./MetaDiv";
import { PMCcurri } from "./PMCcurri";
import { TuitionPage } from "./TuitionPage";
import { PmcPlc } from "./PmcPlc";




export const courses: Course[] = [
  { 
    id:1,
    name: "React Mastery Certificate",
    dates: "May 13-June 27",
    type: "Full-time",
    days: "Mondays and Wednesdays",
    hours: "11:00 PM-2:00 AM",
    instructor: {
      name: "Aditya Kumar",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/aditya_kumar_73577e9083.jpeg",
    },
    spotsLeft: 1,
    timeZone: "Asia/Kolkata",
    timeZoneInfo: "Time Zone Additional Information",
    logo: "https://images.ctfassets.net/6nwv0fapso8r/kWKACXAueoMT2j6EZIMDa/cf660ccf5e1ac75053de815e10772aba/PMC-shield-small.svg",
  },
  {
    id:2,
    name: "Web Certificate",
    dates: "May 28-June 27",
    type: "Full-time",
    days: "Mondays and Wednesdays",
    hours: "11:00 PM-1:30 AM",
    instructor: {
      name: "Rahul Rajeevan",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Rahul_Rajeevan_1_db17ca07d7.png",
    },
    spotsLeft: 1,
    timeZone: "Asia/Kolkata",
    timeZoneInfo: "Time Zone Additional Information",
    logo: "https://images.ctfassets.net/6nwv0fapso8r/kWKACXAueoMT2j6EZIMDa/cf660ccf5e1ac75053de815e10772aba/PMC-shield-small.svg",
  },
  {
    id:3,
    name: "DSA Certificate",
    dates: "May 23-June 27",
    type: "Part-time",
    days: "Mondays and Wednesdays",
    hours: "11:00 PM-1:30 AM",
    instructor: {
      name: "Venu",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/venu_6e7cabff61.jpeg",
    },
    spotsLeft: 0,
    timeZone: "Asia/Kolkata",
    timeZoneInfo: "Time Zone Additional Information",
    logo: "https://images.ctfassets.net/6nwv0fapso8r/kWKACXAueoMT2j6EZIMDa/cf660ccf5e1ac75053de815e10772aba/PMC-shield-small.svg",
  },

  {
    id:4,
    name: "Skill Certificate",
    dates: "May 13-June 27",
    type: "Full-time",
    days: "Mondays and Wednesdays",
    hours: "7:00 PM-7:30 AM",
    instructor: {
      name: "Lochani",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Profile_Picture_GML_Lochani_GM_199bd578ba.jpg",
    },
    spotsLeft: 0,
    timeZone: "Asia/Kolkata",
    timeZoneInfo: "Time Zone Additional Information",
    logo: "https://images.ctfassets.net/6nwv0fapso8r/kWKACXAueoMT2j6EZIMDa/cf660ccf5e1ac75053de815e10772aba/PMC-shield-small.svg",
  },
];

export const CertificationPage = () => {
  const [isSecureContextBtn, setIsBtn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isClick) {
  //     setIsClick(false);
  //   }
  // }, [isClick]);

  useEffect(() => {
    // if the user is already submitted form check
    const submitted = localStorage.getItem("submitted");
    if (submitted) {
      setIsSubmitted(true);
    }
  }, [isSubmitted]);
  const handleNameInput = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e: any) => {
    setEmail(e.target.value);
  };
  const handleSeeCourse = () => {
    setIsBtn(true);
  };
  const handleLessThen = () => {
    setIsBtn(false);
  };


  const handleEnroll = () => {
    navigate('/CourseList'); // Redirect to the courseList page
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitting:", { name, email });
    setIsSubmitted(true);
    localStorage.setItem("submitted", "true");
  };
  return (
    <div className="CertificationsPage">
      <div
        className="CertificationPage"
        style={{
          width: "95%",
          display: "flex",
          height: "810px",
          backgroundColor: "#07182c",
          marginLeft: "2rem",
        }}
      >
        <div
          className="PMCleft"
          style={{
            width: "33%",
            marginTop: isSecureContextBtn ? "5rem" : "8rem",
            marginLeft: "4rem",
            backgroundColor: "#fffff",
            position: "absolute",
          }}
        >
          <img
            src="https://images.ctfassets.net/6nwv0fapso8r/7hvLG99OSXyfGhj5A2lLlF/5e44241c5afe3af6b454f7a8b2972708/PMC-shield-medium.svg"
            alt="logoImage"
          />
          <div style={{ color: "#f0f0ef" }}>
            <h1>Product Manager Certification (PMC)™</h1>
            <p>
              Land your first Product Management job by building the skills you
              need to get hired and succeed.
            </p>
          </div>

          {/*SEE COURSE CONTENT Button & it's functionality*/}

          {/* {isSecureContextBtn ? <button onClick={handleLessThen} style={{backgroundColor:"#07182c", color:"#01caaa",border:"none", fontSize:"1.4rem",fontWeight:"bolder"}}> &lt; </button> : <button onClick={handleSeeCourse} style={{padding:"0.8rem",backgroundColor:"#00d3ad",border:"none",borderRadius:"3px",fontWeight:"bolder",color:"#3c4856"}}>SEE COURSE CONTENT</button> }
        {isSecureContextBtn && (<div className="courseContentDiv" style={{ marginTop: "2rem", transition: "transform 3s ease", transform: isSecureContextBtn ? "translateX(0)" : "translateX(-10%)" }}>
   */}
          {/* <form onSubmit={handleSubmit} >
            
               <input type="text" value={name} onChange={handleNameInput} placeholder="First Name" style={{padding:"14px"}} required/> &nbsp;
              <input type="text" value={email} onChange={handleEmailInput} placeholder="Email" style={{padding:"14px"}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address" required/>
            
            <button type="submit" style={{width:"100%", marginTop:"0.3rem",padding:"14px", backgroundColor:"#00d3ad"}}>GET IT NOW</button> 
          
           
           </form> */}
          {/* {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <input type="text" value={name} onChange={handleNameInput} placeholder="First Name" style={{ padding: "14px" }} required /> &nbsp;
                  <input type="text" value={email} onChange={handleEmailInput} placeholder="Email" style={{ padding: "14px" }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address" required />
                  <button type="submit" style={{ width: "100%", marginTop: "0.3rem", padding: "14px", backgroundColor: "#00d3ad" }}>GET IT NOW</button>
                </form>
              ) : (
                <div style={{ padding: "20px", color: "#f0f0ef", fontSize: "1.2rem" }}>
                  Submission successful! Thank you for your interest.
                </div>
              )}
               */}

          {isSubmitted ? (
            <button
              style={{
                padding: "0.8rem",
                backgroundColor: "#07182c",
                color: "#01caaa",
                border: "2px solid #00d3ad",
                borderRadius: "3px",
                fontWeight: "bolder",
                marginTop: "1rem",
              }}
            onClick={handleEnroll}>
              ENROLL NOW
            </button>
          ) : (
            <>
              {isSecureContextBtn ? (
                <button
                  onClick={handleLessThen}
                  style={{
                    backgroundColor: "#07182c",
                    color: "#01caaa",
                    border: "none",
                    fontSize: "1.4rem",
                    fontWeight: "bolder",
                  }}
                >
                  {" "}
                  &lt;{" "}
                </button>
              ) : (
                <button
                  onClick={handleSeeCourse}
                  style={{
                    padding: "0.8rem",
                    backgroundColor: "#00d3ad",
                    border: "none",
                    borderRadius: "3px",
                    fontWeight: "bolder",
                    color: "#3c4856",
                  }}
                >
                  SEE COURSE CONTENT
                </button>
              )}

              {isSecureContextBtn && (
                <div
                  className="courseContentDiv"
                  style={{
                    marginTop: "2rem",
                    transition: "transform 3s ease",
                    transform: isSecureContextBtn
                      ? "translateX(0)"
                      : "translateX(-10%)",
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameInput}
                      placeholder="First Name"
                      style={{ padding: "14px" }}
                      required
                    />{" "}
                    &nbsp;
                    <input
                      type="text"
                      value={email}
                      onChange={handleEmailInput}
                      placeholder="Email"
                      style={{ padding: "14px" }}
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$'
                      title="Please enter a valid email address"
                      required
                    />
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        marginTop: "0.3rem",
                        padding: "14px",
                        backgroundColor: "#00d3ad",
                      }}
                    >
                      GET IT NOW
                    </button>
                  </form>
                  <p style={{ fontSize: "16px", color: "#f0f0ef" }}>
                    By sharing your email, you agree to our{" "}
                    <a href="#" style={{ color: "#01caaa" }}>
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" style={{ color: "#01caaa" }}>
                      Terms of Service.
                    </a>
                  </p>
                </div>
              )}
            </>
          )}

          {/* <p style={{fontSize:"16px", color:"#f0f0ef"}}>By sharing your email, you agree to our <a href="#" style={{color:"#01caaa"}}> Privacy Policy </a> and <a href="#" style={{color:"#01caaa"}}>Terms of Service .</a>
            </p>
          </div>
          )}
          */}

          {/*SEE COURSE CONTENT Button & it's functionality*/}
        </div>
        <div
          className="PMCryt"
          style={{
            position: "relative",
            marginLeft: "60%",
            marginTop: isSecureContextBtn ? "5rem" : "4rem",
          }}
        >
          <img
            style={{
              borderEndStartRadius: "50%",
              borderEndEndRadius: "50%",
              width: "105%",
              height: "98%",
            }}
            src="https://img.freepik.com/free-photo/african-business-lady-standing-grey-background_171337-16083.jpg?size=626&ext=jpg&ga=GA1.1.537974997.1715247395&semt=ais"
            alt="PMCrytImg"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              width: "105%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="PMCrytClip"
              style={{
                color: "#f0f0ef",
                backgroundImage:
                  "linear-gradient(to bottom, rgb(177,212,255 , 0.2),rgb(16,56,105,0.7),rgb(16,56,105,1))",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "98%",
                borderEndStartRadius: "50%",
                borderEndEndRadius: "50%",
              }}
            >
              <div
                style={{
                  width: "170px",
                  backgroundColor: "#b9eff5",
                  padding: "10px",
                  borderRadius: "20px",
                  fontSize: "18px",
                  textAlign: "center",
                  margin: "40px",
                  color: "#2d4657",
                }}
              >
                Product School Alum
              </div>
              <p
                style={{
                  margin: "15rem 1.2rem 0 1.2rem",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ad voluptatem laboriosam ipsum, nostrum voluptas harum eligendi
                ab natus fugit Lorem ipsum dolor
              </p>
              <div style={{ lineHeight: "0px", textAlign: "center" }}>
                <h3>Shilpi Verma</h3>
                <p>Product Lead</p>
              </div>
              <div>
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: "10%",
                    color: "#07182c",
                  }}
                >
                  Google
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <VideoComp />
      <EnrollNow />
      <MetaDiv />
      <PMCcurri/>
      <TuitionPage />
      <PmcPlc/>
      
      
    </div>
  );
};
