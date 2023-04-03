import React from 'react';
import styled from "styled-components";

interface IProps {
    direction?: 'row' | 'column'
}

const CenterWrap = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.direction || 'row'};
  height: 100%;
  width: 100%;
`

export default CenterWrap;