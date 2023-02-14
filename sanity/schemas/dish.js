export default {
  name: 'dish',
  title: 'Страва',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Назва страви',
      type: 'string',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Короткий опис',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Вартість страви',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Зображення страви',
    },
  ],
}
