import { useState } from "react";

import SamplePayoutsData from "../SampleData/PayoutsData";
import PayoutProps from "../types/PayoutsType";
import PayoutsRow from "../design components/PayoutsRow";

const PerformerPayouts = () => {
  const [payoutsData, setPayoutsData] = useState<PayoutProps[]>(SamplePayoutsData);

  return (
    <div className="flex flex-col justify-start space-y-2 w-2/3">
      <h5 className="font-bold text-xl font-lato">How you get paid</h5>
      <p
        className="text-md"
      >
        You can send your money to one or more payout methods. To manage your payout 
        method(s) or assign a taxpayer, use the edit option next to each payout method.
      </p>
      <main className="flex flex-col justify-start items-start space-y-4">
        {payoutsData.map((payout, index) => (
          <PayoutsRow 
            key={index}
            props={payout}
          />
        ))}
      </main>
    </div>
  )
}

export default PerformerPayouts
