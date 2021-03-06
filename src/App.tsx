import React from "react";

import GlobalStyle from "./styles/global";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import ToastContainer from "./components/ToastContainer";
import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => (
    <React.Fragment>
        <AuthProvider>
            <SignIn />
        </AuthProvider>

        <ToastContainer />
        <GlobalStyle />
    </React.Fragment>
);
export default App;
