import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./common/globalStyles.css";
import Header from "@components/ui/Header";
import Footer from "@components/ui/Footer";
import HomePage from "@pages/HomePage/HomePage";
import ProcessCatePage from "@pages/ProcessCatePage/ProcessCatePage";
import ProcessDetailPage from "@pages/ProcessDetailPage/ProcessDetailPage";
import ProcessDonePage from "@pages/ProcessDonePage/ProcessDonePage";
import CompanyIntroPage from "@pages/CompanyIntroPage/CompanyIntroPage";
import ServicePage from "@pages/ServicePage/ServicePage";
import ApplicationPage from "@pages/ApplicationPage/ApplicationPage";
import ConsultingPage from "@pages/ConsultingPage/ConsultingPage";
import BusinessReviewPage from "@pages/BusinessReviewPage/BusinessReviewPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import JoinTosPage from "@pages/JoinTosPage.jsx/JoinTosPage";
import JoinDetailPage from "@pages/JoinDetailPage/JoinDetailPage";
import JoinDonePage from "@pages/JoinDonePage/JoinDonePage";
import EditUserPage from "@pages/EditUserPage/EditUserPage";
import EditUserDonePage from "@pages/EditUserDonePage/EditUserDonePage";
import WithdrawalUserPage from "@pages/WithdrawalUserPage/WithdrawalUserPage";
import WithdrawalUserDonePage from "@pages/WithdrawalUserDonePage/WithdrawalUserDonePage";
import FindIdPage from "@pages/FindIdPage/FindIdPage";
import FindIdDonePage from "@pages/FindIdDonePage/FindIdDonePage";
import ChangePwPage from "@pages/ChangePwPage/ChangePwPage";
import ChangePwDetailPage from "@pages/ChangePwDetailPage/ChangePwDetailPage";
import ChangePwDonePage from "@pages/ChangePwDonePage/ChangePwDonePage";

function App() {
  return (
    <>
      <Header />
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/processCate" element={<ProcessCatePage />} />
        <Route path="/processDetail" element={<ProcessDetailPage />} />
        <Route path="/processDone" element={<ProcessDonePage />} />

        {/* 게시판 */}
        <Route path="/companyIntro" element={<CompanyIntroPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/businessReview" element={<BusinessReviewPage />} />

        {/* 회원 관리 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/joinTos" element={<JoinTosPage />} />
        <Route path="/joinDetail" element={<JoinDetailPage />} />
        <Route path="/joinDone" element={<JoinDonePage />} />
        <Route path="/editUser" element={<EditUserPage />} />
        <Route path="/editUserDone" element={<EditUserDonePage />} />
        <Route path="/withdrawalUser" element={<WithdrawalUserPage />} />
        <Route
          path="/withdrawalUserDone"
          element={<WithdrawalUserDonePage />}
        />
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/findIdDone" element={<FindIdDonePage />} />
        <Route path="/changePwPage" element={<ChangePwPage />} />
        <Route path="/changePwDetailPage" element={<ChangePwDetailPage />} />
        <Route path="/changePwDonePage" element={<ChangePwDonePage />} />
      </Routes>
      {/* </Router> */}
      <Footer />
    </>
  );
}

export default App;
