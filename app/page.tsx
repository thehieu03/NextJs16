import React from 'react';
import Hello from "@/components/hello";

const Home = () => {
    console.log("Hello i am hieu");
    return (
        <main>
            <div className="text-2xl font-extrabold leading-tight">
                Home

            </div>
            <Hello/>
        </main>
    );
};

export default Home;
