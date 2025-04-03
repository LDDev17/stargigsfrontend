interface BarChartProps {
  reviews: number;
}

const ReviewBarChart = ( {data} : {data: BarChartProps.reviews}, height = 20, barColor = '[#F3CD03]' ) => {
  const maxValue = Math.max(...data);

  return (
    <svg width='100%' height={height} style={{ maxWidth: '300px'}}>
      {data.map((value, index: number) => {
        const barWidth = (value.reviews / maxValue) * 100;
        return (
          <rect
            key={index}
            x={0}
            y={index * (height / data.length)}
            width={`${barWidth}`}
            height={height / data.length - 2}
            fill={barColor}
          />
        )
      })}
    </svg>
  )
}

export default ReviewBarChart;
