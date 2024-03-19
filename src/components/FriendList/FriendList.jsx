import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"
const FriendList = ({friends}) =>{
    return ( 
    <ul className={styles.list}>
	<li className={styles.li}>{friends.map(({id,avatar,name,isOnline})=>{
        return(<FriendListItem key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}/>)
    })}
	</li>
</ul>)
};
export default FriendList;