import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import HomePage from "../pages/HomePage";

function MainLayout() {
    return (
        <div className="main-layout min-h-screen">
          <Header/>
          <HomePage/>
     
          <Footer />
        </div>
    );
}
export default MainLayout;