import { EmpireBranchDetailsDto } from "../../dtos/empire-branch-details.dto";
import "./BranchDetails.css";

interface BranchDetailsProps {
  details: EmpireBranchDetailsDto;
}

const BranchDetails = ({ details }: BranchDetailsProps) => {
  return (
    <div className="branch-details">
      <div className="branch-details-header">
        <img
          src={details.thumbnailUrl}
          alt={details.thumbnailUrl}
          className="branch-details-avatar"
        />
        <div>
          <h3 className="branch-details-type">{details.type}</h3>
          <p className="branch-details-quote">{details.quote}</p>
        </div>
      </div>

      <p className="branch-details-description">{details.description}</p>
    </div>
  );
};

export default BranchDetails;
