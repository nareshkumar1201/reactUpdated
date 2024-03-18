import { useFetchAlbumsQuery } from "../store";
const AlbumsList = ({ users }) => {
  console.log("in albumsList comp line-3", useFetchAlbumsQuery);
  console.log("in albums List line-4", users);
  const { isLoading, data, error } = useFetchAlbumsQuery(users);
  console.log("in albumsList line-4", isLoading, data, error);
  return (
    <div>
      <h1>this is Albums of {users.name}</h1>
    </div>
  );
};

export default AlbumsList;
