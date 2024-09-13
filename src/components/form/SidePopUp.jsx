/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Counsel } from "@svgs/sidePopUp/counsel.svg";
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

  function handleChangeIsOpen(e) {
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

  function handleChangeDesireType(e) {
    setFormData({ ...formData, desireType: e.target.value });
  }

  function handleDeleteDesireType(e) {
    setFormData({ ...formData, desireType: "" });
  }

  function handleChangeDesireArea(e) {
    setFormData({ ...formData, desireArea: e.target.value });
  }

  function handleDeleteDesireArea(e) {
    setFormData({ ...formData, desireArea: "" });
  }

  function handleChangeIsStore(e) {
    setFormData({ ...formData, isStore: e.target.value });
  }

  function handleDeleteIsStore(e) {
    setFormData({ ...formData, isStore: "" });
  }

  function handleChangeStoreNum(e) {
    setFormData({ ...formData, storeNum: e.target.value });
  }

  function handleDeleteStoreNum(e) {
    setFormData({ ...formData, storeNum: "" });
  }

  function handleChangeSales(e) {
    setFormData({ ...formData, sales: e.target.value });
  }

  function handleDeleteSales(e) {
    setFormData({ ...formData, sales: "" });
  }

  function handleChangeName(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleDeleteName(e) {
    setFormData({ ...formData, name: "" });
  }

  function handleChangePhone(e) {
    setFormData({ ...formData, phone: e.target.value });
  }

  function handleDeletePhone(e) {
    setFormData({ ...formData, phone: "" });
  }

  return (
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
            onChange={handleChangeDesireType}
            onClick={handleDeleteDesireType}
          />
          <SidePopUpFormInput
            name="desireArea"
            label="희망지역"
            value={formData.desireArea}
            onChange={handleChangeDesireArea}
            onClick={handleDeleteDesireArea}
          />
          <SidePopUpFormInput
            name="isStore"
            label="점포유무"
            value={formData.isStore}
            onChange={handleChangeIsStore}
            onClick={handleDeleteIsStore}
          />
          <SidePopUpFormInput
            name="storeNum"
            label="점포 수"
            value={formData.storeNum}
            onChange={handleChangeStoreNum}
            onClick={handleDeleteStoreNum}
          />
          <SidePopUpFormInput
            name="sales"
            label="매출액"
            value={formData.sales}
            onChange={handleChangeSales}
            onClick={handleDeleteSales}
          />
          <SidePopUpFormInput
            name="name"
            label="성명"
            value={formData.name}
            onChange={handleChangeName}
            onClick={handleDeleteName}
          />
          <SidePopUpFormInput
            name="phone"
            label="연락처"
            value={formData.phone}
            onChange={handleChangePhone}
            onClick={handleDeletePhone}
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
  );
}
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
  }
`;

const contact = css`
  padding: 6px 34px;
  box-sizing: border-box;
  height: 32px;
  border-radius: 5px;
  background-color: #fbf5ff;
  color: var(--primary);
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: center;
`;

const form_submit_ctn = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
