/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import CheckBoxInput from "./CheckBoxInput";

export default function SecChoiceOption({ isFourth }) {
  const [formData, setFormData] = useState({
    interior: {
      signageInstallation: false, // 간판 설치
      interiorConstruction: false, // 인테리어 공사
      remodeling: false, // 리모델링
      fixtureInstallation: false, // 집기 설치
    },
    facilities: {
      waterSupply: false, // 수도
      electricity: false, // 전기
      gasSupply: false, // 가스
      fixturesAndSupplies: false, // 집기 및 소품
      septicTank: false, // 정화조
      fireSafetyEquipment: false, // 소방설비
      otherFacilities: false, // 기타
    },
    pos: {
      posInstallation: false, // POS 설치
      cardAffiliation: false, // 카드 가맹
      maintenanceAndRepair: false, // 유지 및 보수
    },
    promotion: {
      event: false, // 이벤트
      customPromotionalMaterials: false, // 맞춤형 판촉물 제작
    },
    logistics: {
      dryGoods: false, // 드라이 (건조 제품)
      freshGoods: false, // 프레쉬 (신선 제품)
      urgentDelivery: false, // 긴급 배송
      parcelService: false, // 택배
    },
    personnel: {
      partTime: false, // 알바
      salesStaff: false, // 영업사원
      stepStaff: false, // 스텝
      kitchenChef: false, // 주방(쉐프)
      otherPersonnel: false, // 기타
    },
    marketing: {
      flyers: false, // 전단지
      posters: false, // 포스터
      designAndLogo: false, // 디자인(로고 등)
      banners: false, // 현수막
      socialMedia: false, // 블로그(인스타)
      newspaperArticles: false, // 신문기사
    },
    foodSupplyAndManufacturing: {
      foodDistributionCompany: false, // 식자재 유통업체
      factoryCollaboration: false, // 공장 협업
    },
    siteDevelopmentAndConstruction: {
      siteDiscoveryAndContract: false, // 상권발굴 및 계약
      contractAndConstruction: false, // 계약 및 시공
      supervision: false, // 감리
    },
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

  return (
    <>
      <div css={divided_area}></div>

      <div css={group_ctn}>
        <p className={isFourth ? "gray" : ""} css={group}>
          인테리어
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="interior"
            id="signageInstallation"
            label="간판"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="interior"
            id="interiorConstruction"
            label="인테리어 공사"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="interior"
            id="remodeling"
            label="리모델링"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="interior"
            id="fixtureInstallation"
            label="집기 설치"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className={isFourth ? "gray" : ""} css={group}>
          시설
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="facilities"
            id="waterSupply"
            label="수도"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="electricity"
            label="전기"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="gasSupply"
            label="가스"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="fixturesAndSupplies"
            label="집기 및 소품"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="septicTank"
            label="정화조"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="fireSafetyEquipment"
            label="소방설비"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="facilities"
            id="otherFacilities"
            label="기타"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className={isFourth ? "gray" : ""} css={group}>
          포스 (예정)
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="pos"
            id="posInstallation"
            label="POS 설치"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="pos"
            id="cardAffiliation"
            label="카드 가맹"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="pos"
            id="maintenanceAndRepair"
            label="유지 및 보수"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className={isFourth ? "gray" : ""} css={group}>
          프로모션 (MRO)
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="promotion"
            id="event"
            label="이벤트"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="promotion"
            id="customPromotionalMaterials"
            label="맞춤형 판촉물 제작"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>

      <div css={divided_area}></div>

      <div css={group_ctn}>
        <p className="gray" css={group}>
          물류
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="logistics"
            id="dryGoods"
            label="드라이"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="logistics"
            id="freshGoods"
            label="프레쉬"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="logistics"
            id="urgentDelivery"
            label="긴급"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="logistics"
            id="parcelService"
            label="택배"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className="gray" css={group}>
          인력
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="personnel"
            id="partTime"
            label="알바"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="personnel"
            id="salesStaff"
            label="영업사원"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="personnel"
            id="stepStaff"
            label="스텝"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="personnel"
            id="kitchenChef"
            label="주방(쉐프)"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="personnel"
            id="otherPersonnel"
            label="기타"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className="gray" css={group}>
          홍보 및 마케팅
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="marketing"
            id="flyers"
            label="전단지"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="marketing"
            id="posters"
            label="포스터"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="marketing"
            id="designAndLogo"
            label="디자인 (로고 등)"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="marketing"
            id="banners"
            label="현수막"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="marketing"
            id="socialMedia"
            label="블로그 (인스타 등)"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="marketing"
            id="newspaperArticles"
            label="신문기사"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className="gray" css={group}>
          식자재 공급 및 제조
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="foodSupplyAndManufacturing"
            id="foodDistributionCompany"
            label="식자재 유통업체"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="foodSupplyAndManufacturing"
            id=" factoryCollaboration"
            label="공장 협업"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
      <div css={group_ctn}>
        <p className="gray" css={group}>
          상권개발 및 시공
        </p>
        <div css={input_ctn}>
          <CheckBoxInput
            name="siteDevelopmentAndConstruction"
            id="siteDiscoveryAndContract"
            label="상권발굴 및 계약"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="siteDevelopmentAndConstruction"
            id="contractAndConstruction"
            label="계약 및 시공"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
          <CheckBoxInput
            name="siteDevelopmentAndConstruction"
            id="supervision"
            label="감리"
            onClick={handleChangeCheckbox}
            formData={formData}
          />
        </div>
      </div>
    </>
  );
}

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

const divided_area = css`
  padding: 20px;
`;
