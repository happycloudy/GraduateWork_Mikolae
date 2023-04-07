import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalStyles} from "./styles/global.styles";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./services/client";
import {ConfigProvider} from "antd";
import ruRU from 'antd/locale/ru_RU'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={ruRU}>
      <QueryClientProvider client={queryClient}>
          <GlobalStyles/>
          <App />
      </QueryClientProvider>
  </ConfigProvider>
)
