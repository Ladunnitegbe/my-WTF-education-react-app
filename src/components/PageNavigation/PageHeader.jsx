import "./PageNavigation.css";
import EdunityLogo from "../../assets/images/PageNavigation_images/EdunityLogo.svg?react";
import Search from "../../assets/images/PageNavigation_images/Search.svg?react";
import PersonIcon from "../../assets/images/PageNavigation_images/PersonIcon.svg?react";
import Button from "../button/Button.jsx"



export function PageHeader() {
  return (
    <>
    <section className="page-header">
        <div className="page-header_logo">
            <EdunityLogo />
        </div>
        <div className="page-header_links">
            <a href="#" className="page-header___link">Home</a>
            <a href="#" className="page-header___link">About Us</a>
            <a href="#" className="page-header___link">Courses</a>
            <a href="#" className="page-header___link">Pages</a>
            <a href="#" className="page-header___link">Blog</a>
            <a href="#" className="page-header___link">Contact</a>
        </div>
        <div className="page-header_contact">
            <Search className="page-header_contact___icon" />
            <PersonIcon className="page-header_contact___icon personicon" />
            <Button className="page-header_contact___button">Contact</Button>
        </div>

    </section>
    </>
  );
}