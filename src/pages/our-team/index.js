import React from "react"
import Layout from "../../components/layout"
import AboutBanner from "../../components/AboutBanner"
import { useState } from "react"
import './styles.scss';
import { graphql, useStaticQuery } from "gatsby"

const OurTeam = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        themeSettings {
          themeOptionsSettings {
            socials {
              facebook
              instagram
              linkedin
              twitter
              youtube
            }
          }
        }
        members(first: 50) {
          nodes {
            title
            customMember {
              memberPosition
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        pageBy(uri: "/our-team") {
          template {
            ... on GraphCMS_Template_OurTeams {
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
      }
    }
  `);
  const banner = query?.cms?.pageBy?.template?.banner;
  const member = query?.cms?.members?.nodes;
  const [visibleCount, setVisibleCount] = useState(9);

  // Xử lý sự kiện khi bấm "Load More"
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <Layout>
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="main-content">
            <AboutBanner banner={banner} />
            <section className="section sc-our-teams pt-100 pb-100">
              <div className="ast-container">
                <div className="team-list ast-flex">

                  {member.slice(0, visibleCount).map((item, index) => (
                    <div key={index} className="item text-center justify-items-center show">
                      <div className="avatar position-relative mx-auto">
                        <div className="overlay-gradient">
                          <figure><img src={item?.featuredImage?.node?.sourceUrl} alt="Alex" /></figure>
                        </div>
                      </div>
                      <h3 className="member-name fs-24 f-soleto fw-700 color-0659A9 text-center">{item?.title}</h3>
                      <div className="position f-soleto fw-500 color-000000">{item?.customMember?.memberPosition}</div>
                    </div>
                  ))}

                </div>
                {visibleCount < member.length && (
                  <div className="sc-btn ast-flex justify-content-center">
                    <button type="button" className="loadmore fw-700 btn-bg bg-F2771A btn-size-18" onClick={handleLoadMore}>See More Team Members</button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// document.addEventListener('DOMContentLoaded', function () {
//   const items = document.querySelectorAll('.item');
//   const loadMoreBtn = document.querySelector('.loadmore');

//   console.log('Items:', items);
//   console.log('Load More Button:', loadMoreBtn)

//   if (items.length === 0 || !loadMoreBtn) {
//     return;
//   }

//   let visibleCount = 9;

//   // Show the first 9 items
//   items.forEach((item, index) => {
//     if (index < visibleCount) {
//       item.classList.add('show');
//     } else {
//       item.classList.remove('show');
//     }
//   });

//   loadMoreBtn.addEventListener('click', function () {
//     console.log('Load More Button Clicked');
//     const hiddenItems = document.querySelectorAll('.item:not(.show)');

//     hiddenItems.forEach((item, index) => {
//       if (index < 9) {
//         item.classList.add('show');
//       }
//     });

//     if (document.querySelectorAll('.item:not(.show)').length === 0) {
//       loadMoreBtn.style.display = 'none';
//     }
//   });
// });

export default OurTeam
