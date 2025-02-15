import styled from "styled-components";

export const StyleTopoTeatro = styled.section`
    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .opcoes {
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(248, 248, 248, 0.7);
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 700px;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                font-family: "Georgia", serif;
                font-size: 1.1rem;
                letter-spacing: 2px;

                a {
                    text-decoration: none;
                    color: inherit;

                    &:hover {
                        color: crimson;
                    }
                }
            }
        }
    }

    .textoBanner {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        text-align: center;
        padding: 20px;
        background-color: rgba(20, 20, 20, 0.7);
        color: gold;
        border-radius: 15px;

        h1 {
           
            font-size: 3rem;
            margin: 0 0 10px;
            color: crimson;
        }

        h2 {
             
            font-size: 2rem;
            color: gold;
        }
    }

    @media (max-width: 768px) {
        .textoBanner {
          
            top: 35%;
            padding: 15px;
           


            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width:720px) {
        .opcoes ul {
position:relative ;
 
 
            li {
               font-size: 10px;
               
            }
        }

        .textoBanner {
            
            width: 80%;
            padding: 10px;
           
            h1 {
                font-size: 1.8rem;
                
            }

            h2 {
                font-size: 1.2rem;
            }
        }
    }
`;
