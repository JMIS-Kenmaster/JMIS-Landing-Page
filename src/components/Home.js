import Banner from "../shared/Banner";
import excitedImg from "../images/excited.png";

function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={excitedImg}
        heading="Providing Solutions for any IT needs"
        subheading="Welcome to JM Innovations Services your premier destination for
              cutting-edge technology consulting and IT solutions."
        btn1={"Get Started"}
        btn2={"Get a Quote"}
      />
    </div>
  );
}

export default Home;
