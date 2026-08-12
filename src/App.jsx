import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import "./App.css";

function App() {

    return (

        <div className="app">

            <Header

                title="E-Commerce Management Dashboard"

                company="DataSirpi Technologies"

            />

            <Dashboard />

            <Footer

                company="DataSirpi Technologies"

                year="2026"

            />

        </div>

    );

}

export default App;
