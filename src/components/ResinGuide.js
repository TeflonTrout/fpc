import React from 'react'
import { Link } from 'react-router-dom';
import resinGuide from "../images/CGCC_Resin.png";
import styles from "./ResinGuide.module.css";

const ResinGuide = () => {
    return (
        <div className={styles['resin-page']}>
            <img src={resinGuide} alt="" width={500} height={500} />
            <h1>Intro to Resin Options - RSN101</h1>
            <div className={styles['container']}>
                <h3>Alright listen up, class is in session! So you just got into resin casting? Awesome, glad to hear it but, you've got a lot to learn before you can graduate. We've got a lot to discuss so let's hop into it, champ!</h3>
            </div>
            <span className={styles['line-break']}></span>
            <div className={styles['container']}>
                <h3>Alright so the first thing we should discuss is safety. There are general safety guidelines when using resin. I'd recommend reading the safety data sheet that comes with your resin. This community takes 0 responsibility for your negligence of safety.</h3>
            </div>
            <span className={styles['line-break']}></span>
            <div className={styles['container']}>
                <h3>Next is the fun part, choosing a resin! "But Teflon, I already know what resin to get." </h3>
            </div>
            <div className={styles['container']}>
                <h3>No you think you know, now pay attention cause I'm only gonna say it once.</h3>
            </div>
            <span className={styles['line-break']}></span>
            <div className={styles['container']}>
                <h3>Do you have a pressure pot? No? That's fine everybody has to start somewhere however, your options are very limited if you want clean castings. If you are just starting and you don't have a pressure pot you're starting point is probably 1 part button molds using <Link href="">EpoxaCast 690</Link>. This stuff takes 24+ hours to cure which can be enough time to work out the air bubbles.</h3>
            </div>
            <div className={styles['container']}>
                <h3>Now that is out of the way lets get into resin options for casting under pressure. I'm going to run through each resin and you can view the above graphic to see if it fits your situation!</h3>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                    className={styles['link']} 
                    to={{ pathname:'https://www.alumilite.com/resins/alumilite-clear/' }}
                    target="_blank">
                        Alumillite Clear
                    </Link>
                </h1>
                <h3>Alumillite Clear is a more recent find for the CGCC resin casters and is a urethane resin with a pot life of 7 minutes and a cure time of 45-90 minutes depending on heat and size. This resin cures clear which is rare for a urethane resin and it will most likely yellow with time. The benefit to Alumillite Clear is that it cures to a 72-80 Shore D hardness which is enough to experiment with triggers! It's also a bit less expensive than other options.</h3>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                    className={styles['link']} 
                    to={{ pathname:"https://www.smooth-on.com/products/task-9/"}} 
                    target="_blank">
                        Task 9
                    </Link>
                </h1>
                <img src="https://www.smooth-on.com/pw/site/assets/files/10340/task9-combo-533x400.jpg" alt="" width={200} />
                <h3>Task 9 (here on referred to as T9) is a favorite among CGCC resin casters and my personal favorite. T9 offers a flexible 7 minute pot life and cures in a timely 1 hour! In addition it cures to about 85 Shore D hardness which is hard enough for Buttons, Sticks, Trigggers *AND* Shells! If you want to start making sticks, T9 is highly recommended for the bases. The drawbacks to T9 is that it can be a bit pricey and hard to find.</h3>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                    className={styles['link']} 
                    to={{ pathname:'https://www.smooth-on.com/products/epoxacast-690/'}}
                    target="_blank">
                        EpoxaCast 690
                    </Link>
                    </h1>
                <h3>If you are looking to make crystal clear resin ware this is the resin you are looking for. EpoxaCast 690 (here on referred to as 690) is an epoxy resin and the only epoxy resin on this list. Epoxy resins generally take longer to cure however, the benefit is how clear they can come out. 690 cures to about 80 Shore D hardness which is enough for Buttons, Sticks and Triggers. Now you may be wondering, *Teflon, what about shells?* Hold your horses bud, remember when I said this is an epoxy resin? Epoxy resins have a lower heat deflection temperature and are therefore prone to warping when heated up. You know your sweaty gamer hands? Yeah, they will make this stuff warp like a taffy on a hot day.</h3>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                        className={styles['link']} 
                        to={{ pathname:'https://www.smooth-on.com/products/smooth-cast-326/'}}
                        target="_blank">
                        Smooth Cast 326/327
                    </Link>
                </h1>
                <h3>If you are just starting out with pressurized castings this is a good starting point. Smooth Cast 326 (here on referred to as 326) and Smooth Cast 327 (here on referred to as 327) cure in 1 hour and 4 hours respectively. 326 has a pot life of 9 minutes and 327 has a pot life of 20 minutes. This should be more than enough time to fill your molds, insert any additives and get them under pressure! One thing to note about 326/327, So-Strong RED Pigment can cause the resin to significantly darken and potentially end up with an undesired color.</h3>
            </div>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                        className={styles['link']}
                        to={{ pathname:'https://www.smooth-on.com/products/smooth-cast-325/'}}
                        target="_blank">
                        Smooth Cast 325
                    </Link>
                </h1>
                <h3>So you read about 326/327 and you think you are ready for Smooth Cast 325 (here on referred to as 325) right? *Slow down*, this stuff is stressful. 325 is the fastest curing resin that I'm aware of. We are talking 2.5 minute pot life and 10 minute cure time. So you better know what you are doing. It's definitely possible and many resin casters use it for buttons (Jon is the 325 King) and you can use it for triggers however, it can be a bit flimsy for that use case. </h3>
            </div>
            <span className={styles['line-break']}></span>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link className={styles['link']}>
                        Art Resins
                    </Link>
                </h1>
                <h3>Now I could be a stickler and crush all your hopes and dreams by telling you you can't make GCC parts with art resins but, I'd be lying. You definitely can however, most end up being to soft to recommend. I'd say skip the art resins and go for something a little higher quality, you can thank me later.</h3>
            </div>
            <span className={styles['line-break']}></span>
            <div className={styles['container']}>
                <h1 className={styles['centered-head']}>
                    <Link 
                        className={styles['link']}
                        to={{ pathname:'https://bjbenterprises.com/index.php/polyurethanes/castable/flexible/water-clear/wc-565-a-b-446/' }}
                        target="_blank">
                        WC-565
                    </Link>
                </h1>
                <h3>This section is separated from the others because this isn't a resin but rather a polyurethane elastomer. Now what this means is that when fully cured it has the properties of resin however it is softer and spongier like rubber. WC-565 (here on referred to as 565) is the only reliable material for capping sticks. When cured it has very similar properties to OEM stick caps with the caveat of being very expensive! I'm making this it's own section in hopes that one day another alternative is found.</h3>
            </div>
        </div>
    )
}

export default ResinGuide
