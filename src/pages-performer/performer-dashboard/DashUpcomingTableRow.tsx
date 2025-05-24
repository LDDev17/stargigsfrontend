import DashTableType from "../../types/DashTableType";

interface DashUpcomingRowProps {
  props: DashTableType
}

const DashUpcomingTableRow = ({ props }: DashUpcomingRowProps) => {

  return (
    <tr>
      <td className=" m-2">{props.EventName}</td>
      <td>{props.Location}</td>
      <td>{props.DateTime}</td>
      <td>{props.GigType}</td>
      <td className={`${props.Status.toLowerCase() === 'confirmed' ?
        'text-[#519c66] bg-[#d2ffc2] opacity-57' : 'text-primary bg-[#ffeedf]'} 
         p-2 rounded-lg`}
      >
        {props.Status}
      </td>
    </tr>
  )
}

export default DashUpcomingTableRow
