/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as ProfileIcon } from "@svgs/common/commentProfile.svg";
import { ReactComponent as ProfileIconBl } from "@svgs/common/commentProfileBl.svg";

export default function CommentInput({ isBlIcon }) {
  return (
    <div css={comment_wrap}>
      <div css={input_header}>
        {isBlIcon ? <ProfileIconBl /> : <ProfileIcon />}
        <div>
          <span>amento님</span> 댓글을 남겨 보세요.
        </div>
      </div>
      <input placeholder="댓글을 남겨보세요." css={input}></input>
    </div>
  );
}

const comment_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const input_header = css`
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--text, #3c3c3c);
  font-size: 20px;
  font-weight: 500;

  span {
    font-weight: 800;
  }

  @media (max-width: 375px) {
    font-size: 16px;

    svg {
      width: 16.941px;
      height: 16.941px;
    }
  }
`;

const input = css`
  display: flex;
  padding: 20px 24px;
  gap: 10px;

  border-radius: 10px;
  border: 1px solid var(--stroke, #e8e8e8);
  background: #fff;

  font-size: 15px;

  @media (max-width: 375px) {
    padding: 16.5px 20px;
    font-size: 13px;
    max-height: 50px;
  }
`;
