import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Paginacao from "../components/Paginacao/Paginacao";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Paginacao></Paginacao>
    <Footer />
  </>
)

export default Base;