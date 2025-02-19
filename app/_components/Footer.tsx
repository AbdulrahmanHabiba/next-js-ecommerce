import { Phone, Mail, MapPin, Linkedin, Facebook, Github, MessageCircle } from "lucide-react";

export default function Footer() {
        return (
            <footer id="Footer" className="bg-gray-50 w-full p-4 mt-4 shadow-md ">
                    <div className="max-w-screen-lg mx-auto flex gap-6 justify-center   ">
                            {/* Company Info */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-between  ">
                            <div>
                                    <h2 className="text-lg font-bold text-gray-800">E-Commerce</h2>
                                    <p className="mt-2 text-base text-gray-700">
                                            Your one-stop shop for all things amazing.
                                    </p>
                            </div>

                            {/* Contact Info */}
                            <div>
                                    <h3 className="text-sm font-bold text-gray-900">Contact</h3>
                                    <div className="mt-1 text-base text-gray-700 space-y-2">
                                            <p className="flex items-center space-x-3 hover:bg-gray-200 p-1 rounded">
                                                    <Phone size={18} />
                                                    <a href="tel:+201113951795" className="text-blue-600 hover:text-blue-800">
                                                            +20 11 13951795
                                                    </a>
                                            </p>
                                            <p className="flex items-center space-x-3 hover:bg-gray-200 p-1 rounded">
                                                    <Mail size={18} />
                                                    <a href="mailto:abdulrahmanhabibh@gmail.com" className="text-blue-600 hover:text-blue-800">
                                                            abdulrahmanhabibh@gmail.com
                                                    </a>
                                            </p>
                                    </div>
                            </div>
                    </div>
                            {/* Social Links */}
                            <div >
                                    <h3 className="text-sm font-bold text-gray-900">Follow Us</h3>
                                    <div className="flex flex-col sm:flex-row mt-2 gap-3">
                                            <div className="flex  flex-col lg:flex-row gap-3">
                                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all"
                                                       href="https://www.linkedin.com/in/abdulrahman-habiba-b6a34921a"
                                                       target="_blank">
                                                            <Linkedin size={18}/>
                                                    </a>

                                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all"
                                                       href="https://github.com/AbdulrahmanHabiba" target="_blank">
                                                            <Github size={18}/>
                                                    </a>
                                            </div>
                                                    <div className="flex flex-col lg:flex-row  gap-3">
                                                            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                                                               href="https://www.facebook.com/abdulrahmanhsan.habiba.3/"
                                                               target="_blank">
                                                                    <Facebook size={18}/>
                                                            </a>
                                                            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                                                               href="https://wa.me/201113951795" target="_blank">
                                                                    <MessageCircle size={18}/>
                                                            </a>
                                                    </div>
                                            </div>
                                    </div>
                            </div>

                            <div
                        className="border-t mt-6 pt-4 flex flex-col sm:flex-row justify-between text-base text-gray-600">
                            <p>&copy; 2025 E-Commerce Inc. All rights reserved.</p>
                            <div className="flex space-x-3">
                                    <a href="/" className="hover:text-blue-600 hover:bg-gray-200 p-1 rounded">F.A.Q</a>
                                    <a href="/" className="hover:text-blue-600 hover:bg-gray-200 p-1 rounded">Privacy Policy</a>
                                    <a href="/" className="hover:text-blue-600 hover:bg-gray-200 p-1 rounded">Terms</a>
                            </div>
                    </div>
            </footer>
        );
}
