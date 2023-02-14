export default {
  name: 'restaurant',
  title: 'Ресторан',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Назва Ресторану',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Короткий опис',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Зображення ресторану',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'широта',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      type: 'number',
      title: 'довгота',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Адреса ресторану',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Рейтинг ресторану (від 1 до 5 зірок)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Будь ласка введіть значення від 1 до 5'),
    },
    {
      name: 'type',
      title: 'Категорія',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Страви',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
