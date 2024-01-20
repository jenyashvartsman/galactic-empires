import { EmpireBranchDetailsDto } from "./empire-branch-details.dto";
import { EmpireBranchImageDto } from "./empire-branch-image.dto";

export type EmpireBranchDto = {
  id: string;
  name: string;
  images: EmpireBranchImageDto[];
  details: EmpireBranchDetailsDto;
};
