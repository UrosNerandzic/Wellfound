import { client } from "../lib/sanity";
async function getSingleCompany(title) {
  const query = `
   *[_type == 'singleCompany' && title == '${title}']{
   LogoCompany,
   title,
   employeers,
   description,
   rank,
   location,
   companyType,
   totalRaised,
   companySize,
   overview,
   website,
   markets,
   people,
   cultureAndBenefits
 }[0]`;
  const data = await client.fetch(query);
  return data;
}
export default getSingleCompany;
