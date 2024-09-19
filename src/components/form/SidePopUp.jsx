/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "@hooks/useIsMobile";
import { ReactComponent as Counsel } from "@svgs/sidePopUp/counsel.svg";
import { ReactComponent as CounselWhite } from "@svgs/sidePopUp/counselWhite.svg";
import { ReactComponent as DeleteInputValue } from "@svgs/sidePopUp/deleteInputValue.svg";

function SidePopUpFormInput({ name, label, value, onChange, onClick }) {
  return (
    <div css={form_input}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {value !== "" && <DeleteInputValue onClick={onClick} />}
    </div>
  );
}

export default function SidePopUp() {
  const { isMobile } = useIsMobile();
  const [formData, setFormData] = useState({
    isFaceToFace: true,
    desireType: "회원가입 정보",
    desireArea: "회원가입 정보",
    isStore: "회원가입 정보",
    storeNum: "회원가입 정보",
    sales: "회원가입 정보",
    name: "회원가입 정보",
    phone: "연락처",
  });

  function handleChangeIsOpen() {
    let target = document.querySelector(".side_popup_ctn");
    if (target.classList.contains("open")) {
      target.classList.remove("open");
    } else {
      target.classList.add("open");
    }
  }

  function handleChangeIsFaceToFace(e) {
    setFormData({ ...formData, isFaceToFace: !formData.isFaceToFace });
  }

  function handleChangeFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleDeleteFormData(e) {
    setFormData({
      ...formData,
      [e.currentTarget.previousElementSibling.name]: "",
    });
  }

  return (
    <>
      {isMobile === false && (
        <div css={side_popup_ctn} className="side_popup_ctn">
          <form className="form" css={form}>
            <p css={form_title}>상담신청</p>
            <div css={form_button_ctn}>
              <button
                type="button"
                css={form_button}
                className={formData.isFaceToFace === true && "selected"}
                onClick={handleChangeIsFaceToFace}
              >
                대면상담
              </button>
              <button
                type="button"
                css={form_button}
                className={formData.isFaceToFace === false && "selected"}
                onClick={handleChangeIsFaceToFace}
              >
                비대면상담
              </button>
            </div>
            <div css={form_input_ctn}>
              <SidePopUpFormInput
                name="desireType"
                label="희망업종"
                value={formData.desireType}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="desireArea"
                label="희망지역"
                value={formData.desireArea}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="isStore"
                label="점포유무"
                value={formData.isStore}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="storeNum"
                label="점포 수"
                value={formData.storeNum}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="sales"
                label="매출액"
                value={formData.sales}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="name"
                label="성명"
                value={formData.name}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
              <SidePopUpFormInput
                name="phone"
                label="연락처"
                value={formData.phone}
                onChange={handleChangeFormData}
                onClick={handleDeleteFormData}
              />
            </div>
            <div css={form_submit_ctn}>
              <p css={contact}>문의사항 : ddd@amento.com</p>
              <Link to="/processCate" css={submit_button}>
                <button type="submit">신청하기</button>
              </Link>
            </div>
          </form>
          <div className="tag" css={tag} onClick={handleChangeIsOpen}>
            <Counsel />
            <p css={tag_text}>상담신청</p>
          </div>
        </div>
      )}
      {isMobile === true && (
        <>
          <div css={mobile_side_popup_button} onClick={handleChangeIsOpen}>
            <CounselWhite />
          </div>
          <div css={mobile_side_popup_ctn} className="side_popup_ctn">
            <form className="form" css={form}>
              <p css={form_title}>상담신청</p>
              <div css={form_button_ctn}>
                <button
                  type="button"
                  css={form_button}
                  className={formData.isFaceToFace === true && "selected"}
                  onClick={handleChangeIsFaceToFace}
                >
                  대면상담
                </button>
                <button
                  type="button"
                  css={form_button}
                  className={formData.isFaceToFace === false && "selected"}
                  onClick={handleChangeIsFaceToFace}
                >
                  비대면상담
                </button>
              </div>
              <div css={form_input_ctn}>
                <SidePopUpFormInput
                  name="desireType"
                  label="희망업종"
                  value={formData.desireType}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="desireArea"
                  label="희망지역"
                  value={formData.desireArea}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="isStore"
                  label="점포유무"
                  value={formData.isStore}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="storeNum"
                  label="점포 수"
                  value={formData.storeNum}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="sales"
                  label="매출액"
                  value={formData.sales}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="name"
                  label="성명"
                  value={formData.name}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
                <SidePopUpFormInput
                  name="phone"
                  label="연락처"
                  value={formData.phone}
                  onChange={handleChangeFormData}
                  onClick={handleDeleteFormData}
                />
              </div>
              <div css={form_submit_ctn} onClick={handleChangeIsOpen}>
                <p css={contact}>문의사항 : ddd@amento.com</p>
                <Link to="/processCate" css={submit_button}>
                  <button type="submit">신청하기</button>
                </Link>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
const mobile_side_popup_button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: fixed;
  bottom: 32px;
  right: 32px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  background-color: var(--primary, #9627e7);
  box-shadow: 0px 6px 20px #d9c4e9;
`;

const side_popup_ctn = css`
  display: flex;
  z-index: 10;
  position: fixed;
  transition: left 0.4s ease-out;
  left: -359px;
  top: 108px;
  bottom: 24px;
  &.open {
    left: 0;
  }
`;

const mobile_side_popup_ctn = css`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 66px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  box-sizing: border-box;
  padding: 38px 20px 60px;
  background-color: var(--white);
  &.open {
    display: flex;
  }
`;

const tag = css`
  position: absolute;
  right: -60px;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 60px;
  height: 116px;
  border-radius: 0px 10px 10px 0px;
  background-color: var(--primary, #9627e7);
  cursor: pointer;
`;

const tag_text = css`
  width: 34px;
  height: 40px;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.29px;
  text-align: center;
  color: var(--white);
`;

const form = css`
  width: 359px;
  height: 100%;
  padding: 30px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--white);
  border-radius: 0px 20px 20px 0px;
  opacity: 0px;
  box-shadow: 0 0 0 1px #dbdbdb inset;
`;

const form_input_ctn = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 520px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #eaeaea;
    border-radius: 0;
    border: none;
  }

  ::-webkit-scrollbar-thumb {
    height: 47px;
    background-color: #5d5d5d;
    border-radius: 0;
    border: none;
  }
`;

const form_input = css`
  position: relative;
  width: calc(100% - 12px);
  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 16.71px;
    color: var(--black-1);
    display: block;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 16px 14px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #d9d9d9 inset;
    border: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.71px;
    font-family: "Pretendard Variable", Pretendard;
    color: var(--black-1);
  }
  svg {
    position: absolute;
    bottom: 8px;
    right: 14px;
    cursor: pointer;
  }
`;

const form_title = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;
  color: var(--black-1);
`;

const form_button_ctn = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const form_button = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 18px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #bebebe inset;
  font-size: 15px;
  font-weight: 700;
  line-height: 17.9px;
  color: #5c5c5c;
  &.selected {
    color: var(--primary);
    box-shadow: 0 0 0 1px var(--primary) inset;
  }
  @media (max-width: 320px) {
    padding: 16px;
    font-size: 13px;
  }
`;

const contact = css`
  padding: 6px 34px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fbf5ff;
  color: var(--primary);
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const form_submit_ctn = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const submit_button = css`
  text-decoration: none;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 20px 34px;
    box-sizing: border-box;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 15px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20.29px;
    @media (max-width: 320px) {
      font-size: 14px;
      height: auto;
      padding: 10px;
    }
  }
`;
