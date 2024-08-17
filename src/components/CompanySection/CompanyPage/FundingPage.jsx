import LoadingPage from "../LoadingPage";

function FundingPage({ data }) {
  return (
    <section className="styles_component___DsQw">
      {data.funding ? (
        <>
          <h1 className="text-xl font-medium text-dark-aaaa antialiased mb-4">
            {data.title} Funding
          </h1>
          <div className="styles_component__Z4fLr">
            <div className="funded"></div>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </section>
  );
}

export default FundingPage;
