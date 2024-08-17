import { client } from "../lib/sanity";
export async function getSingleJob(pageNum, job, city) {
  const pageSize = 21;
  const start = pageNum * pageSize;
  const end = start + pageSize - 1;
  const query = `
  *[_type == 'singleJob' ${
    job !== null ? "&& category == '" + job + "'" : ""
  } ${city !== null ? "&& city == '" + city + "'" : ""}][${start}...${end}] {
    logoCompany,
    title,
    "currentSlug": slug.current,
    nameCompany,
    expYears,
    salary,
    today,
    AboutTheJob,
    category,
    city
  }`;
  const data = await client.fetch(query);
  return data;
}
export async function getCategoryJob() {
  const query = `
  *[_type == 'singleJob' && category == category] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  "currentSlug": slug.current,
  salary,
  today,
  AboutTheJob,
  category,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobEngineer() {
  const query = `
  *[_type == 'singleJob' && category == 'Software Engineer'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  "currentSlug": slug.current,
  salary,
  today,
  AboutTheJob,
  category,
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getJobManager() {
  const query = `
  *[_type == 'singleJob' && category == 'Engineering Manager'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobProduct() {
  const query = `
  *[_type == 'singleJob' && category == 'Product Manager'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobDesigner() {
  const query = `
  *[_type == 'singleJob' && category == 'Designer'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getJobAnalytics() {
  const query = `
  *[_type == 'singleJob' && category == 'Data Engineer'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobSales() {
  const query = `
  *[_type == 'singleJob' && category == 'Sales'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobMarketing() {
  const query = `
  *[_type == 'singleJob' && category == 'Marketing'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobOperations() {
  const query = `
  *[_type == 'singleJob' && category == 'Operations Manager'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobRecruiter() {
  const query = `
  *[_type == 'singleJob' && category == 'Recruiter'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}
export async function getJobFinance() {
  const query = `
  *[_type == 'singleJob' && category == 'Finance'] {
  logoCompany,
  title,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
  "currentSlug": slug.current,
}`;
  const data = await client.fetch(query);
  return data;
}

export async function sss() {
  const query = `
  *[_type == 'singleJob'  && slug.current == slug.current ] {
  logoCompany,
  title,
  "currentSlug": slug.current,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
}`;
  const data = await client.fetch(query);
  return data;
}
