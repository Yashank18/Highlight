import React from "react";
import { Button } from "antd";
import styled from "styled-components";

export default function Header() {
    return (
        <Wrapper>
            <StyledButton>Add Task +</StyledButton>
        </Wrapper>
    );
}

const StyledButton = styled.button`
    background-color: #39394b;
    border : none;
    box-shadow: 0 0 0 0;
    color: #fff;
    font-size: 1.2em;
    `;

const Wrapper = styled.div`
    padding: 4em;
    display: flex;
    flex-direction: row-reverse;
`;