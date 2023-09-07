import css from "styled-jsx/css";

export default css.global`
  .hover-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    transform: translate(0, 0);
    transition: transform 0.5s ease;
    z-index: 1;
  }

  .hover-button:hover::before {
    transform: translate(-20px, +10px);
    background-color: #fffa77;
    z-index: -1;
  }
  .hover-button.clicked::before {
    transform: translate(-20px, +10px);
    background-color: #fffa77;
    z-index: -1;
  }
`;
