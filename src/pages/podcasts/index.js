import React from "react"
import Layout from "../../components/layout"
import CardEpisodes from './CardEpisodes';
import './styles.scss';
import AboutBanner from "../../components/AboutBanner";
import { graphql, useStaticQuery } from "gatsby"

const Podcasts = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        pageBy(uri: "/podcasts") {
          template {
            ... on GraphCMS_Template_Podcast {
              templateName
              banner {
                backgroundImage {
                  node {
                    id
                    sourceUrl
                  }
                }
                button {
                  target
                  title
                  url
                }
                desc
                subTitle
                isShow
                title
                type
                fieldGroupName
                image {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
            }
          }
        }
        episodes {
          nodes {
            content
            excerpt
            link
            date
            title
            customPodcasts {
              hostInfor {
                avatar {
                  node {
                    id
                    sourceUrl
                  }
                }
                hostName
                listenOnSpotify
                listionInYoutube
                date
                fieldGroupName
                file {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const episodes = query?.cms?.episodes?.nodes;
  const banner = query?.cms?.pageBy?.template?.banner;

  const latestEpisodes = episodes.reduce((latest, episodes) =>
    new Date(episodes.date) > new Date(latest.date) ? episodes : latest
    , episodes[0]);

  const remainingEpisodes = episodes.filter(ep => ep !== latestEpisodes);

  console.log(remainingEpisodes);

  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="main-content">
          <AboutBanner title={banner?.title} description={banner?.desc} subtitle={banner?.subTitle} image={banner?.image} backgroundImage={banner?.backgroundImage} button={banner?.button} type={banner?.type} isShow={banner?.isShow} />
          <section className="section sc-podcast page-content">
            <div className="ast-container">
              <div className="featured-podcast">
                <h2 className="h2-title fw-800 f-soleto text-black">Featured Episode</h2>
                <div className="featured-podcast-box ast-flex">
                  <div className="box-host box-podcast ast-flex flex-column text-white f-soleto text-center">
                    <figure><img src="https://agencysite.bwpsites.com/wp-content/uploads/2024/11/footer-logo.png" alt /></figure>
                    <h3 className="h3-title f-soleto text-white fw-800">{latestEpisodes?.title}</h3>
                    <div className="date fw-300"> {latestEpisodes?.date ? new Date(latestEpisodes.date).toLocaleDateString('en-CA') : 'N/A'}</div>
                    <div className="author-infor ast-flex align-items-center justify-content-center">
                      <figure><img src={latestEpisodes?.customPodcasts?.hostInfor?.avatar?.node?.sourceUrl} alt="Alex Sidorenkov" /></figure>
                      <div className="author f-soleto fw-normal">Hosted By: <span>{latestEpisodes?.customPodcasts?.hostInfor?.hostName}</span></div>
                    </div>
                    <div className="listen-on">
                      <span><strong>LISTEN ON:</strong></span>
                      <a href={latestEpisodes?.customPodcasts?.hostInfor?.listionInYoutube} target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-youtube.svg" alt="Youtube" /></a>
                      <a href={latestEpisodes?.customPodcasts?.hostInfor?.listenOnSpotify} target="_blank"><img src="https://agencysite.bwpsites.com/wp-content/themes/agencymarketing/assets/img/socials/logo-spotify.svg" alt="Spotify" /></a>
                    </div>
                  </div>
                  <div className="box-content f-soleto text-white">
                    <h2 className="h2-title f-soleto fw-800 text-white">{latestEpisodes?.title}</h2>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: latestEpisodes?.excerpt }}></div>
                    <div className="sc-btn">
                      <a href={latestEpisodes?.link} className="custom-btn bg-orange" target="_self">Listen Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-podcast">
                <h2 className="h2-title fw-800 f-soleto text-black">Latest Episodes</h2>
                <div className="lists ast-flex">
                  <CardEpisodes remainingEpisodes={remainingEpisodes} />
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
