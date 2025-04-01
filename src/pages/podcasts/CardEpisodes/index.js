import React from "react"
import './styles.scss';

const CardEpisodes = (remainingEpisodes) => {
  console.log(remainingEpisodes?.remainingEpisodes);
  return (
    <>
      {remainingEpisodes?.remainingEpisodes.map((item, index) => (
        <div key={index} className="box box-podcast f-soleto text-white ast-flex flex-column text-center">
          <figure className="logo"><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/footer-logo.png" alt /></figure>
          <h3 className="h3-title f-soleto text-white fw-800"><a href={item?.link} target="_self">{item?.title}</a></h3>
          <div className="host-infor">
            <div className="date">{item?.date ? new Date(item.date).toLocaleDateString('en-CA') : 'N/A'}</div>
            <div className="author-infor ast-flex align-items-center  justify-content-center">
              <figure><img src={item?.customPodcasts?.hostInfor?.avatar?.node?.sourceUrl} alt="Alex Sidorenkov" /></figure>
              <div className="author f-soleto fw-normal">Hosted By: <span>{item?.customPodcasts?.hostInfor?.hostName}</span></div>
            </div>
            <div className="listen-on">
              <span><strong>LISTEN ON:</strong></span>
              <a href={item?.customPodcasts?.hostInfor?.listionInYoutube} target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-youtube.svg" alt="Youtube" /></a>
              <a href={item?.customPodcasts?.hostInfor?.listenOnSpotify} target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-spotify.svg" alt="Spotify" /></a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardEpisodes
