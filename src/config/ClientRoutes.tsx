import { Route } from "react-router-dom";
import { JSX } from "react";

import ClientDashboardPages from "../pages-client/ClientDashboardPages";
import ClientPaymentMain from "../pages-client/client-payment/ClientPaymentMain";
import CPayPerformerDetails from "../pages-client/client-payment/CPayPerformerDetails";
import CPayCompletePayment from "../pages-client/client-payment/CPayCompletePayment";
import CPayHistory from "../pages-client/client-payment/CPayHistory";

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