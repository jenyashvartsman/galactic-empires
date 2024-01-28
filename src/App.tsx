import { useEffect, useState } from "react";
import "./App.css";
import BranchDetails from "./components/branch-details/BranchDetails";
import BranchGallery from "./components/branch-gallery/BranchGallery";
import BranchesList from "./components/branches-list/BranchesList";
import Header from "./components/header/Header";
import { getEmpiresData } from "./data/data";

function App() {
  const empires = getEmpiresData();

  const [selectedEmpire, setSelectedEmpire] = useState(empires[0]);
  const [selectedBranch, setSelectedBranch] = useState(empires[0].branches[0]);

  useEffect(
    () => setSelectedBranch(selectedEmpire.branches[0]),
    [selectedEmpire]
  );

  return (
    <>
      <Header
        empires={empires}
        selectedEmpire={selectedEmpire}
        onSelectEmpire={setSelectedEmpire}
      />
      <main className="container">
        <BranchesList
          selectedBranchId={selectedBranch.id}
          branches={selectedEmpire.branches}
          onSelectBranch={setSelectedBranch}
        />
        <BranchGallery images={selectedBranch.images} />
        <BranchDetails details={selectedBranch.details} />
      </main>
    </>
  );
}

export default App;
