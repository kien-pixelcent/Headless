import React, { use, useEffect, useState } from "react";
import Layout from "../../components/layout";
import AboutBanner from "../../components/AboutBanner";
import './styles.scss';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";

const Blogs = () => {
  const query = useStaticQuery(graphql`
    query {
      cms {
        pageBy(uri: "/blogs") {
          template {
            ... on GraphCMS_Template_BlogHome {
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
        paginatedPosts: posts(first: 5, after: "cursor") {
          nodes {
            content
            excerpt
            uri
            title
            featuredImage {
              node {
                sourceUrl
                id
              }
            }
            date
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
        limitPost: posts(first: 12) {
          nodes {
            title
            uri
            date
            featuredImage {
              node {
                sourceUrl
                id
              }
            }
          }
        }
      }
    }
  `);

  const data = query?.cms?.pageBy?.template;
  const banner = data?.banner;
  const blogs = query?.cms?.posts?.nodes;
  const asidePosts = query?.cms?.limitPost?.nodes;

  const [posts, setPosts] = useState(query?.cms?.paginatedPosts?.nodes);
  const [currentPage, setCurrentPage] = useState(1);

  const [cursor, setCursor] = useState({
    next: query?.cms?.paginatedPosts?.pageInfo.endCursor,
    prev: query?.cms?.paginatedPosts?.pageInfo.startCursor,
  });

  const [hasNextPage, setHasNextPage] = useState(query?.cms?.paginatedPosts?.pageInfo.hasNextPage);
  const [hasPreviousPage, setHasPreviousPage] = useState(query?.cms?.paginatedPosts?.pageInfo.hasPreviousPage);

  const totalPages = 5;

  const fetchPosts = async (pageNumber) => {
    const response = await fetch('/___graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPosts($first: Int, $after: String) {
            cms {
              posts(first: $first, after: $after) {
                nodes {
                  content
                  excerpt
                  uri
                  title
                  featuredImage {
                    node {
                      sourceUrl
                      id
                    }
                  }
                  date
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  endCursor
                  startCursor
                }
              }
            }
          }
        `,
        variables: { first: 5, after: cursor.next },
      }),
    });

    const json = await response.json();
    const newPosts = json.data.cms.posts.nodes;
    const pageInfo = json.data.cms.posts.pageInfo;

    setPosts(newPosts);
    setCursor({
      next: pageInfo.endCursor,
      prev: pageInfo.startCursor,
    });
    setHasNextPage(pageInfo.hasNextPage);
    setHasPreviousPage(pageInfo.hasPreviousPage);
    setCurrentPage(pageNumber);
  }

  const getPaginationRange = () => {
    const range = [];
    let start = currentPage - 1;
    let end = currentPage + 1;

    if (end = totalPages) { end = totalPages; start = currentPage - 2; }
    if (start < 1) start = 1;

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <Layout>
      <div className="main-content">
        <AboutBanner banner={banner} />
        <div className="section sc-blog pt-100 pb-100" style={{ background: "no-repeat center/cover url('https://www.wellnessclinicmarketing.com/wp-content/themes/agencymarketing/assets/img/blog-background.png')" }}>
          <div className="cus-container">
            <div className="main ast-flex justify-content-between">
              <div className="blog-items ast-flex flex-column">
                {posts.map((item, index) => (
                  <div class="item ast-flex">
                    <div class="image">
                      <a href={item?.uri}>
                        <img src={item?.featuredImage?.node?.sourceUrl} alt="" />
                      </a>
                    </div>
                    <div class="info">
                      <a href={item?.uri}>
                        <h3 class="blog-title">{item?.title}</h3>
                        <div class="description" dangerouslySetInnerHTML={{ __html: item?.excerpt }}></div>
                      </a>
                      <div class="div-button">
                        <a href={item?.uri} class="button-link">Read more</a>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="page-navigation">
                  {/* Mũi tên qua trang trước */}
                  {hasPreviousPage && currentPage !== 1 && (
                    <button className="button" onClick={() => fetchPosts(currentPage - 1)}>{'<'}</button>
                  )}

                  {/* Các trang gần nhất */}
                  {getPaginationRange().map((page) => (
                    <button
                      key={page}
                      onClick={() => fetchPosts(page)}
                      className={currentPage === page ? 'active current button' : 'button'}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Mũi tên qua trang sau */}
                  {hasNextPage && currentPage !== totalPages && (
                    <button className="button" onClick={() => fetchPosts(currentPage + 1)}>{'>'}</button>
                  )}
                </div>

              </div>
              <div className="recent-posts">
                <div className="recent">
                  <div class="search">
                    <form method="get" action="https://www.wellnessclinicmarketing.com/blogs/">
                      <input type="text" name="q" class="search-bar" placeholder="Search..." value="" />
                      <button type="submit"><img src="https://www.wellnessclinicmarketing.com/wp-content/themes/agencymarketing/assets/img/search.svg" alt="" /></button>
                    </form>
                  </div>
                  <h4 class="recent-title">Recent Posts</h4>
                  <div className="recent-items">
                    {asidePosts.map((item, index) => (
                      <a href={item?.uri} key={index}>
                        <div class="item">
                          <div class="image">
                            <img src={item?.featuredImage?.node?.sourceUrl} alt="" />
                          </div>
                          <div class="recent-info">
                            <div class="time">{item?.date ? new Date(item.date).toLocaleDateString('en-CA', {
                              month: 'long',
                              day: '2-digit',
                              year: 'numeric'
                            }
                            ) : 'N/A'}</div>
                            <div class="title">{item?.title}</div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;