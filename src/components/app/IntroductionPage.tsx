import IntroductionImage from '../../assets/introduction_img .jpg';
import Arrow_Button from '../../assets/Arrow_Button.png';
import { useNavigate } from 'react-router-dom';

const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chant');
  };

  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
      <img 
        src={IntroductionImage} 
        alt="Introduction" 
        className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"
      />
      <div className="absolute bottom-[12%] right-[13%]">
        <img 
          src={Arrow_Button} 
          alt="Enter Button" 
          onClick={handleClick} 
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default IntroductionPage;
