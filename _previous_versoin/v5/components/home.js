import styles from "../styles/Home.module.css"

const Home = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.rowOne}>
                    <div className={styles.mainSocial}>
                        <div className={styles.iconGroup}>
                            <a href="/">
                                <box-icon name="github" type="logo" class={styles.socialIcon}></box-icon>
                            </a>
                            <a href="/">
                                <box-icon type="logo" name="linkedin" class={styles.socialIcon}></box-icon>
                            </a>
                            <a href="/">
                                <box-icon type="logo" name="codepen" class={styles.socialIcon}></box-icon>
                            </a>
                        </div>
                    </div>
                    <div className={styles.mainDetails}>
                        <h1 className={styles.title}>Aman Maharshi</h1>
                        <p className={styles.desc}>
                            I'm a <b>frontend developer</b> who enjoys crafting responsive, efficient and interactive web applications. I have worked with both corporate and government sectors on building and maintaining large scale applications. With every line of code, I strive to make the web a beautiful place.
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
                        <p>Currently I'm working with the following technologies:</p>
                        <div className={styles.technologies}>
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>Next.js</li>
                            </ul>
                            <ul>
                                <li>HTML, CSS / Sass</li>
                                <li>Bootstrap / Material UI / styled-components</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
