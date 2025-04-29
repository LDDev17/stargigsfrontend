
import GigsTableType from "../types/GigsTableType";

interface TableRowType{
  props: GigsTableType
}

const TableRow = ({ props }: TableRowType) => {


  return (
    <tr>
      <td className="p-2 m-2">{props.EventName}</td>
      {props.EventManager && <td>{props.EventManager}</td>}
      <td>{props.Location}</td>
      {props.Amount && <td>{props.Amount}</td>}
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

export default TableRow;
