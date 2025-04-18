import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layout"


const Home = ({ data }) => {
  
  React.useEffect(() => {
    const faqList = document.querySelectorAll('.faq-item');
    faqList.forEach((item, index)=>{
        faqList[index].addEventListener('click',function(){
            if (faqList[index].classList.contains('active'))
            {
                faqList[index].classList.remove('active');
            }else{
                faqList[index].classList.add('active');
            }
        });
        
    });
  }, []);

  return (
    <Layout>
      <div id="content" className="site-content" dangerouslySetInnerHTML={{ __html: data.cms.nodeByUri.flexibleContentHtml }}></div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query Page ($uri: String!){
    cms {
      nodeByUri(uri: $uri) {
        id
        flexibleContentHtml
      }
    }
  }
`
