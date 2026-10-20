import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(90%, 450px);
    height: min(90%, 450px);
    padding: 50px;
    background: #272727;
    position: relative;
    /* &::after {
      content: "";
      width: 100%;
      height: 5px;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        to left,
        var(--accent),
        #8bfff9,
        var(--accent)
      );
    } */
    .title {
      position: absolute;
      top: 10px;
      /* top: 50%; */
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      gap: 5px;
      padding-block-end: 40px;
      span {
        font-family: var(--condensed-font);
        font-size: 0.8rem;
        height: fit-content;
        padding: 5px;
        background: #2fdab5;
        color: #000;
        border-radius: 5px;
      }
    }
    .instr {
      padding-block-end: 20px;
      p {
        /* font-family: var(--condensed-font); */
        text-align: center;
      }
    }
    .inputs {
      display: flex;
      flex-direction: column;
    }
  }
`;
