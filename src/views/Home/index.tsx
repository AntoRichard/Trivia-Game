import React, { FC } from "react";
import Exam from "../../assets/image/exam.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { appRoutes } from "../../routes/routeConstants/appRoutes";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const navigation = useNavigate();

  const handleStart = () => {
    navigation(appRoutes.GAME);
  };
  return (
    <div className="home">
      <div className="content">
        <img src={Exam} alt="exam" />
        <h4>Start Assessment</h4>
        <p>There will be infinite number of Question</p>
        <Button className="get-started" onClick={handleStart}>
          Get Started
          <img src={RightArrow} alt="right arrow" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
