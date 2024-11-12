//second api
const [countryData, setCountryData] = useState(null);
const loadDetails = () => {
  axios
    .get(
      `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}?fullText=true`
    )
    .then((res) => {
      setCountryData(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
};

const details = () => {
  return (
    <>
      <p>{data.country}</p>
    </>
  );
};
