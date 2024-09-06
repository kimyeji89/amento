import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@components/ui/Header";
import Footer from "@components/ui/Footer";
import HomePage from "@pages/HomePage/HomePage";
import ProcessCatePage from "@pages/ProcessCatePage/ProcessCatePage";
import ProcessDetailPage from "@pages/ProcessDetailPage/ProcessDetailPage";
import ProcessDonePage from "@pages/ProcessDonePage/ProcessDonePage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/processCate" element={<ProcessCatePage />} />
          <Route path="/processDetail" element={<ProcessDetailPage />} />
          <Route path="/processDone" element={<ProcessDonePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
