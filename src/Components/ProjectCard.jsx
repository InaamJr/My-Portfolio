/**
 * Node Modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, accent, classes = "" }) => {
  return (
    <article
      className={
        "group relative overflow-hidden rounded-3xl ring-1 ring-inset ring-zinc-800/70 bg-zinc-950/40 " +
        "hover:-translate-y-0.5 hover:ring-zinc-700/80 focus-within:ring-zinc-700/80 " +
        classes
      }
    >
        {/* Ambient gradient */}
        <div
            className={
                "pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br " +
                (accent || "from-sky-400/20 via-purple-400/10 to-transparent")
            }
            aria-hidden="true"
        />

        {/* Subtle grid/noise */}
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(60% 60% at 30% 10%, black 40%, transparent 70%)",
            }}
            aria-hidden="true"
        />

        <div className="relative p-5">
            {/* Image */}
            <figure className="relative aspect-[16/15] rounded-2xl overflow-hidden bg-zinc-900/60 ring-1 ring-inset ring-zinc-800/70">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent"
                    aria-hidden="true"
                />
            </figure>

            {/* Content */}
            <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="text-[15px] md:text-base font-medium tracking-wide text-zinc-100 truncate">
                    {title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-2 mb-6">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className={
                                    "font-mono h-8 px-3 inline-flex items-center rounded-full text-[12px] tracking-wide " +
                                    "text-zinc-300/90 bg-white/[0.03] ring-1 ring-inset ring-white/[0.06] " +
                                    "backdrop-blur-md"
                                }
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="shrink-0">
                    <div
                        className={
                            "h-11 w-11 rounded-2xl grid place-items-center ring-1 ring-inset ring-white/[0.08] " +
                            "bg-white/[0.04] backdrop-blur-md transition-all duration-300 " +
                            "group-hover:bg-white/[0.06] group-hover:scale-[1.03]"
                        }
                    >
                        <span
                                className="material-symbols-rounded text-zinc-200"
                                aria-hidden="true"
                            >
                                arrow_outward
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom edge highlight */}
            <div
                className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
            />

            {/* Full-card link */}
            <a
                href={projectLink}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 rounded-3xl focus:outline-none"
                aria-label={`Open project: ${title}`}
            />
        </div>
    </article>
  );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string.isRequired,
    accent: PropTypes.string,
    classes: PropTypes.string,
};

export default ProjectCard;