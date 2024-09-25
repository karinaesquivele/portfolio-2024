import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
function MainLayout() {
    return (
        <div className="main-layout min-h-screen">
          <Header/>
          <Footer />
        </div>
    );
}
export default MainLayout;