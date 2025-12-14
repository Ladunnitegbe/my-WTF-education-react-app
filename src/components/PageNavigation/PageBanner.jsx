//  ;
import Clock from "./PageNavigation_images/Clock.svg?react";
import Location from "./PageNavigation_images/Location.svg?react";
import Flag from "./PageNavigation_images/Flag.svg?react";
import ArrowDown from "./PageNavigation_images/ArrowDown.svg?react";
import Facebook from "./PageNavigation_images/Facebook.svg?react";
import Twitter from "./PageNavigation_images/Twitter.svg?react";
import Skype from "./PageNavigation_images/Skype.svg?react";
import Linkedin from "./PageNavigation_images/Linkedin.svg?react";

export function PageBanner() {
  return (
    <>
      <div className="page-banner">
        <section className="page-banner__content">
          <span>
            {" "}
            <Clock className="page-banner__content___icon" /> Working : Monday
            -Friday.9:am - 5:Pm
          </span>
          <span>
            {" "}
            <Location className="page-banner__content___icon" /> Hudson,
            Wisconsin(WI), 54016
          </span>
        </section>

        <section className="page-banner__iconswrapper">
          <div className="page-banner___changelang">
            <Flag className="page-banner___changelang_icon" />
            English
            <ArrowDown className="page-banner___changelang_icon" />
          </div>
          <div className="page-banner___icons">
            <Facebook className="page-banner__icon" />
            <Twitter className="page-banner__icon" />
            <Skype className="page-banner__icon" />
            <Linkedin className="page-banner__icon" />
          </div>
        </section>
      </div>
    </>
  );
}
