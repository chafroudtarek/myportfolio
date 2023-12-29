import HeroImg from "../../../assets/images/hero.png";
import Mycv from "../../../assets/cvtarekchafroud.pdf";
const Hero = () => {
  return (
    <section className="hero_container">
      <div className="left_part">
        <h3>
          Tarek is a <span>Full stack developer</span> and a{" "}
          <span>Content creator</span>
        </h3>
        <p>I craft responsive websites where technology meets creativity.</p>
        <a className="dow_button" href={Mycv} download="cvtarekchafroud.pdf">
          Download my cv
        </a>
      </div>
      <div className="hero_img_container">
        <img src={HeroImg} alt="heroimg" />
        <span className="currentwork">
          <div></div>
          Follow my blogs posts on Dev.to.
        </span>
      </div>
    </section>
  );
};

export default Hero;
