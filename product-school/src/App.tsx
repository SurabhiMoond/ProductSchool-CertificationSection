// import "./App.css";
// import { RoutingCertificate } from "./routesCertificate/routingCertificate";

// const App = () => {
//   return (
//     <div>
//       <RoutingCertificate />
//     </div>
//   );
// };

// export default App;
// App.jsx
import "./App.css";
import { EnrollmentProvider } from "./context/EnrollmentProvider";
import { RoutingCertificate } from "./routesCertificate/routingCertificate";


const App = () => {
  return (
    <EnrollmentProvider>
      <div>
        <RoutingCertificate/>
      </div>
    </EnrollmentProvider>
  );
};

export default App;

