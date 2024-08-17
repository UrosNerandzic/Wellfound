export default {
  name: 'jobFeed',
  type: 'document',
  title: 'jobFeed',
  fields: [
    {
      name: 'coverImage1',
      type: 'image',
      title: 'CoverImage1',
    },
    {
      name: 'descriptionOne',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'coverImage2',
      type: 'image',
      title: 'Cover Image2',
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
      name: 'imageGetStarted',
      type: 'image',
      title: 'Image Get Started',
    },
    {
      name: 'titleGetStarted',
      type: 'string',
      title: 'Title get started',
    },
    {
      name: 'descriptionGetStarted',
      type: 'text',
      title: 'Description get started',
    },
  ],
}
