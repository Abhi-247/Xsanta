// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Frontend from "./pages/services/Frontend";
import BackendServices from "./pages/services/Backend";
import FullStack from "./pages/services/Fullstack";
import Ecommerce from "./pages/services/Ecommerce";
import Android from "./pages/services/Android";
import ReactNativeDevelopment from "./pages/services/ReactNative";
import Poker from "./pages/services/Poker";
import FlutterDevPage from "./pages/services/Flutter";
import CasinoContentWriting from "./pages/services/Casino";
import MobileGameDevPage from "./pages/services/MobileGame";
import BrowserGame from "./pages/services/BrowserGame";
import BlogWriting from "./pages/services/BlogWriting";
import ArticleWriting from "./pages/services/ArticleWriting";
import WebsiteContentWriting from "./pages/services/WebsiteContent";
import ProductDescription from "./pages/services/ProductDescription";
import ArticleTranslationPage from "./pages/services/ArticleTranslation";
import DocumentTranslationPage from "./pages/services/DocumentTranslation";
import BookTranslationPage from "./pages/services/BookTranslation";
import WebsiteTranslation from "./pages/services/WebsiteTranslation";
import TermsConditionsPage from "./pages/Terms";
import RefundPolicyPage from "./pages/Refund";
import PrivacyPolicyPage from "./pages/Privacy";
import SEOWritingPage from "./pages/services/SEO";
import CaseStudyWritingPage from "./pages/services/CaseStudyWriting";
import EbookWritingPage from "./pages/services/EbookWriting";
import NewsletterWriting from "./pages/services/NewsLetterWriting";
import ProofreadingService from "./pages/services/Proofreading";
import Marketing from "./pages/industries/Marketing";
import HealthBeauty from "./pages/industries/HealthAndBeauty";
import SportsFitness from "./pages/industries/SportsAndFitness";
import Entertainment from "./pages/industries/Entertainment";
import Automotive from "./pages/industries/Automotive";
import Agriculture from "./pages/industries/Agriculture";
import RealEstateConstruction from "./pages/industries/Realstate";
import IOSContentWriting from "./pages/services/iOS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />

          {/* ✅ Redirect base /services to /services/frontend */}
          <Route path="services" element={<Navigate to="/services/frontend" replace />} />

          {/* ✅ Sub-services */}
          <Route path="services/frontend" element={<Frontend />} />
          <Route path="services/backend" element={<BackendServices />} />
          <Route path="services/fullstack" element={<FullStack />} />
          <Route path="services/ecommerce" element={<Ecommerce />} />
          <Route path="services/android" element={<Android />} />
          <Route path="services/react-native" element={<ReactNativeDevelopment />} />
          <Route path="services/flutter" element={<FlutterDevPage />} />
          <Route path="services/poker" element={<Poker />} />
          <Route path="services/casino" element={<CasinoContentWriting />} />
          <Route path="services/mobile-game" element={<MobileGameDevPage />} />
          <Route path="services/browser-game" element={<BrowserGame />} />
          <Route path="services/ios" element={<IOSContentWriting/>} />
          <Route path="services/blog-writing" element={<BlogWriting />} />
          <Route path="services/article-writing" element={<ArticleWriting />} />
          <Route path="services/website-content" element={<WebsiteContentWriting />} />
          <Route path="services/product-description" element={<ProductDescription />} />
          <Route path="services/article-translation" element={<ArticleTranslationPage />} />
          <Route path="services/doc-translation" element={<DocumentTranslationPage />} />
          <Route path="services/website-translation" element={<WebsiteTranslation />} />
          <Route path="services/book-translation" element={<BookTranslationPage />} />
          <Route path="services/seo" element={<SEOWritingPage />} />
          <Route path="services/casestudy-writing" element={<CaseStudyWritingPage />} />
          <Route path="services/ebook-writing" element={< EbookWritingPage />} />
          <Route path="services/newsletter-writing" element={<NewsletterWriting />} />
          <Route path="services/proofreading" element={<ProofreadingService />} />
          

          <Route path="industries/marketing" element={<Marketing />} />
          <Route path="industries/health-beauty" element={<HealthBeauty />} />
          <Route path="industries/sports-fitness" element={<SportsFitness />} />
          <Route path="industries/entertainment" element={<Entertainment/>} />
          <Route path="industries/automotive" element={<Automotive/>} />
          <Route path="industries/agriculture" element={<Agriculture/>} />
          <Route path="industries/realestate-construction" element={<RealEstateConstruction/>} />



          


          <Route path="terms" element={<TermsConditionsPage/>}/>
          <Route path="refund" element={<RefundPolicyPage/>}/>
          <Route path="privacy" element={<PrivacyPolicyPage/>}/>

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;


