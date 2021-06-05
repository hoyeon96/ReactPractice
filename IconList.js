import React from 'react';
import './icon.css';
import Tooltip from './tooltip';

function IconList() {
    const icons = [
    {
        id: 1,
        name: "github",
        url: "/img/github.svg",
        link: "https://hoyeon96.github.io/githubUi",
        preview: "/img/github_preview.png"
    },
    {
        id: 2,
        name: "bootstrap",
        url: "/img/bootstrap.svg",
        link: "https://hoyeon96.github.io/bootstrapUi/",
        preview: "/img/bootstrap_preview.png"
    },
    {
        id: 3,
        name: "hakjeom_cal",
        url: "/img/calculator.svg",
        link: "https://hoyeon96.github.io/JS_hw/",
        preview: "/img/jshw_preview.png"
    },
    {
        id: 4,
        name: "facebook",
        url: "/img/facebook.svg",
        link: "https://www.facebook.com",
        preview: null
    },
    {
        id: 5,
        name: "instagram",
        url: "/img/instagram.svg",
        link: "https://www.instagram.com"
    },
    {
        id: 6,
        name: "twitter",
        url: "/img/twitter.svg",
        link: "https://www.twitter.com"
    },
    {
        id: 7,
        name: "youtube",
        url: "/img/youtube.svg",
        link: "https://www.youtube.com"
    },
    {
        id: 8,
        name: "email",
        url: "/img/evenlop_open.svg",
        link: "mailto:hoyen96@naver.com"
    },
  ];

  return (
      <div className="contentBox">
        {console.log(icons)}
        {icons.map((icons,index) =>{
            console.log(icons)
            return <Tooltip preview={icons.preview} key={index}>
                    <div className="iconBox" key={index}>
                     <span className="wave"></span>
                        <a target="blank" href={icons.link}>
                            <img src={icons.url} alt="icon"/>
                        </a>
                    </div>
                    </Tooltip>

            })}
      </div>
        
  );
}

export default IconList;