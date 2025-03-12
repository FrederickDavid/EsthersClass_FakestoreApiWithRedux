/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

// Styled Components
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #ff7a18, #af002d, #320b86);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 20px 0;
  font-weight: 300;
  line-height: 1.5;
`;

const HeroButton = styled.button`
  background-color: #ff6347;
  color: white;
  font-size: 1.2rem;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

// Keyframes for Gradient Animation
const gradientAnimation = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <style>{gradientAnimation}</style>{" "}
      {/* Insert the keyframes into the component */}
      <HeroSection>
        <HeroTitle>Welcome to Your Future</HeroTitle>
        <HeroSubtitle>
          Empowering you with tools, knowledge, and insights for a brighter
          tomorrow.
        </HeroSubtitle>
        <HeroButton>Get Started</HeroButton>
      </HeroSection>
    </>
  );
};

export default Hero;
