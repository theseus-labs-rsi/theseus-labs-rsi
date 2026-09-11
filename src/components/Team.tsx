import { featuredMembers, industryMembers, researchMembers } from '../data/team'

function MemberGrid({ members, className = '' }: { members: typeof researchMembers; className?: string }) {
  return (
    <div className={`team-grid ${className}`}>
      {members.map((member) => (
        <article className="team-member" key={member.name}>
          <p className="team-focus">{member.focus}</p>
          <h4>{member.name}<span lang="zh-CN">{member.nameZh}</span></h4>
          <p className="team-bio">{member.bio}</p>
        </article>
      ))}
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="content-section team-section" aria-labelledby="team-title">
      <div className="section-heading team-heading">
        <div>
          <p className="section-label">OUR TEAM</p>
          <h2 id="team-title">The people behind Theseus.</h2>
        </div>
        <p>Research and engineering across self-improving environments, models, evaluation, and data.</p>
      </div>

      <div className="team-featured">
        {featuredMembers.map((member) => (
          <article className="team-profile" key={member.name}>
            <img className="team-portrait" src={member.portrait} alt={member.name} width={member.width} height={member.height} loading="lazy" />
            <div>
              <h3>{member.name}<span lang="zh-CN">{member.nameZh}</span></h3>
              <p className="team-position">{member.role}<br />{member.affiliation}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="team-group">
        <h3 className="team-group-title">Research & engineering</h3>
        <MemberGrid members={researchMembers} />
      </div>
      <div className="team-group">
        <h3 className="team-group-title">Operations & growth</h3>
        <MemberGrid members={industryMembers} className="team-industry-grid" />
      </div>
    </section>
  )
}
