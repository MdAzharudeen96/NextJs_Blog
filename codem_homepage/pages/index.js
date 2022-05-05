import { client } from "../lib/contentful";
import { MainBanner } from "../components/banners/mainBanner";
import { CustomerCarousel } from "../components/carousels/customerCarousel";
import { CompanyOverview } from "../components/blogs/companyOverview";
import { InvestmentBlog } from "../components/blogs/investmentBlog";
import { ServiceBlog } from "../components/blogs/serviceBlog";
import { Partners } from "../components/carousels/partnersCarousel";
import { SubBanner } from "../components/banners/subBanner";
import { NewsCarousel } from "../components/carousels/newsCarousel";
import { FooterMain } from "../components/footer";
import { Copyright } from "../components/copyright";

// import styles from '../styles/Home.module.css'


export default function Home(props){
    // console.log(props)
    return(
      <>
        <MainBanner headers={props.header} mainBanner={props.mainBanner}/>
        <CustomerCarousel carousels={props.carousels} />
        <CompanyOverview overview={props.companyOverview}/>
        <InvestmentBlog blog={props.investmentBlog} />
        <ServiceBlog blog1={props.servicesBlogs.items[2].fields} blog2={props.servicesBlogs.items[1].fields} blog3={props.servicesBlogs.items[0].fields}/>
        <Partners carousels={props.carousels} />
        <SubBanner subBanner={props.subBanner} />
        <NewsCarousel carousels={props.carousels} />
        <FooterMain footer={props.footer} />
        <Copyright />
      </>
    )
}

export async function getStaticProps() {
  const[header, mainBanner, carousels, companyOverview, investmentBlog, servicesBlogs, subBanner, footer] = await Promise.all([
    client.getEntries({ content_type: "mainHeader" }),
    client.getEntries({ content_type: "mainBanner" }),
    client.getEntries({ content_type: "carousels" }),
    client.getEntries({ content_type: "companyOverview" }),
    client.getEntries({ content_type: "investmentBlog" }),
    client.getEntries({ content_type: "servicesBlogs" }),
    client.getEntries({ content_type: "subBanner" }),
    client.getEntries({ content_type: "footer" }),
  ]);

  return {
    props: {
      header: header.items[0].fields,
      mainBanner: mainBanner.items[0].fields,
      carousels: carousels,
      companyOverview: companyOverview.items[0].fields,
      investmentBlog: investmentBlog.items[0].fields,
      servicesBlogs: servicesBlogs,
      subBanner: subBanner.items[0].fields,
      footer: footer.items[0].fields,
    }
  };
}