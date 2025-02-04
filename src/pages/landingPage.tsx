import React from "react";

import { Logo } from "../components/common/Logo";

export function LandingPage() {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <Logo />
        <h1 className="text-4xl font-bold text-white">Welcome to Jatayu</h1>
        <p className="text-white">"Igniting a Digital Revolution Through Education, Activism, and Innovation."</p>
        </div>
    );
}