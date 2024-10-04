/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import CheckBoxInput from "./CheckBoxInput";
import SecChoiceOption from "./SecChoiceOption";

export default function ProcessDetailPage4() {
  const { headerHeight } = useHeaderHeight();
  const [formData, setFormData] = useState({
    startUpConsulting: {
      designFranchiseHeadquarters: false,
      prepareFranchiseHeadquartersManual: false,
      informationDisclosureForm: false,
      startUpConsultingOtherLaws: false,
    },
    legalAssistance: {
      fairTradeAct: false,
      affiliateBusinessAct: false,
      civilAndCommercialLaw: false,
      completionFranchiseContract: false,
      legalAssistanceOtherLaws: false,
    },
    authorization: {
      registrationIncorporatedBusinessEntity: false,
      mailOrderBusiness: false,
      confirmationWomenEnterprises: false,
      confirmationVentureCompanies: false,
      greenCertification: false,
      HACCP: false,
      startUpConsultingOthers: false,
    },
    intellectualPropertyRights: {
      patentUtilityModel: false,
      design: false,
      trademark: false,
      copyright: false,
      technologyTransfer: false,
      licenses: false,
    },
    taxation: {
      accountBook: false,
      taxReturn: false,
    },
    education: {
      startUpManagementTraining: false,
      recipeTraining: false,
    },
    startUpManual: {
      affiliateBusinessManual: false,
      affiliateBusinessMenuTraining: false,
      manualTrainingFranchiseHeadquarters: false,
    },
    recipeDevelopment: {
      food: false,
      foodAndBeverage: false,
      recipeDevelopmentOthers: false,
    },
    events: {
      planning: false,
      eventsDesign: false,
      operation: false,
    },
    presentation: {
      operationFranchiseHeadquartersConsignmentExplanation: false,
      recruitmentFranchiseesCreateBriefingMaterials: false,
    },
    force: {
      forceDesign: false,
      dataUtilizationMarketing: false,
    },
    etc: "",
  });

  function handleChangeCheckbox(e) {
    let checkbox = e.currentTarget.nextSibling;
    const newFormData = { ...formData };
    newFormData[checkbox.name][checkbox.id] =
      !formData[checkbox.name][checkbox.id];
    setFormData(newFormData);
    if (e.currentTarget.classList.contains("selected")) {
      e.currentTarget.classList.remove("selected");
    } else {
      e.currentTarget.classList.add("selected");
    }
  }

  function handleChangeInput(e) {
    setFormData({ ...formData, etc: e.currentTarget.value });
  }

  const ctn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: ${headerHeight}px auto 0;
    box-sizing: border-box;
    padding: 80px 0 266px 220px;
    @media (max-width: 1919px) {
      padding: 80px 100px 266px 100px;
    }
    @media (max-width: 768px) {
      padding: 80px 80px 160px 80px;
    }
    @media (max-width: 400px) {
      padding: 40px;
    }
    @media (max-width: 375px) {
      padding: 34px 20px;
    }
  `;

  return (
    <main css={ctn}>
      <h2 css={page_title}>가맹본부 운영 컨설팅 (가맹본부 운영중)</h2>
      <form className="form" css={form_ctn} action="GET">
        <div css={group_ctn}>
          <p css={group}>창업컨설팅</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="startUpConsulting"
              id="designFranchiseHeadquarters"
              label="가맹본부 설계"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="startUpConsulting"
              id="prepareFranchiseHeadquartersManual"
              label="가맹본부 메뉴얼 작성"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="startUpConsulting"
              id="informationDisclosureForm"
              label="정보공개서 작성및 등록"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="startUpConsulting"
              id="startUpConsultingOtherLaws"
              label="기타 법률"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>창업법률 지원</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="legalAssistance"
              id="fairTradeAct"
              label="공정거래법"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="legalAssistance"
              id="affiliateBusinessAct"
              label="가맹사업법"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="legalAssistance"
              id="civilAndCommercialLaw"
              label="민법 및 상법"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="legalAssistance"
              id="completionFranchiseContract"
              label="가맹계약서 작성"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="legalAssistance"
              id="legalAssistanceOtherLaws"
              label="기타 법률"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>인허가</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="authorization"
              id="registrationIncorporatedBusinessEntity"
              label="법인설립 사업자등록"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="mailOrderBusiness"
              label="통신판매업"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="confirmationWomenEnterprises"
              label="여성기업 확인"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="confirmationVentureCompanies"
              label="벤처기업 확인"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="greenCertification"
              label="녹색인증"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="HACCP"
              label="HACCP"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="authorization"
              id="startUpConsultingOthers"
              label="기타"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>지식재산권</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="patentUtilityModel"
              label="특허 실용신안"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="design"
              label="디자인"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="trademark"
              label="상표"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="copyright"
              label="저작권"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="technologyTransfer"
              label="기술이전"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="intellectualPropertyRights"
              id="licenses"
              label="라이선스"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>세무</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="taxation"
              id="accountBook"
              label="회계 기장"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="taxation"
              id="taxReturn"
              label="세무신고"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>교육</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="education"
              id="startUpManagementTraining"
              label="창업경영 교육"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="education"
              id="recipeTraining"
              label="레시피 교육"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>창업 메뉴얼</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="startUpManual"
              id="affiliateBusinessManual"
              label="가맹점사업자 메뉴얼"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="startUpManual"
              id="affiliateBusinessMenuTraining"
              label="가맹점사업자 메뉴 교육"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="startUpManual"
              id="manualTrainingFranchiseHeadquarters"
              label="가맹점본부 메뉴얼 교육"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>레시피 개발</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="recipeDevelopment"
              id="food"
              label="음식"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="recipeDevelopment"
              id=" foodAndBeverage"
              label="식음료"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="recipeDevelopment"
              id=" recipeDevelopmentOthers"
              label="기타"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>행사 및 이벤트</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="events"
              id=" planning"
              label="기획"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="events"
              id=" eventsDesign"
              label="설계"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="events"
              id=" operation"
              label="운영"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p className="big" css={group}>
            설명회
          </p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="presentation"
              id=" operationFranchiseHeadquartersConsignmentExplanation"
              label="가맹본부 위탁 설명<br/> 운영"
              onClick={handleChangeCheckbox}
              formData={formData}
              isBig={true}
            />
            <CheckBoxInput
              name="presentation"
              id=" recruitmentFranchiseesCreateBriefingMaterials"
              label="가맹점 사업자 모집<br/> 설명회 자료 작성"
              onClick={handleChangeCheckbox}
              formData={formData}
              isBig={true}
            />
          </div>
        </div>
        <div css={group_ctn}>
          <p css={group}>포스</p>
          <div css={input_ctn}>
            <CheckBoxInput
              name="force"
              id=" forceDesign"
              label="설계"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
            <CheckBoxInput
              name="force"
              id=" dataUtilizationMarketing"
              label="데이터 활용 마케팅"
              onClick={handleChangeCheckbox}
              formData={formData}
            />
          </div>
        </div>

        <SecChoiceOption isFourth />

        <div css={group_ctn}>
          <p className="gray" css={group}>
            기타 문의
          </p>
          <input
            type="text"
            name="etc"
            id="etc"
            placeholder="기타 문의사항을 직접 입력해 주세요."
            onChange={handleChangeInput}
            css={text_input}
          />
          <label htmlFor="etc">기타 문의</label>
        </div>
        <div css={submit_button_ctn}>
          <Link to="/processDone">
            <button type="submit" css={submit_button}>
              제출하기
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}

const page_title = css`
  width: 100%;
  margin-bottom: 54px;
  color: var(--black, #111);
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;
  word-break: keep-all;
  @media (max-width: 375px) {
    font-size: 17px;
    line-height: 120%;
    margin-bottom: 33px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

const form_ctn = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const text_input = css`
  display: flex;
  width: calc(100% - 150.5px);
  height: 50px;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 16px 14px;
  border-radius: 5px;
  border: 1px solid #cecece;
  background: #fff;
  &:placeholder {
    color: #747474;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  & + label {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const group_ctn = css`
  display: flex;
  max-width: 1527.5px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;
  }
  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const input_ctn = css`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const group = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 150.5px;
  height: 50px;
  box-sizing: border-box;
  padding: 20px;
  gap: 6px;
  border-radius: 5px;
  background: var(--primary, #9627e7);
  margin-right: 24px;
  color: var(--white, #fff);
  white-space: nowrap;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  &.big {
    height: 67px;
  }
  &.gray {
    background-color: #e0e0e0;
    color: var(--black-1, #111);
  }
  @media (max-width: 1024px) {
    margin-right: 0;
    &.big {
      height: 50px;
    }
  }
  @media (max-width: 375px) {
    width: fit-content;
    font-size: 15px;
  }
`;

const submit_button_ctn = css`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1527.5px;
  margin-top: 46px;
  a {
    text-decoration: none;
  }
`;

const submit_button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 80px;
  background: var(--primary, #9627e7);
  color: var(--white, #fff);
  font-size: 17px;
  font-weight: 600;
  font-family: Poppins;
  @media (max-width: 375px) {
    height: 50px;
    padding: 10px 34px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
