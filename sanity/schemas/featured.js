export default {
  name: 'featured',
  title: 'Обране',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Назва обраної категорії',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Короткий опис',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Ресторани',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
