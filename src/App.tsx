import "./App.css";
import BranchDetails from "./components/branch-details/BranchDetails";
import BranchGallery from "./components/branch-gallery/BranchGallery";
import BranchesList from "./components/branches-list/BranchesList";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <BranchesList />
        <BranchGallery />
        <BranchDetails />
      </main>
    </>
  );
}

export default App;
