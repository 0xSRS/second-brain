interface FeatureCardProps{
    icon: any, 
    title: string, 
    desc: string
}

const FeatureCard = (props:FeatureCardProps) => (
    <div className="p-8 rounded-2xl border border-slate-100 hover:border-[#bda06d]/30 transition-colors group">
        <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#bda06d]/10 transition-colors">
            {props.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{props.title}</h3>
        <p className="text-slate-500 leading-relaxed">{props.desc}</p>
    </div>
);

export default FeatureCard