import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Footer />
  </>
)

export default Base;