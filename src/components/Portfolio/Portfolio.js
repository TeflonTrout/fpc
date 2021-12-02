import React, { useEffect } from 'react';
import ModalImage from "react-modal-image";
import styles from './Portfolio.module.css';
import './modal.css';

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
                        <img src="https://pbs.twimg.com/profile_images/1460448549309661192/namz0TYc_400x400.jpg" alt=""/>
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
                        small="https://i.ibb.co/yPscXdT/orange.png" 
                        medium="https://i.ibb.co/yPscXdT/orange.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/8xDTWSc/candypanasonic1.png" 
                        medium="https://i.ibb.co/8xDTWSc/candypanasonic1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/DkNgfh6/candypanasonic2.png" 
                        medium="https://i.ibb.co/DkNgfh6/candypanasonic2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/dG1YYtV/blue-green.png" 
                        medium="https://i.ibb.co/dG1YYtV/blue-green.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/HgTP6Yk/luigi1.png" 
                        medium="https://i.ibb.co/HgTP6Yk/luigi1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/Ny0JDrk/luigi2.png" 
                        medium="https://i.ibb.co/Ny0JDrk/luigi2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/NVY9DfW/zombie.png" 
                        medium="https://i.ibb.co/NVY9DfW/zombie.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/9ghP0zg/panasonic1.png" 
                        medium="https://i.ibb.co/9ghP0zg/panasonic1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/j8n7Pxy/panasonic2.png" 
                        medium="https://i.ibb.co/j8n7Pxy/panasonic2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/NS4cnPX/pumpkin.png" 
                        medium="https://i.ibb.co/NS4cnPX/pumpkin.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/6bcgBjj/purplefoil1.png" 
                        medium="https://i.ibb.co/6bcgBjj/purplefoil1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/42pD73M/watermelon.png" 
                        medium="https://i.ibb.co/42pD73M/watermelon.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/4Z124K3/turqoise.png" 
                        medium="https://i.ibb.co/4Z124K3/turqoise.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/hssqmNH/riptide.png" 
                        medium="https://i.ibb.co/hssqmNH/riptide.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/4Z5Qp2c/n64.png" 
                        medium="https://i.ibb.co/4Z5Qp2c/n64.png"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Resin Ware</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/wJ65w8c/sticks.png" 
                        medium="https://i.ibb.co/wJ65w8c/sticks.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/kSpQWFJ/adapterprup2.png" 
                        medium="https://i.ibb.co/kSpQWFJ/adapterprup2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/42ZRxHr/adapterprup1.png" 
                        medium="https://i.ibb.co/42ZRxHr/adapterprup1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/LQ6dZhq/resinbackshells1.png" 
                        medium="https://i.ibb.co/LQ6dZhq/resinbackshells1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/ZB7KMgZ/resinbackshells2.png" 
                        medium="https://i.ibb.co/ZB7KMgZ/resinbackshells2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/TvbbVPR/adapterorange1.png" 
                        medium="https://i.ibb.co/TvbbVPR/adapterorange1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/jwnkKqX/adapterorange2.png" 
                        medium="https://i.ibb.co/jwnkKqX/adapterorange2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/0rssw97/buttons.png" 
                        medium="https://i.ibb.co/0rssw97/buttons.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/SvY6K2w/buttons1.png" 
                        medium="https://i.ibb.co/SvY6K2w/buttons1.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/Wx0Q8n1/buttons2.png" 
                        medium="https://i.ibb.co/Wx0Q8n1/buttons2.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/6ZFBdxT/plugcovers.png" 
                        medium="https://i.ibb.co/6ZFBdxT/plugcovers.png"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Box Controllers</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/ys3n8T2/troutbox.png" 
                        medium="https://i.ibb.co/ys3n8T2/troutbox.png"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://i.ibb.co/60BGw6r/dkbox.png" 
                        medium="https://i.ibb.co/60BGw6r/dkbox.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
