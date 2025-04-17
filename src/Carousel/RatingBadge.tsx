import { StarIcon } from "./Icons1";

interface RatingBadgeProps {
  rating: number;
  reviews: number;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  rating,
  reviews,
}) => (
  <div className="flex gap-1.5 items-center px-1.5 py-0.5 bg-white bg-opacity-50 rounded-[30px]">
    <StarIcon />
    <div className="flex items-center">
      <span className="text-sm text-black">{rating.toFixed(1)}</span>
      <span className="text-xs text-black">({reviews})</span>
    </div>
  </div>
);
export default RatingBadge;