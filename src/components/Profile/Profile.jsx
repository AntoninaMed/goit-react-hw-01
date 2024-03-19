import styles from "./Profile.module.css"
const Profile = ({name,tag,location,image,stats}) =>{
    return(
      <div className={styles.task}>
    <div className={styles.card}>
  <div className={styles.profile}>
    <img
     className={styles.img}  src={image} alt={name}
    />
    <p className={styles.name}>{name}</p>
    <p>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.list}>
    <li className={styles.li}>
      <span>Followers</span>
      <span className={styles.span}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.li}>Views</span>
      <span className={styles.span}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.li}>Likes</span>
      <span className={styles.span}>{stats.likes}</span>
    </li>
  </ul>
</div>
</div>)
};
export default Profile;