import Head from "next/head";

export default function Home() {
    return (
        <>
        <Head>
            <title>sofiasbio</title>
            <meta></meta>
        </Head>
            <div id="navbar">
                    <span>S&#129504;FIA</span>
                </div>
            <div id="container">
                <div id="topsection">
                    <img src="profile.png" alt="profile pic" id="profilepic"/>
                    <div id="topcontainer">
                        <h1>Hi! I'm Sofia Sanchez</h1>
                        <p>I'm a bioengineering student based out of Mexico, obsesed with biotech innovation + startups.
                            What I'm creating:
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div id="project-box">
                        <img src="labmade.png" alt="cotton" id="projectimg"/>
                        <div className="text">
                            <h3>Labmade</h3>
                            <p>What if we could grow cotton 10x faster and using 90% less water?</p>
                        </div>
                    </div>
                    <div id="project-box">
                        <img src="substack.png" alt="cell" id="projectimg"/>
                        <div className="text">
                            <h3>Substack</h3>
                            <p>Stories on bioengineering, startups, and my journey in both!</p>
                        </div>
                    </div>
                    <div id="project-box">
                        <img src="obio.png" alt="podcast logo" id="projectimg"/>
                        <div className="text">
                            <h3>Podcast</h3>
                            <p>Global leaders growing the future</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}