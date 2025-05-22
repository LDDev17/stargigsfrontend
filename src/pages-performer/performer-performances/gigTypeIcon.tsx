interface GigTypeIconProps {
  gigType: string
};

const GigTypeIcon = ({ gigType }: GigTypeIconProps) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-black p-2">
      <p className="text-white font-inter font-medium text-sm">{gigType}</p>
    </div>
  )
}

export default GigTypeIcon
