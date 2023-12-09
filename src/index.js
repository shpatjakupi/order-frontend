import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";
import '../src/styles/index.css'
import {NextUIProvider} from "@nextui-org/react";

Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <NextUIProvider>
        <App />
    </NextUIProvider>
);