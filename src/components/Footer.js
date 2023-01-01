import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Let's Go</h1>
          <p>Choose your favourite destination</p>
        </div>

        <div>
          <a href="/contact">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/contact">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/contact">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/contact">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="/contact">
            <i class="fa-brands fa-square-behance"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Locations</h4>
          <a href="/">Bangladesh</a>
          <a href="/">India</a>
          <a href="/">Russia</a>
          <a href="/">USA</a>
          <a href="/">England</a>
          <a href="/">Brazil</a>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="/">Travelers' Choice</a>
          <a href="/">Insurance</a>
          <a href="/">GreenLeaders</a>
          <a href="/">Blog</a>
          <a href="/">Tripadvisor Plus</a>
          <a href="/">Travel Articles</a>
        </div>
        <div>
          <h4>Contact Info</h4>
          <a href="/">+123-456-789</a>
          <a href="/">+111-222-333</a>
          <a href="/">finalproject@gmail.com</a>
          <a href="/">happynewyear2023@yahoo.com</a>
          <a href="/">Chittagong, BD - 12345</a>
        </div>
        <div>
          <h4>Do Business With Us</h4>
          <a href="/">Owners</a>
          <a href="/">Business Advantage</a>
          <a href="/">Sponsored Placements</a>
          <a href="/">Advertise with Us</a>
          <a href="/">Become an Affiliate</a>
        </div>
      </div>
      <p className="copyright">Copyright @2023 Final Project</p>
    </div>
  );
};
export default Footer;
