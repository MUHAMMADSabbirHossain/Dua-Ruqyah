import React from 'react';
import { motion } from "framer-motion";

export function Home() {
    return (
        <div className="bg-green-50 min-h-screen">
            <section className="max-w-6xl mx-auto px-6 py-20">
                <motion.h1
                    className="text-5xl font-bold text-green-900 mb-6 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to NoorSite
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-700 text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    An Islamic journey towards knowledge, peace, and light.
                </motion.p>

                {/* Hero Image Section */}
                <motion.div
                    className="w-full h-96 bg-green-200 rounded-xl mb-16 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-2xl text-green-900 font-semibold">
                        📖 Hero Banner Placeholder
                    </span>
                </motion.div>

                {/* Features Section */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Quran Recitation", "Islamic Articles", "Community Events"].map((item, idx) => (
                        <motion.div
                            key={item}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-green-800 mb-2">{item}</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-green-100 py-10 mt-16">
                <p className="text-center text-green-800">&copy; 2025 NoorSite - All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;