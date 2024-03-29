import { EmpireBranchDto } from "./empire-branch.dto";

export type EmpireDto = {
  id: string;
  name: string;
  planetsUnderControl: number;
  logoUrl: string;
  branches: EmpireBranchDto[];
};
