import DashTileType from '../types/TileType';

import GreenArrow from '../assets/svgs/green_arrow.svg?react';
import RedArrow from '../assets/svgs/red_arrow.svg?react';

const DashboardTile = (Tile: DashTileType) => {

  return (
    <div className="flex flex-col justify-between rounded-xl p-4 space-y-4 font-inter">
      <p className='text-left text-xs text-gray-500'>{Tile.title}</p>
      <div className="flex justify-between space-x-12">
        <p className='font-bold text-gray-900 text-xl'>{Tile.amount}</p>
        {Tile.percentage > 0?
        (
          <p className='text-green-500 font-semibold text-sm flex items-center whitespace-pre'>+ {Tile.percentage}% <GreenArrow /></p>
        ) : (
          <p className='text-[#ef4444] font-semibold text-sm flex items-center whitespace-pre'>{Tile.percentage}% <RedArrow /></p>
        )
        }
        
      </div>
    </div>
  )
}

export default DashboardTile
