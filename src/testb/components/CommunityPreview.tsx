const comments = [
  { name: 'Mira', text: 'How do we know an agent is improving beyond the benchmark?' },
  { name: 'Alex', text: 'Try unseen tasks, then compare what changes across iterations.' },
  { name: 'Kai', text: 'What should an agent remember after an experiment fails?' },
  { name: 'Mira', text: 'The conditions behind the failure, not just the outcome.' },
  { name: 'Alex', text: 'Can a strategy learned on one task help with a different problem?' },
  { name: 'Kai', text: 'That’s the interesting test: which lessons actually transfer?' },
]

export function CommunityPreview() {
  return (
    <section className="community-preview" aria-label="Community sample comments">
      <div className="community-scroll" tabIndex={0} aria-label="Sample comments. Focus or hover to pause scrolling.">
        <div className="community-track">
          {[false, true].map((duplicate) => (
            <ul className="community-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {comments.map((comment, index) => (
                <li className="community-card" key={index}>
                  <div className="community-person">
                    <span className={`community-avatar community-avatar-${comment.name.toLowerCase()}`} aria-hidden="true">{comment.name[0]}</span>
                    <span className="community-author">{comment.name}</span>
                  </div>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="community-caption">Illustrative comments</p>
    </section>
  )
}
