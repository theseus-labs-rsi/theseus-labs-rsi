// Replace these fictional examples with approved community comments when available.
const comments = [
  { name: 'Alex Morgan', initials: 'AM', quote: 'The interesting question is not just what a system learns, but how it changes the way it learns.' },
  { name: 'Sam Chen', initials: 'SC', quote: 'A useful lens for thinking about the feedback loops behind more capable, adaptable AI systems.' },
  { name: 'Jordan Lee', initials: 'JL', quote: 'I would love to see more open experiments connecting long-horizon learning with verifiable progress.' },
  { name: 'Maya Patel', initials: 'MP', quote: 'The connection between experience, strategy, and improvement leaves plenty of room for new ideas.' },
  { name: 'Taylor Brooks', initials: 'TB', quote: 'How do we know an improvement will last? That feels like a question worth building around.' },
  { name: 'Riley Kim', initials: 'RK', quote: 'Looking forward to research that makes these evolving systems easier to understand and evaluate.' },
]

export default function CommunityComments() {
  return (
    <section className="content-section community-comments" aria-labelledby="comments-title">
      <div className="section-heading">
        <div>
          <p className="section-label">COMMUNITY NOTES</p>
          <h2 id="comments-title">Ideas that keep evolving.</h2>
        </div>
      </div>
      <p className="comments-note" id="comments-note">Sample comments with fictional names and avatars.</p>
      <div
        className="comments-window"
        id="comments-window"
        role="region"
        aria-label="Sample community comments"
        aria-describedby="comments-note"
        tabIndex={0}
      >
        <div className="comments-track">
          {[0, 1].map((copy) => (
            <div className={`comments-group${copy ? ' comments-copy' : ''}`} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {comments.map((comment, index) => (
                <figure className="comment-card" key={comment.name}>
                  <figcaption>
                    <span className={`comment-avatar avatar-${index % 3}`} aria-hidden="true">{comment.initials}</span>
                    <span><strong>{comment.name}</strong><span className="comment-role">Sample reader</span></span>
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
