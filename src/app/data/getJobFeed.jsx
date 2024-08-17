import { client } from "../lib/sanity";

export default async function getJobFeed() {
  const query = `
   *[_type == 'jobFeed']{
   coverImage1,
   title,
   descriptionOne,
   coverImage2,
   imageGetStarted,
   titleGetStarted,
   descriptionGetStarted,
   slug,
 }`;
  const data = await client.fetch(query);
  return data;
}
