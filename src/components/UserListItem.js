import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import useThunk from "../hooks/useThunks";
import { removeUser } from "../store/";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
const UserListItem = ({ user }) => {
  console.log("in userListItem component", user);
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => {
    console.log("clicked on remove user button");
    console.log("in userListItem line -10", doRemoveUser);
    doRemoveUser(user);
  };
  const content = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error fetching data..</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={content}>
      <AlbumsList users={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
