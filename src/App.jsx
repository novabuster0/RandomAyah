import { useEffect, useState } from "react";

function App() {
    const [surahName, setSurahName] = useState("");
    const [surahNum, setSurahNum] = useState(0);
    const [ayahData, setAyahData] = useState({ ayah: "", ayahNum: -1 });
    useEffect(() => setSurahNum(Math.round(Math.random() * 114)), []);
    useEffect(() => {
        changeAyah(surahNum, setSurahName, setAyahData);
    }, [surahNum]);
    return (
        <div
            onClick={() => {
                setSurahNum(Math.round(Math.random() * 114));
            }}
            id="body"
            className="w-screen h-screen select-none"
        >
            <h1>random quran verse generator</h1>
            this is test
            <div
                id="container"
                className="p-5 flex flex-col gap-5  bg-[rgba(149,95,8,0.5)]"
            >
                <div id="Ayah" className="text-2xl font-bold">
                    {ayahData.ayah}
                </div>
                <div
                    id="SurahData"
                    className="text-lg font-semibold flex gap-5"
                >
                    <div id="SurahName">{surahName}</div>
                    <div id="AyahNum">{ayahData.ayahNum}</div>
                </div>
            </div>
        </div>
    );
}
async function changeAyah(SurahNum, setsurahName, setayahData) {
    const FetchData = await fetchRandomAyah(SurahNum);
    setsurahName(FetchData.surahName);
    setayahData({ ayah: FetchData.ayah, ayahNum: FetchData.ayahNum });
    console.log(FetchData);
}

async function fetchRandomAyah(SurahNum) {
    const Surah = await fetchSurah(SurahNum);
    const AyahNum = Math.round(Math.random() * Surah["totalAyah"]);
    const Ayah = Surah["arabic1"][AyahNum];
    // [Surah["surahName"], Ayah]
    return {
        surahName: Surah["surahName"],
        ayahNum: AyahNum,
        ayah: Ayah,
    };
}

async function fetchSurah(surahNum) {
    const SurahJSON = await fetch(
        `https://quranapi.pages.dev/api/${surahNum}.json`,
    );
    const SurahOBJECT = await SurahJSON.json();
    return SurahOBJECT;
}
export default App;
