export default {
  name: 'singleCompany',
  type: 'document',
  title: 'Single Company',
  fields: [
    {
      name: 'LogoCompany',
      type: 'image',
      title: 'LogoCompany',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      title: 'Location',
      name: 'location',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'companySize',
      type: 'string',
      title: 'Company Size',
    },
    {
      name: 'website',
      type: 'string',
      title: 'Website',
    },
    {
      name: 'totalRaised',
      type: 'string',
      title: 'Total raised',
    },
    {
      name: 'companyType',
      type: 'string',
      title: 'Company Type',
    },
    {
      name: 'employeers',
      type: 'text',
      title: 'Employeers',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Rank',
      name: 'rank',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Markets',
      name: 'markets',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'overview',
      type: 'array',
      title: 'Overview',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'people',
      type: 'array',
      title: 'People',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
          ],
        },
        {
          type: 'object',
          name: 'customSpanBlock',
          title: 'Custom Span Block',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
            {
              name: 'spanFirst',
              type: 'string',
              title: 'Span First',
            },
            {
              name: 'spanSecond',
              type: 'string',
              title: 'Span Second',
            },
          ],
        },
        {type: 'image'},
      ],
    },
    {
      name: 'cultureAndBenefits',
      type: 'array',
      title: 'Culture and benefits',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'jobs',
      type: 'array',
      title: 'Jobs',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
}
