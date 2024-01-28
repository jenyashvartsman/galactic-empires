import { EmpireBranchDto } from "../../dtos/empire-branch.dto";
import "./BranchesList.css";

interface BranchesListProps {
  selectedBranchId: string;
  branches: EmpireBranchDto[];
  onSelectBranch: (branch: EmpireBranchDto) => void;
}

const BranchesList = ({
  selectedBranchId,
  branches,
  onSelectBranch,
}: BranchesListProps) => {
  return (
    <ul className="branches-list">
      {branches.map((branch) => (
        <li
          key={branch.id}
          className={
            "branches-list-item" +
            (branch.id === selectedBranchId ? " active" : "")
          }
        >
          <span className="branches-list-item-i">{branch.name.charAt(0)}</span>
          <button
            className="branches-list-item-btn"
            onClick={() => onSelectBranch(branch)}
          >
            {branch.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BranchesList;
