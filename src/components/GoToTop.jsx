import React from "react";
import styled from "styled-components";
import {FaArrowUp} from "react-icons/fa";

const GoToTop = () => {
  const goToBtn = () => {
    // window.screenTop
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
     <div className="top-btn" onClick={goToBtn}>
  <div className="icon-container">
    <FaArrowUp />
  </div>
</div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
justify-content:center;
align-items:center;

.top-btn{
    font-size:3rem;
    width:4rem;
    height:4rem;
    color:#fff;
    background-color: ${({theme}) => theme.colors.btn};
    box-shadow:${({theme}) => theme.colors.shadow};
    border-radius: 50%;
    position:fixed;
    bottom:4rem;
    right:4rem;
    z-index:999;
    diaplay:flex;
    justify-content:center;
    aligh-items: center;
}
.top-btn:hover{
    cursor:pointer;
}


`;

export default GoToTop;
