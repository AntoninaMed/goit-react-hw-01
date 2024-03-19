import styles from "./FriendListItem.module.css"
const FriendListItem = ({name, avatar, isOnline}) => {
    return(
        <div>
        <div className={styles.cardFriends}>
  <img className={styles.imgItem} src={avatar} alt="Avatar" width="48" />
  <p className={styles.nameFriends}>{name}</p>
  <p className={isOnline ? styles.onlineStyle : styles.oflineStyle}>{isOnline ? "Online" : "Offline"}</p>
</div>
</div>
    )
};
export default FriendListItem;