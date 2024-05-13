import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const PMCcurri = () => {
  return (
    <div>
      <div
        className="PMCcurriculum"
        style={{
          width: "94.1%",
          backgroundColor: "#07182c",
          marginLeft: "2rem",
          position: "absolute",
          paddingBottom: "5rem",
          height: "auto",
        }}
      >
        <div
          style={{
            color: "antiquewhite",
            width: "30%",
            marginLeft: "3rem",
            marginTop: "3rem",
          }}
        >
          <h2>Product Manager Certification (PMC)™ curriculum </h2>
          <p style={{ fontSize: "24px" }}>Here's what's covered:</p>
        </div>
        <div
          className="PMCcurriculumAcordian"
          style={{
            width: "92%",
            justifyContent: "center",
            margin: "5rem 0rem 0 3rem",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <div className="PMCcurriculumAccordianLeft">
            <Accordion allowToggle>
              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="2"
                    textAlign="left"
                  >
                    <h4>
                      {" "}
                      1 &nbsp; How great PMs are built and how they build great
                      products
                    </h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    Great PMs know how to get into the heads of their customers,
                    to deeply understand their pain points and needs, and create
                    loved and impactful product experiences.
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    <h4>
                      2 &nbsp; Understanding who your customers are and how they
                      think
                    </h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    Great PMs know how to get into the heads of their customers,
                    to deeply understand their pain points and needs, and create
                    loved and impactful product experiences.
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="2"
                    textAlign="left"
                  >
                    <h4>
                      {" "}
                      3 &nbsp; Mastering the art and science of strategic
                      alignment
                    </h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    After understanding how great products work and what your
                    customers need, you’ll gain the ‘soft’ skills to get your
                    team and stakeholders aligned.
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="PMCcurriculumAccordianRyt">
            <Accordion allowToggle>
              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="2"
                    textAlign="left"
                  >
                    <h4> 4 &nbsp; Going from concept to reality</h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    Learn to create an inspiring User Experience (UX) with
                    Figma, and collaborate effectively with UX designers and
                    Software Engineers. 
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    <h4>5 &nbsp; Creating the ultimate Go to Market plan</h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    Now that you’ve built your product, you’ll learn how to
                    launch and market it with an effective Go to Market (GTM)
                    plan. 
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                backgroundColor="#0f243e"
                className="AccordionItem"
              >
                <AccordionButton
                  className="AccordionButton"
                  color="antiquewhite"
                  paddingRight="1rem"
                >
                  <Box
                    className="AccordionButtonBox"
                    as="span"
                    flex="2"
                    textAlign="left"
                  >
                    <h4>
                      {" "}
                      6 &nbsp; Winning over hiring managers - How to do it right
                    </h4>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className="AccordionButtonPannel">
                  <div className="AccordionButtonPannelDiv">
                    Winning over hiring managers can be a challenging task, but
                    with your newly acquired skills, experience, and a brand new
                    product portfolio, you're already ahead of the game.
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
