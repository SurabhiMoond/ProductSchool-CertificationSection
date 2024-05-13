import { useEffect, useState } from "react";
import { createContext } from "react";
import React, { ReactNode } from "react";

  interface EnrollmentProviderProps {
          children: ReactNode;
        }
  export const EnrollmentContext = createContext<{
          enrolledCourses: number[];
          enrollCourse: (courseId: number) => void;
        }>({
          enrolledCourses: [],
          enrollCourse: () => {},
        });
  export const EnrollmentProvider: React.FC<EnrollmentProviderProps> = ({
          children,
        }) => {
          const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

          useEffect(() => {
            const storedEnrollments = localStorage.getItem("enrolledCourses");
            if (storedEnrollments) {
              setEnrolledCourses(JSON.parse(storedEnrollments));
            }
          }, []);

          const enrollCourse = (courseId: number) => {
            setEnrolledCourses((prevEnrollments) => [...prevEnrollments, courseId]);
            localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
          };
   return (
            <EnrollmentContext.Provider value={{ enrolledCourses, enrollCourse }}>
              {children}
            </EnrollmentContext.Provider>
          );
  };
