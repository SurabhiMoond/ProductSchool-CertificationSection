import React, { useContext,  useState } from "react";
import { Course } from "../interface/interface";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { EnrollmentContext } from "../context/EnrollmentProvider";


export const CourseCardComponent: React.FC<{ course: Course }> = ({
  course,
}) => {
  const [showSoldOutPopup, setShowSoldOutPopup] = useState(false);
  // const [isSubmittedEnrollForm, setIsSubmittedEnrollForm] = useState(false);
  const { enrolledCourses, enrollCourse } = useContext(EnrollmentContext);
  const isEnrolled = enrolledCourses.includes(course.id);

  // useEffect(() => {
  //   const submitBtn = localStorage.getItem("Formsubmitted");
  //   if (submitBtn) {
  //     setIsSubmittedEnrollForm(true);
  //   }
  // }, []);
  const handleEnrollForm = () => {
    if (!isEnrolled) {
      enrollCourse(course.id);
      navigate(`/enroll/${course.id}`); 
    }
  };


  const navigate = useNavigate();
  const handleSoldOutHover = () => {
    setShowSoldOutPopup(true);
  };

  const handleSoldOutLeave = () => {
    setShowSoldOutPopup(false);
  };

  // const handleEnrollForm = () => {
  //   navigate(`/enroll/${course.id}`);
  // };
  const isSoldOut =
    course.spotsLeft <= 0 || new Date(course.dates) < new Date();
  return (
    <>
      <div className="course-card">
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon
                        border="2px solid #07182c"
                        color="#07182c"
                        padding="2px"
                      />
                    ) : (
                      <AddIcon
                        border="2px solid #07182c"
                        color="#07182c"
                        padding="2px"
                      />
                    )}
                    <Box
                      as="span"
                      textAlign="left"
                      style={{ width: "20%", marginLeft: "20px" }}
                    >
                      <Grid
                        templateColumns="50px 1fr"
                        gap={6}
                        alignItems="center"
                      >
                        <Image
                          src={course.logo}
                          boxSize="100%"
                          objectFit="cover"
                        />
                        <Box color="#07182c">
                          <b>{course.name}</b>
                        </Box>
                      </Grid>
                    </Box>
                    <div style={{ width: "350px" }}>
                      <p>
                        <b> {course.dates}</b> ({course.type})
                        <p>
                          <b> {course.days} </b>
                        </p>
                      </p>
                    </div>
                    <div style={{ width: "400px" }}>
                      <p>
                        {" "}
                        {course.hours} <p>Time Zone: {course.timeZone}</p>
                      </p>
                    </div>
                    <div style={{ width: "200px" }}>
                      <div style={{ width: "100px", marginLeft: "20%" }}>
                        <Image
                          style={{
                            boxSizing: "border-box",
                            borderEndEndRadius: "50%",
                            borderEndStartRadius: "50%",
                            position: "relative",
                            width: "100%",
                            mixBlendMode: "luminosity",
                            height: "120px",
                            margin: "0",
                          }}
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          boxSize="100%"
                          objectFit="cover"
                        />
                        <div
                          style={{
                            borderEndEndRadius: "50%",
                            borderEndStartRadius: "50%",
                            position: "absolute",
                            width: "101px",
                            height: "120px",
                            backgroundColor: "rgb(16 56 105)",
                            opacity: "0.5",
                            marginTop: "-7.8%",
                          }}
                        ></div>
                      </div>

                      <b>{course.instructor.name}</b>
                    </div>

                    <div style={{ width: "200px" }}>
                      {isSoldOut ? (
                        <Tooltip
                          isOpen={showSoldOutPopup}
                          placement="bottom"
                          hasArrow
                          bg="transparent"
                          boxShadow="none"
                          label={
                            <Box
                              bg="red.300"
                              color="white"
                              border="2px solid red"
                              p="2"
                              borderRadius="md"
                              textAlign="center"
                            >
                              Oh sorry, you lost! This course is sold out
                            </Box>
                          }
                        >
                          <Button
                            className="soldOut"
                            onMouseOver={handleSoldOutHover}
                            onMouseLeave={handleSoldOutLeave}
                            color="red.500"
                            bgColor="red.100"
                            disabled // Disable btn when sold out
                          >
                            SOLD OUT
                          </Button>
                        </Tooltip>
                      ) : (!isEnrolled ? (
                        <button
                          style={{
                            padding: "10px",
                            backgroundColor: "#07182c",
                            color: "antiquewhite",
                            border: "none",
                            borderRadius: "5px",
                          }}
                          className="enroll-btn"
                          onClick={handleEnrollForm}
                        >
                          ENROLL NOW
                        </button>
                      ) : (
                        <Button colorScheme="green" disabled>
                          Enrolled
                        </Button>
                      ))}
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h4>
                    Description :{" "}
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam vitae corrupti accusantium iste laudantium quasi eos
                      sapiente, quia, ullam inventore officia atque! Nemo
                      doloremque soluta, eum cupiditate itaque dolorem incidunt.
                    </p>
                  </h4>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
