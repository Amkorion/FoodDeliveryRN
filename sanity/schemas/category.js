export default {
  name: 'category',
  title: 'Категорія меню',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва категорії',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
    },
  ],
}
