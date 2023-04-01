export default function Hero() {
    return (
        <section className="h-screen relative bg-cover overflow-hidden">
            <div
                className="w-screen h-screen bg-[url('/images/backgrounds/6.png')] bg-bottom bg-cover bg-fixed flex flex-col justify-center 
    items-center relative"
            >
                <div className="w-full h-full absolute top-0 left-0 bg-[#00000070]"></div>
                <div className="text-center z-[2] flex flex-col gap-y-6">
                    <h1 className="font-allura text-4xl text-back">
                        Know more about our story
                    </h1>
                    <h2 className="font-light text-6xl mb-36 text-back bg-background bg-opacity-20 px-10 py-6">
                        About us
                    </h2>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <img src="/vectors/wave-1.svg" alt="wave" className="w-full" />
            </div>
        </section>
    );
}
