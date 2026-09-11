// User-provided editorial perspectives, displayed under pseudonyms.
const comments = [
  {
    name: 'Echo',
    initials: 'E',
    quote: 'The bottleneck in self-improvement is often the quality of the feedback a system learns from. An enterprise agent needs to distinguish outdated knowledge, missing context, and faulty reasoning before it can improve reliably. Better diagnosis makes accumulated experience a more useful source of learning.',
  },
  {
    name: 'Kernel',
    initials: 'K',
    quote: 'I expect AI engineering to become autonomous earlier than open-ended AI research because correctness and performance provide executable feedback. The recursive opportunity is to carry engineering experience across projects, so that each new model, hardware platform, or workload benefits from a better optimization process.',
  },
  {
    name: 'Orbit',
    initials: 'O',
    quote: 'The most valuable experience for an agent may be the interaction that reveals what it still cannot do. RSI requires judgment about which experiences to seek, which lessons to retain, and when those lessons stop applying. Learning what to learn is a central part of becoming more autonomous.',
  },
  {
    name: 'Relay',
    initials: 'R',
    quote: 'A production failure becomes especially valuable when it changes how the system handles an entire class of future failures. That requires turning individual corrections into reusable rules and skills, then testing them on unseen work. Human review can supply the feedback that makes this learning loop reliable.',
  },
  {
    name: 'Atlas',
    initials: 'A',
    quote: 'Recursive research depends on what one generation leaves for the next. Successor agents need executable evidence, failed branches, and the assumptions behind a result. As research accelerates, verification and knowledge inheritance will increasingly determine whether progress compounds or errors accumulate.',
  },
]

export default function CommunityComments() {
  return (
    <section className="content-section community-comments" aria-labelledby="comments-title">
      <div className="section-heading">
        <div>
          <p className="section-label">PERSPECTIVES</p>
          <h2 id="comments-title">Perspectives on RSI.</h2>
        </div>
      </div>
      <div
        className="comments-window"
        id="comments-window"
        role="region"
        aria-label="Perspectives on recursive self-improvement"
        tabIndex={0}
      >
        <div className="comments-track">
          {[0, 1].map((copy) => (
            <div className={`comments-group${copy ? ' comments-copy' : ''}`} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {comments.map((comment, index) => (
                <figure className="comment-card" key={comment.name}>
                  <figcaption>
                    <span className={`comment-avatar avatar-${index % 3}`} aria-hidden="true">{comment.initials}</span>
                    <strong>{comment.name}</strong>
                  </figcaption>
                  <blockquote><p>“{comment.quote}”</p></blockquote>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
