export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name', //name of the person leaving the testimonial
      title: 'Name', 
      type: 'string',
    },
    {
      name: 'company', //if they work for a company
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl', //picture of the person leaving the testimonial
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true, //for cropping
      },
    },
    {
        name: 'feedback',
        title: 'Feedback',
        type: 'string',
    }
  ],
}
