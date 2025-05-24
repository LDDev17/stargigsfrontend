import PerformanceDataType from "./PerformanceDataType";

type PerformanceCardType = Omit<
    PerformanceDataType, 'createdAt' | 'updatedAt' | 'availability' | 'mediaUrl'
  >;

export default PerformanceCardType;