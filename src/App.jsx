import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import TroutCamp from "./pages/TroutCamp";
import TroutClassroom from "./pages/troutClassroom";
import TwoFly from "./pages/TwoFly";
import WomensWeekend from "./pages/WomensWeekend";
import FlyTying from "./pages/FlyTying";
import TreePlanting from "./pages/TreePlanting";
import DamRemoval from "./pages/DamRemoval";
import DogRiverDay from "./pages/DogRiverDay";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/troutcamp" element={<TroutCamp />} />
        <Route path="/troutclassroom" element={<TroutClassroom />}/>
        <Route path="/twofly" element={<TwoFly />}/>
        <Route path="/womensweekend" element={<WomensWeekend />}/>
        <Route path="/flytying" element={<FlyTying />}/>
        <Route path="/treeplanting" element={<TreePlanting />}/>
        <Route path="/damremoval" element={<DamRemoval />}/>
        <Route path="/dogriverday" element={<DogRiverDay />}/>
      </Routes>

      <Footer />
    </div>
  );
}