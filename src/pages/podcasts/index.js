import React from "react"
import Layout from "../../components/layout"
import CardEpisodes from './CardEpisodes';
import './styles.scss';

const Podcasts = () => {

  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="main-content">
          <section className="banner" style={{ "background": "no-repeat center/cover url('https://agencysite.bwpsites.com/wp-content/uploads/2024/11/default-banner.jpg')" }}>
            <div className="ast-container">
              <div className="ast-full-width ast-flex align-items-center justify-content-center banner-inner">
                <div className="banner-content ast-flex flex-column">
                  <div className="sub-title f-soleto fw-500 text-white text-center">Booked &amp; Busy:</div>
                  <h1 className="h1-title fw-800 f-soleto text-white text-center">The Wellness Practice Podcast</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section sc-podcast page-content">
            <div className="ast-container">
              <div className="featured-podcast">
                <h2 className="h2-title fw-800 f-soleto text-black">Featured Episode</h2>
                <div className="featured-podcast-box ast-flex">
                  <div className="box-host box-podcast ast-flex flex-column text-white f-soleto text-center">
                    <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/footer-logo.png" alt /></figure>
                    <h3 className="h3-title f-soleto text-white fw-800">The Patient Growth Playbook</h3>
                    <div className="date fw-300">January 15, 2025</div>
                    <div className="author-infor ast-flex align-items-center justify-content-center">
                      <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2025/02/host-alex.png" alt="Alex Sidorenkov" /></figure>
                      <div className="author f-soleto fw-normal">Hosted By: <span>Alex Sidorenkov</span></div>
                    </div>
                    <div className="listen-on">
                      <span><strong>LISTEN ON:</strong></span>
                      <a href="#" target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-youtube.svg" alt="Youtube" /></a>
                      <a href="#" target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-spotify.svg" alt="Spotify" /></a>
                    </div>
                  </div>
                  <div className="box-content f-soleto text-white">
                    <h2 className="h2-title f-soleto fw-800 text-white">The Patient Growth Playbook</h2>
                    <div className="desc">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                    <div className="sc-btn">
                      <a href="https://agencysite.bwpsites.com/episode/the-patient-growth-playbook/" className="custom-btn bg-orange" target="_self">Listen Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-podcast">
                <h2 className="h2-title fw-800 f-soleto text-black">Latest Episodes</h2>
                <div className="lists ast-flex">
                  <CardEpisodes />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Podcasts
