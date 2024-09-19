import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./common/globalStyles.css";
import { HeaderHeightProvider } from "./hooks/useHeaderHeight";
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
import JoinTosPage from "@pages/JoinTosPage/JoinTosPage";
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
import SidePopUp from "@components/form/SidePopUp";
import ScrollToTop from "@components/ui/ScrollToTop";
import PayHistoryPage from "@pages/PayHistoryPage/PayHistoryPage";
import PayHistoryDetailPage from "@pages/PayHistoryDetailPage/PayHistoryDetailPage";
import EstimateSheetPage from "@pages/EstimateSheetPage/EstimateSheetPage";
import ConsultHistoryPage from "@pages/ConsultHistoryPage/ConsultHistoryPage";
import ConsultDetailPage from "@pages/ConsultDetailPage/ConsultDetailPage";
import ConsultWritePage from "@pages/ConsultWritePage/ConsultWritePage";
import QnAPage from "@pages/QnAPage/QnAPage";
import BusinessReviewDetailPage from "@pages/BusinessReviewDetailPage/BusinessReviewDetailPage";
import BusinessReviewPage2 from "@pages/BusinessReviewPage/BusinessReviewPage2";

function App() {
  return (
    <>
      <Router>
        <HeaderHeightProvider>
          <ScrollToTop />
          <Header />
          <SidePopUp />
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
          <Route path="/businessReview2" element={<BusinessReviewPage2 />} />


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
            <Route path="/changePw" element={<ChangePwPage />} />
            <Route path="/changePwDetail" element={<ChangePwDetailPage />} />
            <Route path="/changePwDone" element={<ChangePwDonePage />} />

            <Route path="/payHistory" element={<PayHistoryPage />} />
            <Route
              path="/payHistoryDetail"
              element={<PayHistoryDetailPage />}
            />
            <Route path="/estimateSheet" element={<EstimateSheetPage />} />
            <Route path="/consultHistory" element={<ConsultHistoryPage />} />
            <Route path="/consultDetail" element={<ConsultDetailPage />} />
            <Route path="/consultWrite" element={<ConsultWritePage />} />
            <Route path="/QnA" element={<QnAPage />} />
            <Route
              path="/businessReviewDetail"
              element={<BusinessReviewDetailPage />}
            />
          </Routes>
          <Footer />
        </HeaderHeightProvider>
      </Router>
    </>
  );
}

export default App;
