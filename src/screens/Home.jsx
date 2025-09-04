import React, { useState, useEffect } from "react";
import my_pic from '../assets/my-pic.png';
import styls from '../styles/Home.module.css';

const Home = () => {
  const name = "FULL STACK DEVELOPER";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = 150;

    if (isDeleting) speed = 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < name.length) {
        setText(name.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(name.slice(0, index - 1));
        setIndex(index - 1);
      } else if (index === name.length) {
        // thoda rukne k liye
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, name]);

  return (
    <div className={styls.banner}>
      <div className={styls.text}>
        <div className={styls.profession}>
          <h2>{text}<span className={styls.cursor}>|</span></h2>
        </div>
        <div className={styls.name}>
          <h1>Hello, My Name is<br/> Abdul Raqeeb</h1>
        </div>
        <div className={styls.summary}>
          <p>
            I’m Abdul Raqeeb, a Teacher & Aspiring Web Developer,<br/> passionate
            about coding and creating digital projects
          </p>
        </div>
        <div className={styls.buttons}>
          <a
            href="https://github.com/AbdulRaqeebGit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-raqeeb-5908a931a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid black",
              background: "white"
            }}
          >
            Linkedin
          </a>
        </div>
      </div>

      <div className={styls.myPic}>
        <div className={styls.circle}>
          <img src={my_pic} alt="My Pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
