import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
    rootElement);
