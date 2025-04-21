import React from 'react';
import { motion } from "framer-motion";

export function About() {
    return (
        <div className="bg-white min-h-screen">
            <section className="max-w-6xl mx-auto px-6 py-20">
                <motion.h1
                    className="text-5xl font-bold text-green-800 mb-8 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About NoorSite
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    NoorSite is dedicated to providing valuable Islamic content and fostering a community for learning and spirituality.
                    Our goal is to offer authentic resources for everyone — from students to scholars.
                </motion.p>

                {/* Timeline / Journey */}
                <div className="relative pl-8 border-l-4 border-green-300 space-y-12">
                    {[1, 2, 3, 4].map((step) => (
                        <motion.div
                            key={step}
                            className="relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: step * 0.2 }}
                        >
                            <div className="absolute -left-6 top-1 w-4 h-4 bg-green-500 rounded-full" />
                            <h3 className="text-2xl font-semibold text-green-700 mb-2">Milestone {step}</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-green-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold text-center text-green-800 mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-24 h-24 rounded-full bg-green-200 mx-auto mb-4" />
                                <h4 className="text-lg font-bold text-center text-green-700">Team Member</h4>
                                <p className="text-sm text-center text-gray-600">Role or short bio here.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-100 py-10 mt-16">
                <p className="text-center text-green-800">&copy; 2025 NoorSite - Built with 💚</p>
            </footer>
        </div>
    );
}

export default About;