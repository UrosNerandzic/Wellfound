"use client";
import { PortableText } from "next-sanity";
import LoadingPage from "../LoadingPage";
import { CultureAndBenefits } from "../CultureAndBenefits";

function CultureAndBenefitsPage({ data }) {
  return (
    <section className="styles_component__AIOKZ">
      {data.cultureAndBenefits ? (
        <>
          <h1 className="text-xl font-medium text-dark-aaaa antialiased mb-4">
            Culture and benefits at {data.title}
          </h1>
          <div className="mb-12">
            <PortableText
              value={data.cultureAndBenefits}
              components={CultureAndBenefits}
            />
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </section>
  );
}

export default CultureAndBenefitsPage;
