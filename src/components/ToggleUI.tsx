import React, { useState } from 'react';
import Fly from '@/components/Fly';
import { Toggle } from '@/components/ui/toggle'
import styled from 'styled-components'

const StyledWrapper = styled.section`
    input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #48bb78;
  }`
const ToggleUI: React.FC = () => {
  const [isFlyActive, setIsFlyActive] = useState(false);

  const handleToggleFly = () => {
    setIsFlyActive(!isFlyActive);
  };

  return (
    <StyledWrapper>
    <div>
      <button onClick={handleToggleFly}>
        {isFlyActive ? 'Matikan Fly' : 'Aktifkan Fly'}
      </button>
      {isFlyActive && <Fly />}
    </div>
    </StyledWrapper>
  );
};

export default ToggleUI;
