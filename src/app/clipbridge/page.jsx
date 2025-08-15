"use client";

import { useEffect, useState } from "react";

const Page = () => {

    const [text, setText] = useState("");

    useEffect(() => {
        let interval = setInterval(() => {
            window.navigator.clipboard.readText().then((text) => {
                setText(text);
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white">Clipboard Bridge</h1>
            <p className="text-2xl text-white">
                Clip: {text}
            </p>
        </main>
    )
}

export default Page;