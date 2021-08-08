import styled from "styled-components";

export default {
  Button: styled.button`
    border: none;
    outline: none;
    background: hsl(200, 70%, 50%);
    color: #f5f5f5;
    padding: 0.7em 1.2em;
    border-radius: 0.2em;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
  `,
  QuizWrapper: styled.div`
    background: white;
    padding: 4em 3em;
    max-width: 55rem;
    margin: 8rem auto 0;
  `,

  QuizHeader: styled.h2`
    font-size: 3rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    letter-spacing: -1px;
  `,

  Answer: styled.li`
    font-size: 1.8rem;
    padding: 0.8em;
    color: #808080;
  `,

  StartWrapper: styled.div`
    background: white;
    max-width: 400px;
    margin: 10rem auto 0;
    padding: 3rem;
  `,

  StartTitle: styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  `,
};
