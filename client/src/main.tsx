import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalStyles} from "./styles/global.styles";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./services/client";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <GlobalStyles/>
          <App />
      </QueryClientProvider>
  </React.StrictMode>
)
