
import {  FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EnrollNowForm = () => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [isSubmittedForm, setIsSubmittedForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm = (e:any) => {
    e.preventDefault();
    console.log("FormSubmitting:", { studentName, studentEmail });
    setIsSubmittedForm(true);
    localStorage.setItem("FormSubmitted", "true");
  };

  const handleFormSubmitEnroll = () => {
    navigate('/CourseList');
  };

  return (
    <>

   <div style={{textAlign:'center' }}>
   <p>---------Student details --------</p>
   </div>
    
    <div className='EnrolFormDiv' style={{ width: '20%', height: 'auto',padding:'10px',marginTop:"10%",borderRadius:"5px",marginLeft:"40%",backgroundColor:"gray" ,opacity:'0.8'}}>
      {!isSubmittedForm ? (
        <form onSubmit={handleSubmitForm} style={{color:"black"}}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder='First name'
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <FormLabel>Email</FormLabel>
            <Input
              placeholder='Email type here ex.(asd@gmail.com)'
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
            />
          </FormControl>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Thank you for your submission!</p>
          <button onClick={handleFormSubmitEnroll}>Go to CourseList page</button>
        </div>
      )}

    </div>
 
    </>
  );
};
