import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Aman Maharshi</title>
                <meta name="author" content="Aman Maharshi" />
                <meta
                    name="description"
                    content="Hi there, I'm a Frontend Developer with a knack for building responsive, efficient and modern
                    web applications. I have worked with both corporate and government sectors on building and maintaining large scale applications."
                />
                <meta name="keywords" content="aman maharshi, aman, maharshi, portfolio, front end developer, font end engineer, web designer, ui developer, programmer, india" />

                <link rel="icon" href="/favicon.ico" />

                <script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>
            </Head>

            <Home />
        </>
    )
}

export default HomePage
