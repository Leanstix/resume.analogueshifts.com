"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ApplicationLogo from "./ApplicationLogo";

//Submenu Components
import BuildersSubMenu from "./BuildersSubmenu";
import ResumesSubMenu from "./ResumesSubmenu";
import CoverLetterSubMenu from "./coverLetterSubmenu";
import CVSubMenu from "./cvsSubmenu";
import ResourcesSubMenu from "./ResourcesSubmenu";
import LeftArrowImage from "@/public/left-arrow.png";
import Image from "next/image";
import FileImage from "@/public/file-icon.png";
import GridImage from "@/public/grid-icon.png";
import LeafImage from "@/public/leaf.png";
import QuestionIcon from "@/public/question-icon.png";
import PhoneIcon from "@/public/phone-icon.png";

export default function NavBar() {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);
  const [transformOne, setTransformOne] = useState(0);
  const [transformTwo, setTransformTwo] = useState(0);
  const [bodyRotate, setBodyRotate] = useState(0);
  const [position, setPosition] = useState(-1200);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMobileMenu, setSelectedMobileMenu] = useState("");
  const [subMenuComponent, setSubMenuComponent] = useState("");

  const toggleMenu = () => {
    if (position !== 0) {
      setPosition(0);
      setOpacity(0);
      setTransformOne(-90);
      setTransformTwo(-10);
      setBodyRotate(45);
    } else {
      setPosition(-1200);
      setOpacity(1);
      setTransformOne(0);
      setTransformTwo(0);
      setBodyRotate(0);
    }
  };

  const buldersLink = [
    {
      name: "RESUME BUILDER",
      path: "/",
    },
    {
      name: "COVER LETTER GENERATOR",
      path: "/cover-letter-builder",
    },
    {
      name: "CV MAKER",
      path: "/cv-maker",
    },
  ];

  const templateLinks = [
    {
      name: "Professional",
      path: "/resume-templates#professional",
    },
    {
      name: "Modern",
      path: "/resume-templates#modern",
    },
    {
      name: "Creative",
      path: "/resume-templates#creative",
    },
    {
      name: "Simple",
      path: "/resume-templates#simple",
    },
  ];

  const resumeHelpLinks = [
    { name: "What is a resume?", path: "/blog/resume-help/what-is-a-resume" },
    {
      name: "How to make a resume",
      path: "/blog/resume-help/how-to-write-a-resume",
    },
    { name: "The best resume format", path: "/blog/resume-help/resume-format" },
    {
      name: "Skills for your resume",
      path: "/blog/resume-help/skills-for-resume",
    },
    {
      name: "Resume summary examples",
      path: "/blog/resume-help/resume-summary",
    },
  ];

  const coverLetterTemplateLinks = [
    {
      name: "Professional",
      path: "/cover-letter-templates#professional",
    },
    {
      name: "Modern",
      path: "/cover-letter-templates#modern",
    },
    {
      name: "Creative",
      path: "/cover-letter-templates#creative",
    },
    {
      name: "Simple",
      path: "/cover-letter-templates#creative",
    },
  ];

  const coverLetterHelpLinks = [
    {
      name: "What is a cover letter?",
      path: "/blog/cover-letter-help/what-is-a-cover-letter",
    },
    {
      name: "How to write a cover letter",
      path: "/blog/cover-letter-help/how-to-write-a-cover-letter",
    },
    {
      name: "How to start a cover letter",
      path: "/blog/cover-letter-help/how-to-start-a-cover-letter",
    },
    {
      name: "Best cover letters of 2023",
      path: "/blog/cover-letter-help/best-cover-letters",
    },
    {
      name: "Cover letter format for a job",
      path: "/blog/cover-letter-help/cover-letter-format",
    },
  ];

  const cvTemplateLinks = [
    {
      name: "Business",
      path: "/cv-templates#business",
    },
    {
      name: "Graduate",
      path: "/cv-templates#graduate",
    },
    {
      name: "Research",
      path: "/cv-templates#research",
    },
    {
      name: "Writer",
      path: "/cv-templates#writer",
    },
  ];

  const cvHelpLinks = [
    {
      name: "What is a cv?",
      path: "/blog/cv-help/what-is-a-cv",
    },
    {
      name: "How to write a cv for a job",
      path: "/blog/cv-help/how-to-write-a-cv",
    },
    {
      name: "Cv vs Resume: what's the difference?",
      path: "/blog/cv-help/cv-vs-resume",
    },
    {
      name: "How to write an academic cv",
      path: "/blog/cv-help/academic-cv",
    },
    {
      name: "Cv examples for students",
      path: "/blog/cv-help/cv-examples-for-students",
    },
  ];

  const faqsData = [
    {
      title: "Technical Assistance",
      path: "/faq#technical-assistance",
    },
    {
      title: "Resume FAQs",
      path: "/faq#resume-faqs",
    },
    {
      title: "Cover Letter FAQs",
      path: "/faq#cover-letter-faqs",
    },
    {
      title: "CV FAQs",
      path: "/faq#cv-faqs",
    },
  ];

  const blogData = [
    {
      title: "Job Hunting",
      path: "/blog/job-hunting",
    },
    {
      title: "Interview Help",
      path: "/blog/interview",
    },
    {
      title: "Career Advice",
      path: "/blog/career-advice",
    },
  ];

  const updateSelectedMenu = (value) => {
    if (selectedMenu === value) {
      setSelectedMenu("");
    } else {
      setSelectedMenu(value);
    }
  };

  const navLinks = ["Builders", "Resumes", "Cover Letters", "CVs", "Resources"];

  useEffect(() => {
    switch (selectedMenu) {
      case "":
        setSubMenuComponent("");
        break;
      case "Builders":
        setSubMenuComponent(<BuildersSubMenu />);
        break;
      case "Resumes":
        setSubMenuComponent(<ResumesSubMenu />);
        break;
      case "Cover Letters":
        setSubMenuComponent(<CoverLetterSubMenu />);
        break;
      case "CVs":
        setSubMenuComponent(<CVSubMenu />);
        break;
      case "Resources":
        setSubMenuComponent(<ResourcesSubMenu />);
        break;
      default:
        setSubMenuComponent("");
        break;
    }
  }, [selectedMenu]);

  useEffect(() => {
    setSelectedMenu("");
    if (opacity === 0) {
      toggleMenu();
    }
  }, [pathname]);

  return (
    <nav className="w-full z-50">
      <div
        style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
        className="w-[calc(100%-12px)] h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed z-50 rounded-full px-7 flex justify-between items-center"
      >
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
            </Link>
          </div>
        </div>
        <div className="flex gap-6 max-[850px]:hidden">
          {navLinks.map((menu) => {
            return (
              <button
                onClick={() => updateSelectedMenu(menu)}
                key={() => Math.randow() * Math.random()}
                className="border-none relative menu-link"
              >
                <p
                  className={`text-base ${
                    selectedMenu === menu
                      ? "text-AnalogueShiftsTextColor"
                      : "text-black/70"
                  }  ${
                    selectedMenu !== menu && "hover:text-black"
                  } font-medium`}
                >
                  {menu}
                </p>
                <div
                  className={`w-1 h-1 rounded-full bg-AnalogueShiftsTextColor absolute left-[50%] -bottom-2.5 ${
                    selectedMenu === menu ? "opacity-100" : "opacity-0"
                  } `}
                ></div>
              </button>
            );
          })}
          <Link
            className="border-black/70 border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2 px-12 rounded-lg"
            href="/login"
          >
            Login
          </Link>
        </div>
        <div
          style={{ transform: `rotate(${bodyRotate}deg)` }}
          onClick={toggleMenu}
          className="hidden max-[850px]:flex duration-300 origin-left flex-col w-5 h-3 cursor-pointer justify-between"
        >
          <div
            style={{ transform: `rotate(${transformOne}deg)` }}
            className="w-full duration-300 h-0.5 bg-black/80 rounded"
          ></div>
          <div
            style={{ opacity: opacity }}
            className="w-full h-0.5 duration-300 bg-black/80 rounded"
          ></div>
          <div
            style={{ transform: `translateY(${transformTwo}px)` }}
            className="w-full h-0.5 bg-black/80 duration-300 rounded"
          ></div>
        </div>
        {subMenuComponent}
      </div>
      <div
        style={{ left: `${position}px` }}
        className="w-[80%] h-screen static hidden duration-300 max-[850px]:fixed z-50 bg-white py-6 px-3.5 max-[850px]:flex flex-col gap-5"
      >
        {navLinks.map((data) => {
          if (selectedMobileMenu === "" || selectedMobileMenu === data) {
            return (
              <div
                onClick={() => {
                  if (selectedMobileMenu === data) {
                    setSelectedMobileMenu("");
                  } else {
                    setSelectedMobileMenu(data);
                  }
                }}
                key={() => Math.randow() * Math.random()}
                className="cursor-pointer w-full py-2 border-b flex items-center gap-2"
              >
                {selectedMobileMenu === data && (
                  <Image
                    src={LeftArrowImage}
                    alt="Back arrow"
                    className=" w-3 h-3"
                  />
                )}
                <p
                  className={`font-medium text-base ${
                    selectedMobileMenu === data
                      ? "text-AnalogueShiftsTextColor"
                      : "text-black/80"
                  }`}
                >
                  {data}
                </p>
              </div>
            );
          }
        })}
        {selectedMobileMenu === "Builders" && (
          <div className="w-full h-[280px] overflow-y-auto pt-2 flex flex-col gap-3">
            {buldersLink.map((link) => {
              return (
                <Link
                  key={() => Math.randow() * Math.random()}
                  href={link.path}
                  className="flex gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={FileImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-60"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
        {selectedMobileMenu === "Resumes" && (
          <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link
                href="/resume-templates"
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={GridImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-60"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  RESUME TEMPLATES
                </p>
              </Link>
              <div className="w-full flex flex-col">
                {templateLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/blog/resume-help"
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={LeafImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">RESUME HELP</p>
              </Link>
              <div className="w-full flex flex-col">
                {resumeHelpLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/resume-samples" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  RESUME EXAMPLES
                </p>
              </Link>
            </div>
          </div>
        )}
        {selectedMobileMenu === "Cover Letters" && (
          <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link
                href="/cover-letter-templates"
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={GridImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-60"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  COVER LETTER TEMPLATES
                </p>
              </Link>
              <div className="w-full flex flex-col">
                {coverLetterTemplateLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/blog/cover-letter-help"
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={LeafImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  COVER LETTER HELP
                </p>
              </Link>
              <div className="w-full flex flex-col">
                {coverLetterHelpLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/cover-letter-examples"
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  COVER LETTER EXAMPLES
                </p>
              </Link>
            </div>
          </div>
        )}
        {selectedMobileMenu === "CVs" && (
          <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link href="/cv-template" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={GridImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-60"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">
                  CV TEMPLATES
                </p>
              </Link>
              <div className="w-full flex flex-col">
                {cvTemplateLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/blog/cv-help" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={LeafImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">CV HELP</p>
              </Link>
              <div className="w-full flex flex-col">
                {cvHelpLinks.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/cv-examples" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">CV EXAMPLES</p>
              </Link>
            </div>
          </div>
        )}
        {selectedMobileMenu === "Resources" && (
          <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link href="/faqs" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={QuestionIcon}
                    alt="File Icon"
                    className="w-4 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">FAQS</p>
              </Link>
              <div className="w-full flex flex-col">
                {faqsData.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/blog" className="flex gap-3 items-center">
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-80"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">BLOG</p>
              </Link>
              <div className="w-full flex flex-col">
                {blogData.map((data) => {
                  return (
                    <Link
                      key={() => Math.randow() * Math.random()}
                      href={data.path}
                      className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="w-full flex flex-col gap-4 pt-8">
          <Link
            className="bg-AnalogueShiftsTextColor w-full flex justify-center items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
            href="#"
          >
            Build My Resume
          </Link>
          <Link
            className="border-black/70 w-full flex justify-center items-center border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
            href="/login"
          >
            Login
          </Link>
        </div>
        <div className="py-2 border-t absolute bottom-0 w-full flex justify-center items-center gap-2">
          <Image
            src={PhoneIcon}
            alt="Phone Icon"
            className="w-4 h-4 opacity-70"
          />
          <p className=" text-[13px] font-normal text-black/60 tracking-normal">
            Monday to Friday, 8AM – 12AM (Midnight) and Saturdays and Sundays,
            10AM – 6PM EDT +234806708343
          </p>
        </div>
      </div>
    </nav>
  );
}
