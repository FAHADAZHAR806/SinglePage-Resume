import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import PWE from "./components/PWE";
import Review from "./components/Review";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="border-black border-2 w-full max-w-[800px] m-auto overflow-x-hidden">
        <Navbar />
        <Intro />
        <PWE />
        <Review />
        <Footer />
      </div>
    </>
  );
}
