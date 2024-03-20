import styles from "./FriendListItem.module.css"
const FriendListItem = ({name, avatar, isOnline}) => {
    return(
        <div className={styles.cardFriends}>
  <img className={styles.imgItem} src={avatar} alt="Avatar" width="48" />
  <p className={styles.nameFriends}>{name}</p>
  <p className={isOnline ? styles.onlineStyle : styles.offlineStyle}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
};
export default FriendListItem;