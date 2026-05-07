import { Landmark, MapPin, Briefcase } from 'lucide-react'

const Cards = ({ Image, Name, designation, Company, Experience, Location, Post, Rate, skills }) => {
  return (
    <div className="group relative bg-[#1a1d27] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-violet-500/15 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-violet-600 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <img src={Image} alt={Name} className="w-14 h-14 rounded-full object-cover border-2 border-violet-500" />
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1a1d27]" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-[15px] font-semibold text-white truncate tracking-tight">
            {Name.replace(/_/g, ' ')}
          </h2>
          <p className="text-[13px] text-slate-400 mt-0.5">{designation}</p>
        </div>
        <span className="shrink-0 text-[11px] font-bold text-white bg-linear-to-br from-violet-600 to-violet-400 px-3 py-1 rounded-full">
          {Rate}
        </span>
      </div>

      <div className="h-px bg-white/10" />

      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[13px] text-slate-400">
          <Landmark size={13} className="text-violet-400 shrink-0" />
          {Company}
        </div>
        <div className="flex items-center gap-2 text-[13px] text-slate-400">
          <MapPin size={13} className="text-violet-400 shrink-0" />
          {Location}
        </div>
        <div className="flex items-center gap-2 text-[13px] text-slate-400">
          <Briefcase size={13} className="text-violet-400 shrink-0" />
          {Post}
        </div>
      </div>

      
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-md border transition-colors duration-200 cursor-default
              ${i === skills.length - 1
                ? 'bg-violet-600 text-white border-transparent'
                : 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/25 hover:border-violet-500 hover:text-white'
              }`}
          >
            {skill}
          </span>
        ))}
      </div>

    
      <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-2">{Experience}</p>

      
      <div className="flex gap-2 mt-auto pt-1">
        <button className="flex-1 bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-semibold py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95">
          Hire Now
        </button>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 text-slate-400 hover:text-violet-300 text-[13px] px-4 py-2.5 rounded-lg transition-all duration-200">
          Profile
        </button>
      </div>

    </div>
  )
}

export default Cards
