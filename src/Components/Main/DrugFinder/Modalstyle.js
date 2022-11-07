import styled from "styled-components";
export const Modal = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
@media (max-width: 768px) {
    font-size:10px;
    }`

export const Overlay = styled(Modal)`
background: rgba(49,49,49,0.8);`

export const ModalContent = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%,-50%);
line-height: 1.4;
background: #FFFFFF;
color: black;
border-radius: 10px;
width: 500px;`;

export const ModalHead = styled.h3`
 margin:0;`;

 export const ModalSubContent=styled.div`
 padding-right: 70px;
    padding-left: 70px;
    `;
  

export const Header = styled.div`
border-top-left-radius: 10px;
background-color: #F7F7F7;
padding: 30px;
display: flex;
align-items: center;
border-top-right-radius: 10px;`

  
export const Modalclose=styled.img`
top: 3px;
    position: relative;
    height: 15px;
    width: 15px;
    left: 25px;
`;

export const Footercontent=styled.div`
box-shadow: rgb(0 0 0 / 6%) 0px 2px 4px 0px inset;
    padding: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;`;

    export const Footerbutton=styled.button`
    color: #175BD1;
    background-color: #FFFFFF;
    height: 40px;
    width: 30%;
    border-radius: 10px;
    border: 2px solid #FFFFFF;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
    `;
    export const Footerbutton2=styled.button`
    color: #FFFFFF;
    background-color: #175BD1;
    height: 40px;
    width: 30%;
    border-radius: 10px;
    border: 2px solid #FFFFFF;
    `;
