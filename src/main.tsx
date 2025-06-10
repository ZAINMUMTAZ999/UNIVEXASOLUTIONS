import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { AppNotifyProvider } from "./context/AppNotify.tsx";
import { SearchContextProvider } from "./context/SearchContext.tsx";

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 0,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <div 
  className="text-xl"
  // className="text-base sm:text-lg md:text-xl lg:text-2xl scale-100 md:scale-125"
    style={{ zoom: '125%' }}
  >
    <StrictMode>
      {/* <Provider store={Store}> */}
      <QueryClientProvider client={client}>
          <SearchContextProvider>
        <AppNotifyProvider>
            <App />
        </AppNotifyProvider>
        </SearchContextProvider>
      </QueryClientProvider>
      {/* </Provider> */}
    </StrictMode>
  </div>
);