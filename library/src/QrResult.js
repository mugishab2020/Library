import axios from "axios";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import EntryDetails from "./EntryDetails";

function QrResult() {
  const { refId } = useParams();

  console.log(refId);
  const apiKey = process.env.REACT_APP_MOCK_API_KEY;

  // fetching student data from the backend
  const fetchStudent = async (refId) => {
    const { data } = await axios.get(
      `https://${apiKey}.mockapi.io/users?refId=${refId}`
    );
    return data;
  };

  const { data, refetch, isFetching, error } = useQuery({
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
        data?.map((student) => <EntryDetails student={student} />)
      )}
    </div>
  );
}

export default QrResult;
