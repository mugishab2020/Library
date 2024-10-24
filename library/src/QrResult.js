import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function QrResult() {
  const { regNumber } = useParams(); // Get the regNumber from the URL

  // fetching data from backend to register the user
  const fetchStudent = async (regNumber) => {
    const { data } = await axios.get(
      `https://api.mockapi.com/qr?api_key=d7e59bc817154f0983784767f9fcfb52&regNumber`
    );
    console.log(data);
    return data;
  };

  const { data, refetch, isFetching, error } = useQuery({
    queryKey: ["fetchStudent", regNumber],
    queryFn: () => fetchStudent(regNumber),
    enabled: !!regNumber, // fetch only when the regNumber is defined.
  });

  return <div>hello</div>;
}

export default QrResult;
