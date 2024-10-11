import React from "react";
import styled from 'styled-components';

const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 13px 30px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    border: 2px solid ${props => 
        props.page === "profile-page" || "find-pro"
            ? "#E5E5E5"
            : props.variant === "yale-blue" 
                ? "#023d7bff" 
                : "#1f78b4ff"           
    };
    background-color: ${props => 
        props.page === "profile-page" || "find-pro"
            ? "white"
            : props.variant === "yale-blue" 
                ? "#023d7bff" 
                : "#1f78b4ff"           
    };
    color: ${props => 
        props.page === "profile-page" || "find-pro"
            ? "black"
            : "white"          
    };
    text-transform: uppercase;

    &:hover {
        background-color: white;
        color: ${props => 
            props.variant === "yale-blue" 
                ? "#023d7bff" 
                : "#1f78b4ff"
        };
    }
`;


const Button = ({type, variant, id, page, onClick, children}) => {

    return(
        <ButtonComponent 
            className = "reusable-btn"
            type = {type ? type : "button"}
            variant = {variant}
            id = {id}
            onClick = {onClick}
            page = {page}
        >
            {children}
        </ButtonComponent>
    )
}

export default Button;