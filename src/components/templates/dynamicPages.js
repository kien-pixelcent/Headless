import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layout"


const Home = ({ data, pageContext }) => {
  const { flexibleContentHtml } = pageContext
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
      <div id="content" className="site-content" dangerouslySetInnerHTML={{ __html: flexibleContentHtml }}></div>
    </Layout>
  )
}

export default Home
