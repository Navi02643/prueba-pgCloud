import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

import { RoutesComponent } from "./routes/Routes.tsx";
import { GlobalProvider } from "./context/Global_context.tsx";
import i18n from "./config/localization/I18n.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <I18nextProvider i18n={i18n}>
      <RoutesComponent />
    </I18nextProvider>
  </GlobalProvider>
);
