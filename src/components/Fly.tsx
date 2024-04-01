// import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.section`
.flier {
	pointer-events: none;
}

.flier > * {
/* Adjust animation duration to change the element’s speed */
        animation: fly 50s linear infinite;
        pointer-events: none !important;
	top: 0;
	left: 0;
	transform: translateX(-120%) translateY(-120%) rotateZ(0);
	position: fixed;
	animation-delay: 1s;
	z-index: 999999;
}

 /* Keyframe values control where the element will begin
    and end its trajectory across the screen. Each rule
    represents a path the element follows across the screen. */


@keyframes fly {

	98.001%, 0% {
                display: block;
		transform: translateX(-200%) translateY(100vh) rotateZ(0deg)
	}

	15% {
		transform: translateX(100vw) translateY(-100%) rotateZ(180deg)
	}

	15.001%, 18% {
		transform: translateX(100vw) translateY(-30%) rotateZ(0deg)
	}

	40% {
		transform: translateX(-200%) translateY(3vh) rotateZ(-180deg)
	}

	40.001%, 43% {
		transform: translateX(-200%) translateY(-100%) rotateZ(-180deg)
	}

	65% {
		transform: translateX(100vw) translateY(50vh) rotateZ(0deg)
	}

	65.001%, 68% {
		transform: translateX(20vw) translateY(-200%) rotateZ(180deg)
	}

	95% {
		transform: translateX(10vw) translateY(100vh) rotateZ(0deg)
	}
}
`;
export default function Fly() {
  return (
    <StyledWrapper>
      <div className="flier">
         <img src="https://i.postimg.cc/hGMyCKKJ/hahaha-removebg-preview.png" alt="Terbang" />
         <img src="https://i.postimg.cc/44j6bb8c/download-removebg-preview.png" alt="yaoming face" />
      </div>
    </StyledWrapper>
  );
}