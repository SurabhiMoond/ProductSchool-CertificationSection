import { Route, Routes } from "react-router-dom";
import { CourseList } from "../component/CourseList";
import { CertificationPage, courses } from "../component/CertificationPage";
import { EnrollNowForm } from "../component/EnrollNowForm";



export const RoutingCertificate = () => {
  return (
    <div>
     
        <Routes>
        <Route path="/" element={<CertificationPage />} />
        <Route path="/CourseList" element={<CourseList courses={courses}/>} />
        <Route path ='/enroll/:courseId' element={<EnrollNowForm/>}/>
       </Routes>
      
    </div>
  )
}




