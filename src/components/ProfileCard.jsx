const ProfileCard = ({ dataItem }) => {
  const { avatar_url: avatar, login: name, url: profile_url } = dataItem
  return (
    <article className="profile-card">
      <h3 className="profile-name">{name}</h3>
      <button className="btn-profile">
        <a target="_blank" href={profile_url}>
          {" "}
          view profile
        </a>
      </button>
      <img className="profile-img" src={avatar} alt={name} />
    </article>
  )
}
export default ProfileCard
