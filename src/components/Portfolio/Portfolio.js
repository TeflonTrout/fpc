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
                        small="https://lh3.googleusercontent.com/wfcXX_rMWKqVeHRi5bck-9QgxdbcmvRrHX_DPnj9eCCP4RZFqEQNf6QpojXeR0Xa7edzXazE-0IWdnYvgMgoPymEHloOfotMcOnm-5EIPUFPxzkzZfQxR3n7yrAGmpwyt_niF2iO7g=w2400" 
                        medium="https://lh3.googleusercontent.com/wfcXX_rMWKqVeHRi5bck-9QgxdbcmvRrHX_DPnj9eCCP4RZFqEQNf6QpojXeR0Xa7edzXazE-0IWdnYvgMgoPymEHloOfotMcOnm-5EIPUFPxzkzZfQxR3n7yrAGmpwyt_niF2iO7g=w2400"
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
                        small="https://lh3.googleusercontent.com/ylHTaWM-HiOgGxLfLSlVoBuZcOZN7kMgQk6YofHcF6syfR4Gw9ZRhh3oFGRqMKYHaC_TyS9XoyAdb7iC3lWWbDG6xVFfNpnFWT6y4jvVAZsJfnKK8cnwM10ZqDsjJZJHXRT_IAQDow=w2400" 
                        medium="https://lh3.googleusercontent.com/ylHTaWM-HiOgGxLfLSlVoBuZcOZN7kMgQk6YofHcF6syfR4Gw9ZRhh3oFGRqMKYHaC_TyS9XoyAdb7iC3lWWbDG6xVFfNpnFWT6y4jvVAZsJfnKK8cnwM10ZqDsjJZJHXRT_IAQDow=w2400"
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
                        small="https://lh3.googleusercontent.com/tK8FRwPTMyoNkbWiTHdNr1ZFFV7-YEfB-Wq1WPA5afwLT8T_t_F_0CJPRwa8tVFR_L4HiZTvkQJ-70UAKuAirnWdIZ_QdCYhuJX1E-5aWdojYuUZHce1SCPuFwdgxAbhIFn0CSmrsw=w2400" 
                        medium="https://lh3.googleusercontent.com/tK8FRwPTMyoNkbWiTHdNr1ZFFV7-YEfB-Wq1WPA5afwLT8T_t_F_0CJPRwa8tVFR_L4HiZTvkQJ-70UAKuAirnWdIZ_QdCYhuJX1E-5aWdojYuUZHce1SCPuFwdgxAbhIFn0CSmrsw=w2400"
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
                        small="https://lh3.googleusercontent.com/vmsYps5k0uU6AZInv4Sibabo_lAQNApIp29h8j1WpXbG_d5yov3IMehX7C4f0h1TEy5fAI5X-fbSyhBODHPqyTzz_RYAwPJIkV76A_0hlJn-HgxN3FAjgC4w6FPABrWA2GXxu7SA6Q=w2400" 
                        medium="https://lh3.googleusercontent.com/vmsYps5k0uU6AZInv4Sibabo_lAQNApIp29h8j1WpXbG_d5yov3IMehX7C4f0h1TEy5fAI5X-fbSyhBODHPqyTzz_RYAwPJIkV76A_0hlJn-HgxN3FAjgC4w6FPABrWA2GXxu7SA6Q=w2400"
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
                        small="https://lh3.googleusercontent.com/AL7a6ANkA2kAYK1Ln_LdBTkTFNfwoVGb-hMtVkFaaEwdjeGjY5KOnZ6IiCrQAunwLiUX-BsihhBPYo30_E1lYzzcX_wkvdMgH2O247t8Q2EtkL2JExJW6HosyQeYbU9-mYH2t-pBSw=w2400" 
                        medium="https://lh3.googleusercontent.com/AL7a6ANkA2kAYK1Ln_LdBTkTFNfwoVGb-hMtVkFaaEwdjeGjY5KOnZ6IiCrQAunwLiUX-BsihhBPYo30_E1lYzzcX_wkvdMgH2O247t8Q2EtkL2JExJW6HosyQeYbU9-mYH2t-pBSw=w2400"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Resin Ware</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://lh3.googleusercontent.com/IV-rwpdvQJH5L83Dw5vL-f529gObxosfX4BsH1wh4YRJnlT1hKEW3950O089LBnuc03glRPwwFsfM2pfq-2BgxS1HGm3chX1K1DT-FgXoThrK8HD7n-SBfCxuYsSkLJpowBpTGsbUQ=w2400" 
                        medium="https://lh3.googleusercontent.com/IV-rwpdvQJH5L83Dw5vL-f529gObxosfX4BsH1wh4YRJnlT1hKEW3950O089LBnuc03glRPwwFsfM2pfq-2BgxS1HGm3chX1K1DT-FgXoThrK8HD7n-SBfCxuYsSkLJpowBpTGsbUQ=w2400"
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
                        small="https://lh3.googleusercontent.com/r3zk9XMNuVbk-R19Sqjz1wlHQvS9AOTaDkqsVx-b-v6WVn_TEpyljPj0I2QjcEAmJTKUBfeCLqUf-ocmcgRfSlGHiIXe-Av8jfmfDl7OJ1Qt7HuS3IzvlWDZWb2fyXPXbUJOnkpLPg=w2400" 
                        medium="https://lh3.googleusercontent.com/r3zk9XMNuVbk-R19Sqjz1wlHQvS9AOTaDkqsVx-b-v6WVn_TEpyljPj0I2QjcEAmJTKUBfeCLqUf-ocmcgRfSlGHiIXe-Av8jfmfDl7OJ1Qt7HuS3IzvlWDZWb2fyXPXbUJOnkpLPg=w2400"
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
                        small="https://lh3.googleusercontent.com/Nw4vjhbTr-qHCJ_9LizWUJ2NCIiScEYZdT5bmHzd-GWD2dS1DagWGPb6TYTX9-yznGkgMliHgLV0cJ9HC_TV7v-qPxYL0nzyEzt_K25_j5UXsgS4iOdj7LyeQ_gARibpXvJYRCHt7Q=w2400" 
                        medium="https://lh3.googleusercontent.com/Nw4vjhbTr-qHCJ_9LizWUJ2NCIiScEYZdT5bmHzd-GWD2dS1DagWGPb6TYTX9-yznGkgMliHgLV0cJ9HC_TV7v-qPxYL0nzyEzt_K25_j5UXsgS4iOdj7LyeQ_gARibpXvJYRCHt7Q=w2400"
                    />
                </div>
            </div>
            <h1 className={styles['heading']}>Box Controllers</h1>
            <div className={styles['grid']}>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://lh3.googleusercontent.com/dopgRJW9FnyxW1GPx1AVdfKAxHDxTYyvNUyx9NXT0AU4BMmZqA4JSdD7PCalu1T1yudNerYZ_uWwi55U6WX9Nl5PzinTNwD6araUKTWuAITcoI0-FqtGBLdkN6HbN-WkCngO22nKGg=w2400" 
                        medium="https://lh3.googleusercontent.com/dopgRJW9FnyxW1GPx1AVdfKAxHDxTYyvNUyx9NXT0AU4BMmZqA4JSdD7PCalu1T1yudNerYZ_uWwi55U6WX9Nl5PzinTNwD6araUKTWuAITcoI0-FqtGBLdkN6HbN-WkCngO22nKGg=w2400"
                    />
                </div>
                <div className={styles['grid-card']}>
                    <ModalImage 
                        hideDownload={true} 
                        hideZoom={true} 
                        small="https://lh3.googleusercontent.com/-isgswcnh5MSoY066gV885aJN8XX8otcHnWiDIUwBbLqyI3De6x7pXnuwXpSab0fTekK4Tw6HMCU1B78Aa-D4GfvSeXI5UQb89zRItfQcO8LXiHMnhiY_z_6wlLnY1RWpbpHlLn3JA=w2400" 
                        medium="https://lh3.googleusercontent.com/-isgswcnh5MSoY066gV885aJN8XX8otcHnWiDIUwBbLqyI3De6x7pXnuwXpSab0fTekK4Tw6HMCU1B78Aa-D4GfvSeXI5UQb89zRItfQcO8LXiHMnhiY_z_6wlLnY1RWpbpHlLn3JA=w2400"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
