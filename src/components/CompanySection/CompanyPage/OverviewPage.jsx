import { PortableText } from "next-sanity";
import { Overview } from "../Overview";

function OverviewPage({ data }) {
  return (
    <section className="styles_component__thTp9">
      <PortableText value={data.overview} components={Overview} />
    </section>
  );
}

export default OverviewPage;
