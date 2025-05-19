import { DateTime } from "luxon";

export default interface PerformanceDataType {
  adId: number;
  title: string;
  description: string;
  gigType: string[];
  location: string;
  hourlyRate: number;
  mediaUrl?: string;
  thumbnailUrl: string;
  availability?: {};
  createdAt?: DateTime;
  updatedAt?: DateTime;
};

// availability, createdAt, updatedAt should only be optional for now.
// TODO: change back to required when we have the backend set up