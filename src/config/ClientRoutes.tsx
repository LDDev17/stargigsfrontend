import { Route } from "react-router-dom";
import { JSX } from "react";

import ClientDashboardPages from "../pages-client/ClientDashboardPages";
import ClientPaymentMain from "../pages-client/ClientPaymentMain";
import CPayPerformerDetails from "../layout components/CPayPerformerDetails";
import CPayCompletePayment from "../layout components/CPayCompletePayment";
import CPayHistory from "../layout components/CPayHistory";

const ClientRoutes = (): JSX.Element => {
  return (
    <>
      <Route path="clientDashboard" element={<ClientDashboardPages />}>
        <Route path="payment" element={<ClientPaymentMain />}>
          <Route index element={<CPayPerformerDetails />} /> {/* default tab */}
          <Route path="details" element={<CPayPerformerDetails />} />
          <Route path="complete" element={<CPayCompletePayment />} />
          <Route path="history" element={<CPayHistory />} />
        </Route>
      </Route>
    </>
  )
}

export default ClientRoutes;