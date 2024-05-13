export const MetaDiv = () => {
  return (
    <div>
      <div
        className="metaDiv"
        style={{
          display: "flex",
          width: "95%",
          height: "777px",
          marginLeft: "2rem",
          marginTop: "4rem",
          gap: "8%",
          padding: "0%",
          marginBottom: "0",
        }}
      >
        <div className="metaRytCornerImg">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderStartEndRadius: "60%",
            }}
            src="https://productschool.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6nwv0fapso8r%2F5PbeUh7H2VDxVPfXmvLqI3%2Fb337c94d65552574544b69b8e01e3022%2FMedha.jpg&w=1920&q=75"
            alt=""
          />
        </div>
        <div
          className="metaRytCornerText"
          style={{ width: "30%", fontSize: "20px", color: "#07182c" }}
        >
          <div style={{ marginTop: "8rem" }}>
            {" "}
            <img
              src="https://productschool.com/_next/static/media/quote__accent_1.e15c3eef.svg"
              alt=""
            />
          </div>
          <div
            style={{
              marginTop: "25%",
              lineHeight: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            <p>
              This certification covers everything you need to know about
              Product Management to jumpstart and land your first PM job. It
              isn't all theory, you get to apply everything you learn to your
              own project and the instructors provide feedback to help you
              improve.
            </p>
          </div>
          <div style={{ lineHeight: "1px", marginTop: "15%" }}>
            <h5>Medha Ghatikesh</h5>
            <p style={{ color: "#3c4856" }}>Product Manager</p>
          </div>
          <div style={{ marginTop: "10%" }}>
            <img
              src="https://images.ctfassets.net/6nwv0fapso8r/4stAWpNWcovbviGeiPxkt0/5d59e4914a95ca3c3dec9282d2493b5f/Meta.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
