import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    .cardsContainer {
        width: 100%;
        height: 100vh;
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }

    .addGame {
        margin-top: 25px;
        width: 180px;
        padding: 8px;
        margin-left: 15px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        background-color: #91d722;
        cursor: pointer;

        &:hover {
            scale: 1.02;
            transition-duration: .5s;
        }
    }

    #name, #category, #url, #video, #description, #img {
        width: 200px;
        padding: 5px;
        margin: 10px 10px;
        line-height: 1.5;
        border-radius: 5px;
        position: relative;
        left: 20px;
    }

    #description {
        height: 150px;
    }
   
`;
