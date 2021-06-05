import React from 'react';
import styled from 'styled-components';
import './tooltip.css';

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
`;

const Tooltip = ({children, preview, key})=> {
  if(preview){
    return (
      <Container>
        {children}
        <Content className="tooltip">
            <img className="previewImage" src={preview} index={key} alt="preview" /></Content>
      </Container>
    );
  } else {
    return (
      <Container>
        {children}
      </Container>
    );
  }
}

export default Tooltip;