import { client } from "../lib/sanity";
export async function getTeams() {
  const query = `
   *[_type == 'teams'] {
   imagePerson,
   nameAndSurname,
   description,
   company,
   specialty,
   location,
   via,
   formerTeam,
   founders,
   advisors,
   boardMember,
   background
 }`;
  const data = await client.fetch(query);
  return data;
}
