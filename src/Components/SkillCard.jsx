/**
 * Node Modules
 */
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <div
            className={
                "group flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/30 px-4 py-3 " +
                "shadow-[0_0_0_1px_rgba(0,0,0,0.2)] backdrop-blur-md " +
                "hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/40 " +
                (classes || "")
            }
        >
            {/* Icon chip */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60 transition-colors group-hover:bg-zinc-900">
                <img src={imgSrc} width={26} height={26} alt={label} />
            </div>

            {/* Text */}
            <div className="min-w-0">
                <h3 className="truncate text-sm font-medium text-zinc-50">
                    {label}
                </h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                    {desc}
                </p>
            </div>

            {/* Tiny right accent */}
            <div className="ml-auto hidden h-2 w-2 rounded-full bg-zinc-100/20 group-hover:bg-zinc-100/40 sm:block" />
        </div>
    );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default SkillCard;
