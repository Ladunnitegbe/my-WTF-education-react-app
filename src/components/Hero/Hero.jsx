import "./Hero.css";
import Birdsontree from "../../assets/images/hero_images/birdsontree.png";
import Smilingsun from "../../assets/images/hero_images/smilingsun.png";
import Play from "../../assets/images/hero_images/Play.svg?react";
import Cross from "../../assets/images/hero_images/cross.png";
import Cloud from "../../assets/images/hero_images/cloud.png";
import Button from "../Button/Button.jsx";


export function Hero() {
  return (
    <>
      <section className="hero">
        <aside className=" aside side_image">
          <img
            src={Birdsontree}
            alt="Birds on Tree"
            className="leftside_image"
          />
        </aside>
        <main className="hero_main_content">
            <div className="hero_main_content__title">
                <img src={Cross} alt="Cross" className="hero_main_content__title___crossicon" />
                <h1 className="hero_main_content__title___header">
                    The Best Place TO Learn and Play For Kids
                </h1>
                <p className="hero_main_content__title___paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="btn--primary hero_main_content__title___button">
                    Browse Courses
                </Button>
                <Button className="btn--secondary hero_main_content__title___button playbutton">
                    <Play className="hero_main_content__title___button___icon" />
                </Button>
                <span className="littlebluecircle"></span>
                <a href="#">Watch Now</a>
                <img src={Cloud} alt="Cloud" className="cloudimage" />
            </div>
          
        </main>
        <aside className="aside side_image">
          <img src={Smilingsun} alt="Smiling Sun" className="rightside_image" />
        </aside>
      </section>
    </>
  );
}
