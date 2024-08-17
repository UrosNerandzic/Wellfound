export default {
  name: 'singleJob',
  type: 'document',
  title: 'Single Job',
  fields: [
    {
      name: 'logoCompany',
      type: 'image',
      title: 'LogoCompany',
    },
    {
      name: 'title',
      type: 'string',
      title: 'title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'nameCompany',
      type: 'string',
      title: 'nameCompany',
    },
    {
      name: 'expYears',
      type: 'string',
      title: 'ExpYears',
    },
    {
      name: 'salary',
      type: 'string',
      title: 'Salary',
    },
    {
      name: 'today',
      type: 'string',
      title: 'Today',
    },
    {
      name: 'city',
      type: 'string',
      title: 'city',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'AboutTheJob',
      type: 'array',
      title: 'About The Job',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'AboutTheCompany',
      type: 'array',
      title: 'About The Company',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'Jobs',
      type: 'array',
      title: 'Jobs',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
}
