import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
} from '../sections';

const Home = () => (
  <div className="overflow-hidden bg-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="z-0 gradient-04" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="z-0 gradient-04" />
    </div>
    <Footer />
  </div>
);

export default Home;
