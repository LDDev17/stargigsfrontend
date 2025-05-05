import ReportButton from "./buttons/ReportButton"
import EarningTileProps from "../types/EarningsTileProps";

interface EarningReportTileProps {
  props: EarningTileProps;
};

const EarningReportTile = ({ props }: EarningReportTileProps) => {
  const money = new Intl.NumberFormat().format(props.earnings);

  return (
    <div 
      className="rounded-2xl shadow-[0_4px_4px_0_black_0.2] bg-white max-w-[288px] 
        flex flex-col justify-between space-y-2 py-2"
    >
      <h5 className="font-medium text-2xl">{props.month} {props.year}</h5>
      <div className="relative w-md pl-4">
        <img 
          src={props.picture1} 
          alt="" 
          className="rounded-xl -z-1 w-36 mt-4"
        />
        <img 
          src={props.picture2} 
          alt="" 
          className="rounded-xl z-0 absolute left-20 top-0 h-32 w-30 object-cover "
        />
        <img 
          src={props.picture3} 
          alt="" 
          className="rounded-xl z-1 absolute top-4 left-38 w-28 h-24 object-cover"
        />
      </div>
      <p className="text-text_secondary text-center mt-8 text-md">
        Total earnings: <span className="text-primary text-xl">${money}</span>
      </p>
      <footer className="flex justify-center">
        <ReportButton />
      </footer>
    </div>
  )
}

export default EarningReportTile;
