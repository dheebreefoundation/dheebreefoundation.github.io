import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import hero from "../../assets/images/hero.jpg";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaGraduationCap,
  FaChartLine,
  FaBuilding,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
function Hero() {
  const slides = [
    hero,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* HERO + NAVBAR */}

      <section className="heroSection">
        <div className="topBar">
          <div className="leftInfo">
            <span>
              <FaPhoneAlt /> +91 7301529927
            </span>

            <span>
              <FaWhatsapp /> +91 7301529927
            </span>
          </div>

          <div className="rightInfo">
            <a
              href="https://www.linkedin.com/company/dheebree-foundation"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>

            <a href="https://www.facebook.com/dheebree" target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <nav className="topNavbar">
          <div className="logo">DHEEBREE FOUNDATION</div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <a href="#about">About</a>

            <a href="#focus">Focus Areas</a>

            <a href="#initiative">Initiatives</a>

            <a href="#gallery">Gallery</a>

            <a href="#reports">Reports</a>
          </div>
        </nav>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="heroSwiper"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="heroSlide"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              >
                <div className="heroOverlay">
                  <div className="heroContent">
                    <span className="heroTag">
                      Rural Transformation Initiative
                    </span>

                    <h1>
                      Strengthening Regional Ecosystems Through Evidence-Based
                      Development
                    </h1>

                    <p>
                      Dheebree Foundation works with communities, institutions
                      and stakeholders to strengthen education, skilling,
                      governance, infrastructure and sustainable development
                      ecosystems.
                    </p>

                    <div className="heroButtons">
                      <button className="primaryBtn">Explore Programs</button>

                      <button className="secondaryBtn">View Reports</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* IMPACT STRIP */}

      <section className="impactStrip">
        <div className="heroImpactCard">
          <h3>100+</h3>
          <p>Villages Reached</p>
        </div>
        <div className="heroImpactCard">
          <h3>50+</h3>
          <p>Programs</p>
        </div>
        <div className="heroImpactCard">
          <h3>5000+</h3>
          <p>Beneficiaries Impacted</p>
        </div>
        <div className="heroImpactCard">
          <h3>20+</h3>
          <p>Partners</p>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="aboutSection">
        <div className="container">
          <div className="aboutGrid">
            <div className="aboutImage">
              <img src={gallery4} alt="" />
            </div>

            <div className="aboutContent">
              <span>ABOUT US</span>

              <h2>Building Sustainable Regional Ecosystems</h2>

              <p>
                Dheebree Foundation strengthens regional ecosystems by
                identifying, adapting and scaling evidence-based development
                models.
              </p>

              <p>
                We work across education, skilling, infrastructure, governance
                and community participation to create sustainable and measurable
                impact.
              </p>

              <div className="aboutPoints">
                <div>✓ Community Development</div>

                <div>✓ Education Ecosystems</div>

                <div>✓ Skill Development</div>

                <div>✓ Governance Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREA */}

      <section id="focus" className="focusSection">
        <div className="container">
          <div className="sectionHeader">
            <span>WHAT WE DO</span>

            <h2>Focus Areas</h2>
          </div>

          <div className="focusGrid">
            <div className="focusCard">
              <div className="icon">
                <FaGraduationCap />
              </div>

              <h3>Education</h3>

              <p>
                Strengthening learning ecosystems through schools, libraries and
                community participation.
              </p>
            </div>

            <div className="focusCard">
              <div className="icon">
                <FaBuilding />
              </div>

              <h3>Skilling & Livelihood</h3>

              <p>
                Employability, entrepreneurship and sustainable livelihood
                opportunities.
              </p>
            </div>

            <div className="focusCard">
              <div className="icon">
                <FaChartLine />
              </div>

              <h3>Infrastructure</h3>

              <p>
                Supporting community infrastructure and institutional
                strengthening.
              </p>
            </div>

            <div className="focusCard">
              <div className="icon">
                <FaUsers />
              </div>

              <h3>Governance & Research</h3>

              <p>
                Evidence-based planning, governance and policy support
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURED INITIATIVE */}

      <section id="initiative" className="initiativeSection">
        <div className="container">
          <div className="initiativeGrid">
            <div className="initiativeContent">
              <span>FEATURED INITIATIVE</span>

              <h2>Transforming Communities Through Evidence-Based Models</h2>

              <p>
                Dheebree Foundation studies successful development ecosystems
                and adapts them to local realities through partnerships,
                research and community participation.
              </p>

              <ul>
                <li>Patwa Tola Learning Model</li>

                <li>Mawlynnong Community Model</li>

                <li>Digital Learning Initiatives</li>

                <li>Youth Skill Development Programs</li>
              </ul>

              <button className="primaryBtn">Read More</button>
            </div>

            <div className="initiativeImage">
              <img src={gallery6} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section id="gallery" className="gallerySection">
        <div className="container">
          <div className="sectionHeader">
            <span>PROJECT GALLERY</span>

            <h2>Community Engagement & Field Activities</h2>
          </div>

          <div className="galleryGrid">
            <div className="galleryItem tall">
              <img src={gallery1} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery2} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery3} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery4} alt="" />
            </div>

            <div className="galleryItem wide">
              <img src={gallery5} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery6} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery7} alt="" />
            </div>

            <div className="galleryItem">
              <img src={gallery8} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* REPORTS */}

      <section id="reports" className="reportsSection">
        <div className="container">
          <div className="sectionHeader">
            <span>KNOWLEDGE RESOURCES</span>

            <h2>Reports & Publications</h2>
          </div>

          <div className="reportGrid">
            <div className="reportCard">
              <h3>Annual Report</h3>

              <p>Overview of programs, achievements and impact.</p>

              <button>Download PDF</button>
            </div>

            <div className="reportCard">
              <h3>Exposure Visit Report</h3>

              <p>Learning from successful community development models.</p>

              <button>Download PDF</button>
            </div>

            <div className="reportCard">
              <h3>Research Publications</h3>

              <p>Insights on governance, skilling and development.</p>

              <button>Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="ctaSection">
        <div className="container">
          <h2>Together We Can Build Stronger Communities</h2>

          <p>
            Partner with us to strengthen education, governance, skilling and
            community ecosystems.
          </p>

          <button className="primaryBtn">Get Involved</button>
        </div>
      </section>

      {/* FOOTER */}
      <a href="https://wa.me/7301529927" className="whatsappFloat">
        <FaWhatsapp />
      </a>

      <a href="tel:+917301529927" className="callFloat">
        <FaPhoneAlt />
      </a>
      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            <div>
              <h3>Dheebree Foundation</h3>

              <p>
                Strengthening Regional Ecosystems Through Evidence-Based
                Development.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>

              <ul>
                <li>About</li>
                <li>Focus Areas</li>
                <li>Gallery</li>
                <li>Reports</li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>

              <p>info@dheebree.org</p>

              <p>Bihar, India</p>
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2026 Dheebree Foundation. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Hero;
