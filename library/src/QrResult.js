import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

function QrResult() {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get("refId");
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
  });

  return (
    <div>
      <h1 className="qr-result__header">Entry Info</h1>
      {data}
    </div>
  );
}

export default QrResult;
