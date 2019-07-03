import React from 'react';
import NavBar from './NavBar';

export default function Header() {
    return (
        <header className="header">
            <NavBar />
            <div className="header__content">
                <div className="content-box">
                    <h1 className="heading-primary u-margin-bottom-medium">
                        <span className="heading-primary--main u-default-text-shadow">freeCodeCamp</span>
                        <span className="heading-primary--sub u-default-text-shadow">Introductions</span>
                    </h1>
                    <p className="paragraph u-default-text-shadow u-animate-bottom-normal u-margin-bottom-medium">Welcome to our meetup! 
                    Feel free to introduce yourself to the group. Let us know who you are and what you do!</p>
                    <div className="content-box__actions">
                        <button className="button button__emphasize u-default-text-shadow u-animate-bottom-slower">Say hi</button>
                        <button className="button button__emphasize u-default-text-shadow u-animate-bottom-slower">Meet the group</button>
                    </div>
                </div>
                <div className="hero-box" ></div>
            </div>
        </header>
    );
}