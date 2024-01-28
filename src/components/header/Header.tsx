import "./Header.css";
import { EmpireDto } from "../../dtos/empire.dto";
import planets from "/planet.svg";

interface HeaderProps {
  empires: EmpireDto[];
  selectedEmpire: EmpireDto;
  onSelectEmpire: (empires: EmpireDto) => void;
}

const Header = ({ empires, selectedEmpire, onSelectEmpire }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-empires">
        {empires.map((empire, index) => (
          <div key={empire.id}>
            <button
              className={
                "header-empires-btn" +
                (empire.id === selectedEmpire.id ? " active" : "")
              }
              onClick={() => onSelectEmpire(empire)}
            >
              {empire.name}
            </button>
            {index < empires.length - 1 && (
              <span className="header-empire-divider">|</span>
            )}
          </div>
        ))}
      </div>

      <div className="header-empire-planets">
        <span>{selectedEmpire.planetsUnderControl.toLocaleString()}</span>
        <span className="header-empire-divider">|</span>
        <img
          src={planets}
          alt="planets"
          className="header-empire-planets-img"
        ></img>
      </div>
    </header>
  );
};

export default Header;
