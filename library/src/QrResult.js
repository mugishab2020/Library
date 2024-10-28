import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EntryDetails from "./EntryDetails";

function QrResult() {
  const { refId } = useParams();

  console.log(refId);
  const url = process.env.REACT_APP_BASE_URL;

  // fetching student data from the backend
  const fetchStudent = async (refId) => {
    const { data } = await axios.get(
      `${url}/history/${refId}`
    );
    return data;
  };

  const { data, isFetching, error } = useQuery({
    queryKey: ["fetchStudent", refId],
    queryFn: () => fetchStudent(refId),
    enabled: true,
  });
  console.log(data);
  return (
    <div>
      <h1 className="qr-result__header">Entry Info</h1>

      {isFetching ? (
        <p className="qr-result__loader">Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <EntryDetails student={data.user} />
      )}
    </div>
  );
}

export default QrResult;
