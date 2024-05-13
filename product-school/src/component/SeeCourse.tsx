import { useEffect, useState } from "react";
export const SeeCourse = () => {
  const [isSecureContextBtn, setIsBtn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {});
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

  return (
    <div>
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
          <form>
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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
              {" "}
              Privacy Policy{" "}
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "#01caaa" }}>
              Terms of Service .
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
