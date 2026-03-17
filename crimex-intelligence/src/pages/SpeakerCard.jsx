import { motion } from 'framer-motion';

const SpeakerCard = ({ name, role, image }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-md"
  >
    <div className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-500">
       {/* <img src={image} alt={name} /> */}
       <span className="text-2xl font-bold flex items-center justify-center h-full text-white">{name[0]}</span>
    </div>
    <h4 className="font-bold text-white">{name}</h4>
    <p className="text-xs text-blue-400 uppercase font-bold mt-1">{role}</p>
  </motion.div>
);