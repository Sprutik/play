import { SignUpBtn } from '../../components/SignUpBtn/SignUpBtn'
import { DownloadBtn } from '../../components/DownloadBtn/DownloadBtn'
import { Servers } from '../../components/Servers/Servers'
import { Counters } from '../../components/Counters/Counters'

import projectImg1 from '../../assets/img/front-1.jpg'
import projectImg2 from '../../assets/img/front-2.jpg'
import projectImg3 from '../../assets/img/front-3.jpg'
import projectImg4 from '../../assets/img/front-4.jpg'

import './Main.scss'

export const Main = () => {
  return (
    <div>
      <section>
        <div className="section-outer section-top">
          <div className="section-inner">
            <h1 className="label-main">PlayCraft</h1>
            <p className="label-text">Here must be our description</p>
            <div className="btns-container">
              <SignUpBtn />
              <DownloadBtn />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-about">
          <div className="section-inner">
            <h2 className="about-label">About</h2>
            <p className="about-text">
              It is an amazng one-page theme with great features that offers an
              incredible experience. It is easy to install, make changes, adapt
              for your business.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-servers">
          <div className="section-inner">
            <Servers />
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-projects">
          <div className="projects-container">
            <div className="section-inner">
              <h2 className="projects-label">Projects</h2>
              <p className="projects-text">
                You'll love our work. Check it out!
              </p>
            </div>
            <div className="projects-images">
              <div className="project-img-container">
                <img
                  className="project-img"
                  alt="project-img1"
                  src={projectImg1}
                />
              </div>
              <div className="project-img-container">
                <img
                  className="project-img"
                  alt="project-img2"
                  src={projectImg2}
                />
              </div>
              <div className="project-img-container">
                <img
                  className="project-img"
                  alt="project-img3"
                  src={projectImg3}
                />
              </div>
              <div className="project-img-container">
                <img
                  className="project-img"
                  alt="project-img4"
                  src={projectImg4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-outer section-reviews">
          <div className="section-inner">
            <h2 className="review-label">Testimonials</h2>
          </div>
        </div>
      </section>

      <section>
        <div className="section-outer section-counters">
          <div className="section-inner">
            <Counters />
          </div>
        </div>
      </section>
    </div>
  )
}
