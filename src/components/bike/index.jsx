import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Bike, Wind, Map, Mountain, Zap, Gauge } from "lucide-react";

const BikeStatCard = ({ icon: Icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors group backdrop-blur-sm relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors text-violet-400">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="text-slate-400 text-sm">{label}</h4>
                <p className="text-xl font-bold text-white max-md:text-sm">{value}</p>
            </div>
        </div>
    </motion.div>
);

const Speedometer = ({ speed }) => {
    // Speed is 0-100
    // Arc logic
    const radius = 40;
    const stroke = 8;
    const center = 50;
    const circumference = Math.PI * radius; // Half circle circumference
    const progress = (speed / 100) * circumference;

    // Needle logic
    const needleRotation = -90 + (speed / 100) * 180;

    return (
        <div className="relative w-32 h-16 flex justify-center overflow-hidden">
            {/* Gauge Background */}
            <svg className="w-full h-full" viewBox="0 0 100 50">
                {/* Background Track */}
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#1e293b" // slate-800
                    strokeWidth={stroke}
                    strokeLinecap="round"
                />

                {/* Filled Track (Gradient) */}
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={circumference - progress}
                    transition={{ ease: "linear", duration: 0.1 }} // Smooth fill
                    animate={{ strokeDashoffset: circumference - progress }}
                />
            </svg>

            {/* Needle */}
            <motion.div
                className="absolute bottom-0 left-1/2 w-[2px] h-[45px] bg-white origin-bottom rounded-full z-10"
                style={{ translateX: "-50%" }}
                animate={{ rotate: needleRotation }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
            </motion.div>

            {/* Center Pivot */}
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-white rounded-full z-20" /> */}

            {/* Labels (Digital Readout) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-0">
                <div className="text-xl font-bold text-white tracking-wide leading-none">
                    {Math.round(speed * 0.8 + 20)}
                </div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">KM/H</div>
            </div>
        </div>
    );
};

const BikeSection = () => {
    const [isBoosting, setIsBoosting] = useState(false);
    const [isWheelie, setIsWheelie] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isLightsOn, setIsLightsOn] = useState(false);
    const [isHonking, setIsHonking] = useState(false);
    const [speed, setSpeed] = useState(0); // 0 to 100 representing boost level
    const [isBikeModeOn, setIsBikeModeOn] = useState(() => localStorage.getItem('bike') === 'true');

    useEffect(() => {
        const checkBikeMode = () => {
            setIsBikeModeOn(localStorage.getItem('bike') === 'true');
        };

        window.addEventListener('bikeModeChange', checkBikeMode);
        // Also listen for storage events (cross-tab support)
        window.addEventListener('storage', checkBikeMode);

        return () => {
            window.removeEventListener('bikeModeChange', checkBikeMode);
            window.removeEventListener('storage', checkBikeMode);
        };
    }, []);

    useEffect(() => {
        let interval;
        if (isBoosting) {
            interval = setInterval(() => {
                setSpeed(prev => Math.min(prev + 5, 100));
            }, 50);
        } else {
            interval = setInterval(() => {
                setSpeed(prev => Math.max(prev - 5, 0));
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isBoosting]);

    const performJump = () => {
        if (!isJumping) {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 1000);
        }
    };

    if (!isBikeModeOn) return null
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-6">
                <div className="md:w-1/2 space-y-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6"
                        >
                            <Bike size={16} />
                            <span>Passion</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Keyboard</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg leading-relaxed mb-8"
                        >
                            When I'm not crafting pixel-perfect interfaces, you'll find me on the open road.
                            Riding isn't just a hobby; it's where I find freedom and recharge my creative energy.
                            The focus of the ride fuels my dedication to code.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <BikeStatCard icon={Map} label="Longest Ride" value="500+ km" delay={0.2} />
                        <BikeStatCard icon={Mountain} label="Top Speed" value="120+ km/h" delay={0.3} />
                    </div>


                </div>

                {/* Animation Canvas */}
                <div className="md:w-1/2 relative h-[450px] w-full flex items-center justify-center bg-slate-950 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    {/* Sky / Atmosphere */}
                    <div className={`absolute inset-0 transition-colors duration-500 ${isBoosting ? "bg-violet-900/20" : "bg-slate-900/50"}`} />

                    {/* Background Mountains */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ x: [-1000, 0] }}
                            transition={{ duration: isBoosting ? 5 : 20, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-20 left-0 flex opacity-20"
                        >
                            {[...Array(12)].map((_, i) => (
                                <div key={i}
                                    className="w-[300px] h-[250px] bg-gradient-to-t from-violet-900/60 to-transparent rounded-t-[100%]"
                                    style={{
                                        marginLeft: "-80px",
                                        transform: `scaleY(${0.5 + Math.random() * 0.5})`
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Middle Ground - Trees/Poles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ x: [-1000, 0] }}
                            transition={{ duration: isBoosting ? 1 : 5, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 left-0 flex opacity-10"
                        >
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-2 h-32 bg-slate-400 mx-32 rounded-full" />
                            ))}
                        </motion.div>
                    </div>

                    {/* Road */}
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 transform perspective-[500px] rotate-x-20">
                        {/* Road Lines */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 -mt-0.5">
                            <motion.div
                                animate={{ x: [-200, 0] }}
                                transition={{ duration: isBoosting ? 0.2 : 1, repeat: Infinity, ease: "linear" }}
                                className="flex gap-32"
                            >
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`h-1 rounded-full ${isBoosting ? "bg-amber-400 w-32 shadow-[0_0_10px_rgba(251,191,36,0.5)]" : "bg-violet-500/50 w-16"}`} />
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Speed Lines Effects when boosting */}
                    <AnimatePresence>
                        {isBoosting && (
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: "100%", opacity: 0 }}
                                        animate={{ x: "-100%", opacity: [0, 1, 0] }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.3 + Math.random() * 0.2,
                                            repeat: Infinity,
                                            delay: Math.random() * 0.2,
                                            ease: "linear"
                                        }}
                                        className="absolute h-[1px] bg-white w-full"
                                        style={{ top: `${10 + Math.random() * 80}%` }}
                                    />
                                ))}
                            </div>
                        )}
                    </AnimatePresence>

                    {/* Headlight Beam */}
                    <AnimatePresence>
                        {isLightsOn && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-[40%] right-[20%] w-[300px] h-[100px] bg-gradient-to-r from-amber-200/40 to-transparent blur-3xl rounded-full transform rotate-12 z-20 pointer-events-none origin-left"
                            />
                        )}
                    </AnimatePresence>

                    {/* Horn Sound Waves */}
                    <AnimatePresence>
                        {isHonking && (
                            <div className="absolute top-1/2 right-[20%] z-30 pointer-events-none">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0.5, opacity: 1, x: 0 }}
                                        animate={{ scale: 2, opacity: 0, x: 50 }}
                                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                                        className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white/50"
                                    />
                                ))}
                            </div>
                        )}
                    </AnimatePresence>

                    {/* Bike Shadow (scales when jumping) */}
                    <motion.div
                        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black/60 blur-md rounded-[100%] z-0"
                        animate={{
                            scale: isJumping ? 0.6 : 1,
                            opacity: isJumping ? 0.3 : 0.6
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* The Bike */}
                    <div className="relative z-10 mt-12 scale-110">
                        <motion.div
                            animate={{
                                y: isJumping ? -150 : (isWheelie ? -20 : (isBoosting ? [-1, 1, -1] : [-2, 2, -2])),
                                rotate: isJumping ? -15 : (isWheelie ? [-25, -28, -25] : (isBoosting ? [-2, 0, -2] : [-1, 1, -1])),
                            }}
                            transition={{
                                y: { duration: isJumping ? 1 : ((isBoosting || isWheelie) ? 0.3 : 2), ease: isJumping ? "easeInOut" : "easeInOut", repeat: isJumping ? 0 : Infinity },
                                rotate: { duration: isJumping ? 1 : ((isBoosting || isWheelie) ? 0.3 : 2), ease: "easeInOut", repeat: isJumping ? 0 : Infinity }
                            }}
                            className="relative"
                        >
                            {/* Glowing effect backend */}
                            <div className={`absolute -inset-8 bg-violet-500/20 blur-xl rounded-full transition-all duration-300 ${isBoosting ? "bg-amber-500/30 blur-2xl" : ""}`} />

                            {/* Bike SVG */}
                            {/* Bike SVG - Corrected Geometry */}
                            <svg width="240" height="130" viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Exhaust/Trail Effect in Turbo */}
                                {isBoosting && (
                                    <motion.path
                                        d="M10 90 Q-20 95 -50 90"
                                        stroke="#f59e0b"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: [1, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    />
                                )}

                                {/* Wheels - Rear (Fixed at 40,90) */}
                                <motion.g animate={{ rotate: 360 }} transition={{ duration: isBoosting ? 0.1 : 1, repeat: Infinity, ease: "linear" }} style={{ originX: "32px", originY: "32px" }}>
                                    {/* Tire */}
                                    <circle cx="40" cy="90" r="32" stroke={isBoosting ? "#f59e0b" : "#1e293b"} strokeWidth="6" />
                                    {/* Rim */}
                                    <circle cx="40" cy="90" r="28" stroke={isBoosting ? "#f59e0b" : "#8b5cf6"} strokeWidth="2" className={`transition-colors duration-300 ${isBoosting ? "drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" : "drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"}`} />
                                    {/* Spokes */}
                                    {[...Array(8)].map((_, i) => (
                                        <line
                                            key={i}
                                            x1="40" y1="90"
                                            x2="40" y2="64"
                                            stroke={isBoosting ? "#f59e0b" : "#4c1d95"}
                                            strokeWidth="1.5"
                                            transform={`rotate(${i * 45} 40 90)`}
                                            className="opacity-80"
                                        />
                                    ))}
                                    {/* Hub */}
                                    <circle cx="40" cy="90" r="4" fill="white" />
                                    <circle cx="40" cy="90" r="2" fill={isBoosting ? "#f59e0b" : "#8b5cf6"} />
                                </motion.g>

                                {/* Wheels - Front (Moved to 170,90) */}
                                <motion.g animate={{ rotate: 360 }} transition={{ duration: isBoosting ? 0.1 : 1, repeat: Infinity, ease: "linear" }} style={{ originX: "32px", originY: "32px" }}>
                                    {/* Tire */}
                                    <circle cx="170" cy="90" r="32" stroke={isBoosting ? "#f59e0b" : "#1e293b"} strokeWidth="6" />
                                    {/* Rim */}
                                    <circle cx="170" cy="90" r="28" stroke={isBoosting ? "#f59e0b" : "#8b5cf6"} strokeWidth="2" className={`transition-colors duration-300 ${isBoosting ? "drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" : "drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"}`} />
                                    {/* Spokes */}
                                    {[...Array(8)].map((_, i) => (
                                        <line
                                            key={i}
                                            x1="170" y1="90"
                                            x2="170" y2="64"
                                            stroke={isBoosting ? "#f59e0b" : "#4c1d95"}
                                            strokeWidth="1.5"
                                            transform={`rotate(${i * 45} 170 90)`}
                                            className="opacity-80"
                                        />
                                    ))}
                                    {/* Hub */}
                                    <circle cx="170" cy="90" r="4" fill="white" />
                                    <circle cx="170" cy="90" r="2" fill={isBoosting ? "#f59e0b" : "#8b5cf6"} />
                                </motion.g>

                                {/* Frame Geometry 
                                    Rear Hub: 40,90
                                    BB: 90,90
                                    Seat Node: 70,40
                                    Head Node: 150,40
                                    Front Hub: 170,90
                                */}
                                {/* Chainstay (BB to Rear) & Seatstay (Seat to Rear) & Top Tube (Seat to Head) & Down Tube (Head to BB) */}
                                <path d="M40 90 L70 40 L150 40 L90 90 Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Seat Tube (Seat to BB) */}
                                <path d="M70 40 L90 90" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                {/* Fork (Head to Front Hub) */}
                                <path d="M150 40 L170 90" stroke="white" strokeWidth="4" strokeLinecap="round" />

                                {/* Handlebars */}
                                <path d="M150 40 L135 25 L165 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                                {/* Seat */}
                                <path d="M70 40 L60 30 H85" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                                {/* Rider Body - Abstract */}
                                <motion.path
                                    d="M80 30 Q110 10 140 25"
                                    animate={{ d: isBoosting || isWheelie ? "M80 30 Q110 5 155 20" : "M80 30 Q110 10 140 25" }}
                                    stroke="#a78bfa"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    className="opacity-90"
                                />
                                {/* Head */}
                                <motion.circle
                                    cx="140"
                                    cy="15"
                                    r="8"
                                    animate={{
                                        cx: isBoosting || isWheelie ? 155 : 140,
                                        cy: isBoosting || isWheelie ? 15 : 15
                                    }}
                                    fill="#a78bfa"
                                    className="opacity-90"
                                />
                            </svg>

                            {/* Wind particles attached to bike frame */}
                            {isBoosting && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute top-0 right-0"
                                >
                                    <Wind className="text-white/50 w-8 h-8 rotate-180 absolute -top-4 -right-8" />
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>  {/* Interactive Control */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900 border border-violet-500/20 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-violet-600/5 group-hover:bg-violet-600/10 transition-colors" />

                <div className="flex items-center justify-between relative z-10">
                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-white font-bold flex items-center gap-2">
                            <Zap size={18} className={isBoosting ? "text-amber-400 fill-amber-400" : "text-slate-500"} />
                            Controls
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            <button
                                onMouseDown={() => setIsBoosting(true)}
                                onMouseUp={() => setIsBoosting(false)}
                                onMouseLeave={() => setIsBoosting(false)}
                                onTouchStart={() => setIsBoosting(true)}
                                onTouchEnd={() => setIsBoosting(false)}
                                className={`px-4 py-2 rounded-xl font-bold text-xs lg:text-sm transition-all duration-200 flex flex-row items-center justify-center gap-2 ${isBoosting
                                    ? "bg-amber-500 text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-95"
                                    : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95"
                                    }`}
                            >
                                <Zap size={20} className={isBoosting ? "fill-slate-900" : ""} />
                                {isBoosting ? "FULL THROTTLE!" : "THROTTLE"}
                            </button>

                            <button
                                onMouseDown={() => setIsWheelie(true)}
                                onMouseUp={() => setIsWheelie(false)}
                                onMouseLeave={() => setIsWheelie(false)}
                                onTouchStart={() => setIsWheelie(true)}
                                onTouchEnd={() => setIsWheelie(false)}
                                className={`px-4 py-2 rounded-xl font-bold text-xs lg:text-sm transition-all duration-200 flex flex-row items-center justify-center gap-2 ${isWheelie
                                    ? "bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.5)] scale-95"
                                    : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95"
                                    }`}
                            >
                                <Bike size={20} />
                                {isWheelie ? "WHEELIE!" : "POP WHEELIE"}
                            </button>

                            <button
                                onClick={performJump}
                                disabled={isJumping}
                                className={`px-4 py-2 rounded-xl font-bold text-xs lg:text-sm transition-all duration-200 flex flex-row items-center justify-center gap-2 ${isJumping
                                    ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-95"
                                    : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95"
                                    }`}
                            >
                                <div className="text-xl">🦘</div>
                                {isJumping ? "JUMPING!" : "JUMP"}
                            </button>

                            {/* <button
                                onClick={() => setIsLightsOn(!isLightsOn)}
                                className={`px-4 py-4 rounded-xl font-bold text-xs lg:text-sm transition-all duration-200 flex flex-col items-center justify-center gap-2 ${isLightsOn
                                    ? "bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                    : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95"
                                    }`}
                            >
                                <Zap size={20} className={isLightsOn ? "fill-slate-900" : ""} />
                                {isLightsOn ? "LIGHTS ON" : "LIGHTS OFF"}
                            </button> */}

                            {/* <button
                                onMouseDown={() => setIsHonking(true)}
                                onMouseUp={() => setIsHonking(false)}
                                onMouseLeave={() => setIsHonking(false)}
                                onTouchStart={() => setIsHonking(true)}
                                onTouchEnd={() => setIsHonking(false)}
                                className={`px-4 py-4 rounded-xl font-bold text-xs lg:text-sm transition-all duration-200 flex flex-col items-center justify-center gap-2 ${isHonking
                                    ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)] scale-95"
                                    : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95"
                                    }`}
                            >
                                <div className="text-xl">📢</div>
                                {isHonking ? "HONK!" : "HORN"}
                            </button> */}
                        </div>
                    </div>

                    <div className="bg-slate-950/50 p-2 rounded-xl border border-white/5">
                        <Speedometer speed={speed} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BikeSection;
