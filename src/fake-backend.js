const DUMMY_BLOGS = [
  {
    id: 1,
    title: "4 Cheap and Easy Fake Takeaway Meals to Cook at Home",
    description:
      "As you know, with the cost of living rising, I’ve decided to slash my takeaway spending down to zero and opt for at-home fake takeaway foods instead. I’m calling it THE GREAT TAKEOUT FAKEOUT, and I’ve teamed up with Coles to bring you some of my favourite quick, easy, low prep meals using super affordable products exclusive to Coles, so you can fakeout your takeout and save your money too. Keep some of these takeout fakeout staples in your pantry and freezer, so when those pricey takeaway demons strike, you know what to do! ",
    image:
      "https://thebrokegeneration.com/wp-content/uploads/2022/07/ydcqpsfw-600x399.jpeg",
    slug: "cook-at-home",
  },
  {
    id: 2,
    title: "My Rent Has Increased: What Can I Do?",
    description:
      "As you know, with the cost of living rising, I’ve decided to slash my takeaway spending down to zero and opt for at-home fake takeaway foods instead. I’m calling it THE GREAT TAKEOUT FAKEOUT, and I’ve teamed up with Coles to bring you some of my favourite quick, easy, low prep meals using super affordable products exclusive to Coles, so you can fakeout your takeout and save your money too. Keep some of these takeout fakeout staples in your pantry and freezer, so when those pricey takeaway demons strike, you know what to do! ",
    image:
      "https://thebrokegeneration.com/wp-content/uploads/2022/07/jeremy-bezanger-v4IJJu1Qa0U-unsplash-600x450.jpg",
    slug: "how-to-manage-your-debt",
  },
];

export function FakeBlogsBackend() {
  return DUMMY_BLOGS;
}

export function getBlogBySlug(slug) {
  return DUMMY_BLOGS.find((blog) => blog.slug === slug);
}
