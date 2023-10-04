import React from 'react';
import "./WorkCardStyles.css";
import pro1 from "../images/portfolio-img.png"
import { NavLink } from 'react-router-dom';
import pro2 from "../images/twitter-clone.png"
import pro3 from "../images/ecommerce.png";
import pro4 from "../images/news.png";
import pro5 from "../images/textutils.png";
import pro6 from "../images/whatsapp-clone.png";

const WorkCard = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>My Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={pro6} alt='img-pro'/>
                    <h2 className='project-title'>Whatsapp Clone</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit ametmy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://whatsapp-clone-4be9c.web.app" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro2} alt='img-pro'/>
                    <h2 className='project-title'>Twitter Clone</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://twitter-clone-65aaa.web.app" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro1} alt='img-pro'/>
                    <h2 className='project-title'>My Portfolio</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://my-portfolio-bb832.web.app" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro3} alt='img-pro' />
                    <h2 className='project-title'>Ecommerce Website</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://ecommerce-website-ab631.web.app" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro4} alt='img-pro' />
                    <h2 className='project-title'>News App</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://news-app-e3a50.web.app" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={pro5} alt='img-pro' />
                    <h2 className='project-title'>Textutils</h2>
                    <div className='pro-details'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='pro-btns'>
                            <NavLink to="https://textutils-a93c4.web.app/" className="btn" target='_blank'>Click Here</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkCard
