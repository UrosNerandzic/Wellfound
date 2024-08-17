export default {
  name: 'teams',
  type: 'document',
  title: 'Teams',
  fields: [
    {
      name: 'imagePerson',
      type: 'image',
      title: 'Image Person',
    },
    {
      name: 'nameAndSurname',
      type: 'string',
      title: 'Name And Surname',
    },
    {name: 'specialty', type: 'string', title: 'Specialty'},
    {name: 'location', type: 'string', title: 'Location'},
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'via',
      type: 'boolean',
      title: 'Via',
    },
    {
      name: 'formerTeam',
      type: 'boolean',
      title: 'Former Team',
    },
    {
      name: 'founders',
      type: 'boolean',
      title: 'Founder',
    },
    {
      name: 'advisors',
      type: 'boolean',
      title: 'Advisor',
    },
    {
      name: 'boardMember',
      type: 'boolean',
      title: 'Board Member',
    },
    {
      name: 'background',
      type: 'array',
      title: 'Background',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
        },
        {
          type: 'object',
          name: 'backgroundContent',
          title: 'Background Content',
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
  ],
}
