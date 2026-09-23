import { motionProjects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import VideoCard from './VideoCard.jsx'

export default function MotionGraphics() {
  return (
    <section id="motion-graphics" className="relative py-20 sm:py-28 bg-ink-alt border-t border-ink-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="B.Sc. Animation & Visual Graphics" title="Motion Graphics & Animation." />
        <p className="mt-4 text-bone-muted max-w-xl text-sm sm:text-base">
          Product animation, kinetic typography and brand-explainer style motion work.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {motionProjects.map((p, i) => (
            <VideoCard key={p.id} project={p} index={i} aspect={p.aspect} />
          ))}
        </div>
      </div>
    </section>
  )
}
