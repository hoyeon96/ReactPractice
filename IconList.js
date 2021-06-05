import React from 'react';
import './icon.css';

function IconList({id}) {
    const icons = [
    {
        id: 1,
        name: "github",
        url: "/img/github.svg",
        link: "https://hoyeon96.github.io/githubUi"
    },
    {
        id: 2,
        name: "bootstrap",
        url: "/img/bootstrap.svg",
        link: "https://hoyeon96.github.io/bootstrapUi/"
    },
    {
        id: 3,
        name: "hakjeom_cal",
        url: "/img/calculator.svg",
        link: "https://hoyeon96.github.io/JS_hw/"
    },
    {
        id: 4,
        name: "facebook",
        url: "/img/facebook.svg",
        link: "https://www.facebook.com"
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
    <div className="icons">
        {console.log(icons)}
            {icons.map(icons =>{
                console.log(icons)
            return <div class="iconBox">
                        <a target="blank" href={icons.link}>
                            <img src={icons.url} />
                        </a>
                   </div>;
            })}
    </div>
  );
}

export default IconList;