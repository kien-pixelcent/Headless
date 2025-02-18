import React from "react"
import './styles.scss';

const CardEpisodes = () => {

  return (
    <>
      <div className="box box-podcast f-soleto text-white ast-flex flex-column text-center">
        <figure className="logo"><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/footer-logo.png" alt /></figure>
        <h3 className="h3-title f-soleto text-white fw-800"><a href="https://agencysite.bwpsites.com/episode/booked-busy-the-wellness-practice-podcast/" target="_self">Booked &amp; Busy: The Wellness Practice Podcast</a></h3>
        <div className="host-infor">
          <div className="date">DATE: TBD</div>
          <div className="author-infor ast-flex align-items-center  justify-content-center">
            <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2025/02/host-alex.png" alt="Alex Sidorenkov" /></figure>
            <div className="author f-soleto fw-normal">Hosted By: <span>Alex Sidorenkov</span></div>
          </div>
          <div className="listen-on">
            <span><strong>LISTEN ON:</strong></span>
            <a href="#" target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-youtube.svg" alt="Youtube" /></a>
            <a href="#" target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-spotify.svg" alt="Spotify" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardEpisodes
