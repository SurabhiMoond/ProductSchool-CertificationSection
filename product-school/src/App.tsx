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

