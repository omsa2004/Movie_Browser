import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero text="Welcom to React Home" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur molestias necessitatibus cupiditate exercitationem ea obcaecati aut ducimus aliquid eum.
                        </p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;