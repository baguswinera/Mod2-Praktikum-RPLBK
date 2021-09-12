import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Tugas from "./components/Tugas";
import Gambar from "./assets/images/gambar1.jpg";
import Gambar2 from "./assets/images/gambar2.jpg";
const tugas =
"Ini Tugas Modul 2";
const quotes =
"Disaat payung teduh ku dengar , disitu lah tugastugas terbabat abis";
ReactDOM.render(
<React.StrictMode>
<App />
<Tugas asprak="Aspraknya Shaddam Gamtenk" tugas={tugas} />
<CardList
name="Bagus Ramadhan Winera"
nim="21120118140081"
kelompok="17"
isNameBold
image={Gambar}
/>
<CardList
name="Estu Nur Aini"
nim="21120118130096"
kelompok="17"
isNameBold
image={Gambar2}
/>
<Quotes author="Orang" quotes={quotes} />
</React.StrictMode>,
document.getElementById("root")
);