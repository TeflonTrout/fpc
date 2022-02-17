import React, { useEffect } from 'react';
import ModalImage from "react-modal-image";
import styles from './Portfolio.module.css';
import './modal.css';
import ProgressiveImage from 'react-progressive-graceful-image';

const Portfolio = () => {
    useEffect(() => {
        document.querySelector("body").scrollTo(0,0)
      }, [])

    return (
        <div className={styles['portfolio']}>
            <h1 className={styles['heading']}>Testimonials</h1>
            <div className={styles['testimonials-left']}>           
                <div className={styles['quote-box-left']}>
                    <h3><p className={styles['quote-mark-left']}>"</p>Great quality resin and one of my go-to's in a pinch on a collaboration project. 
                        [He does] great work and get[s] it done super quick, while also making sure everything is up to snuff with my vision and your standards.
                    Also a top notch lad in general.<p className={styles['quote-mark-right']}>"</p></h3>
                    <h1 className={styles['author']}>
                        <img src={`https://pbs.twimg.com/media/DzAo42-WoAEvaMk?format=jpg&name=4096x4096`} alt=""/>
                        <a href="https://twitter.com/ControlInColor" target="_blank" rel="noreferrer">
                            - Joe Marchesi, Owner of Control in Color
                        </a>
                    </h1>
                </div>
            </div>
            <div className={styles['testimonials-right']}>
                <div className={styles['quote-box-left']}>
                    <h3><p className={styles['quote-mark-left']}>"</p>FPC was one of the first people I bought from 
                    and couldn't be happier. The quality is amazing and consistent and the people are even better! 
                    Bought over 12 sets from them at this point (sticks, triggers, abxy, the works!) 
                    and the results + communication was on point!<p className={styles['quote-mark-right']}>"</p></h3>
                    <h1 className={styles['author']}>
                        <img src="https://pbs.twimg.com/profile_images/1472764312708124673/BFqC30IS_400x400.jpg" alt=""/>
                        <a href="https://twitter.com/Kubbymo" target="_blank" rel="noreferrer">
                            - Kubby, Owner of Kubbymo Customs
                        </a>
                    </h1>
                </div>
            </div>
            <h1 className={styles['heading']}>Past Work</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/CI6zELl.jpg" 
                        medium="https://i.imgur.com/CI6zELl.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/jPgnmkD.jpg" 
                        medium="https://i.imgur.com/jPgnmkD.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/knIyywL.jpg" 
                        medium="https://i.imgur.com/knIyywL.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/J7jmjwT.jpg" 
                        medium="https://i.imgur.com/J7jmjwT.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/W6iJ6IH.jpg" 
                        medium="https://i.imgur.com/W6iJ6IH.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/NoscLhi.jpg" 
                        medium="https://i.imgur.com/NoscLhi.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/iC8sjwj.jpg" 
                        medium="https://i.imgur.com/iC8sjwj.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/NV941rm.jpg" 
                        medium="https://i.imgur.com/NV941rm.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/XMznLOT.jpg" 
                        medium="https://i.imgur.com/XMznLOT.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/PBmKQpt.jpg" 
                        medium="https://i.imgur.com/PBmKQpt.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/R0cwP3X.jpg" 
                        medium="https://i.imgur.com/R0cwP3X.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/pLzlzj0.jpg" 
                        medium="https://i.imgur.com/pLzlzj0.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/mSTAQFV.jpg" 
                        medium="https://i.imgur.com/mSTAQFV.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/jCRgmVO.jpg" 
                        medium="https://i.imgur.com/jCRgmVO.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/7myJnnX.jpg" 
                        medium="https://i.imgur.com/7myJnnX.jpg"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Resin Ware</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/NC8SxFp.jpg" 
                        medium="https://i.imgur.com/NC8SxFp.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/Qm2kSvM.jpg" 
                        medium="https://i.imgur.com/Qm2kSvM.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/J7dLEF8.jpg" 
                        medium="https://i.imgur.com/J7dLEF8.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/Iksh8sK.jpg" 
                        medium="https://i.imgur.com/Iksh8sK.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/ZG4DJls.jpg" 
                        medium="https://i.imgur.com/ZG4DJls.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/ZnHkGKh.jpg" 
                        medium="https://i.imgur.com/ZnHkGKh.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/I9V9Qff.jpg" 
                        medium="https://i.imgur.com/I9V9Qff.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/NlAKvNG.jpg" 
                        medium="https://i.imgur.com/NlAKvNG.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/JEiWtk4.jpg" 
                        medium="https://i.imgur.com/JEiWtk4.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/WPyktjN.jpg" 
                        medium="https://i.imgur.com/WPyktjN.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/lib9Mdq.jpg" 
                        medium="https://i.imgur.com/lib9Mdq.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/qpoAJIz.jpg" 
                        medium="https://i.imgur.com/qpoAJIz.jpg"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Box Controllers</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/QfSh8Zx.jpg" 
                        medium="https://i.imgur.com/QfSh8Zx.jpg"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.imgur.com/7gSjOfA.jpg" 
                        medium="https://i.imgur.com/7gSjOfA.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
