import styles from "../styles/Home.module.css"

const Home = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.rowOne}>
                    <div className={styles.mainSocial}></div>
                    <div className={styles.mainDetails}>
                        <h1 className={styles.title}>Aman Maharshi</h1>
                        <p className={styles.desc}>
                            I'm a <b>frontend developer</b> who builds delightful web experiences. I can advise your company about the <b>web platform</b>, performance, creative user interactions, and usable machine learning.
                        </p>
                    </div>
                    <div className={styles.mainPicture}>
                        <div className={styles.imageWrapper}>
                            <img src="/profilepicture.jpg" alt="profile picture" />
                        </div>
                    </div>
                </div>

                <div className={styles.rowTwo}>
                    <div className={styles.rowTwoContent}>
                        <p>I've just ended an 8 year stint as a Senior Engineer at Google, where I worked on making music and art and all sorts of creative interactions with Machine Learning, web components and web standards, and the guts of Chromium. You can read a bit more about me and my past work. Most of my personal code is on GitHub or on Glitch.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
