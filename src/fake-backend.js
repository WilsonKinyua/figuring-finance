const DUMMY_BLOGS = [
  {
    id: 1,
    title: "4 Cheap and Easy Fake Takeaway Meals to Cook at Home",
    description:
      "<p>The first baby Mountain Bongo born in the wild through an 18 yearlong conservation programme has been captured on camera, in a major boost to one of the world’s most critically endangered antelope</p><p>The baby, whom we have named Fanaka, meaning ‘achievement’ in Swahili, was born on 12 July 2022 at the Mawingu Mountain Bongo Sanctuary, where the elusive, reddish-brown coloured species were reintroduced in March of this year. The Mawingu Sanctuary is managed by Mount Kenya Wildlife Conservancy (MKWC).</p><p>Fanaka was first spotted on Tuesday, 12 July 2022, by MKWC's Head of Conservancy Dr Robert Aruho. Since then, she has been photographed and is believed to be doing well, staying close to her mother, Kavu.</p><p>Kavu was one of the first five Bongos released into the Mawingu Mountain Bongo Sanctuary on 9 March 2022.&nbsp;Her newborn is her first calf, and the first Mountain Bongo to be born in this wild sanctuary.</p><p>Born on 2 March 2018 (4 years old), Kavu is a female Mountain Bongo with many firsts to her name. She was the first calf sired by Riziki (one of the older male Bongos at the Conservancy) and was the first female Bongo introduced to the Mawingu Sanctuary and now she has given birth to the first Mountain Bongo in the wild through this conservation programme.</p><p>Kavu is very shy and wary of approach and her distinguishing feature is the downward curve of her left ear, almost as if she has a direct line to hearing Mother Nature's whispers. From most recent sightings, we know she will be a protective and caring mother to her new baby.</p><p>In a bid to save the Bongo from extinction, MKWC, a not-for-profit organisation was established in 2004, to start the breeding and rewilding program. The program started with the importation of 18 Mountain Bongos from several zoos across North America, and this calf is a direct descendant of the bongos that were repatriated from North America to Kenya.</p><p>This birth is an important milestone as it means that the Bongos that were initially imported 18 years ago have successfully bred and adapted to the environment of Mount Kenya.</p><p>Currently, there are less than 100 mountain bongos living in the wild. Decades of poaching, live trade, predation and disease, have pushed this antelope to the verge of extinction according to the International Union for Conservation of Nature (IUCN) which has the sub-species listed as critically endangered on the Red list of threatened species. Without further action, the IUCN <a href='https://www.iucnredlist.org/species/22057/50197212'>predicts</a> that the number of Mountain Bongo likely to continue to decline unless deliberate actions are put in place.</p><p>Breeding and rewilding of the Mountain Bongo through Mawingu Mountain Bongo Sanctuary provides a catalyst for the recovery of the population of this majestic shy antelope Hon. Najib Balala, the Cabinet Secretary for Tourism and Wildlife, officially opened the 776-acre sanctuary earlier this year, alongside Kenya Wildlife Service (KWS), Kenya Forest Service (KFS) and partners.</p><p><strong>Speaking about the sighting of the new calf in the sanctuary, Dr Aruho, said:</strong></p><blockquote><p>I spent many hours and sleepless nights tracking Fanaka’s mother Kavu when she when into hiding in the forest to give birth. I eventually picked up not one, but two sets of footprints, one of which was a lot smaller than the other.<br><br>After tracking the footprints deeper into the forest and over a cliff, I finally laid eyes on the newborn calf. My heart almost skipped a beat, and I was tingling with joy. The calf gave me a small stare, carefully flapping the ears. I was overjoyed and my hands were shaking.<br><br>Getting a glimpse of baby Fanaka has meant that the last 18 years of dedication were all worth it. I could not be prouder of the team at MKWC and more thankful to all our supporters, including the government of Kenya, KFS and KWS for making the sanctuary establishment a reality.”<br><br>The establishment of the Sanctuary is an important achievement in the implementation of the Kenya National Recovery and Action Plan for the Bongo (2019-2023), whose long-term vision is to achieve a metapopulation of 750 individuals by the year 2050.<br><br>The birth of Fanaka represents a significant step towards achieving this vision.<br><br>MKWC is at the forefront of Bongo conservation globally. Its Mawingu Sanctuary was the first-ever Mountain Bongo sanctuary in Africa and the world. It aims to sustain an annual birth rate of 12 Mountain Bongo calves per year. Reaching the targeted numbers will require an estimated US$ 200,000 annually which will only be achieved with the generous support of the general public and corporate partners.<br><br>If you wish to learn more about how to support the MKWC’s fight to protect the Mountain Bongo, please visit our website <a href='https://mountkenyawildlifeconservancy.org/res/logo.png'>here</a>.</p></blockquote><p><strong>Nyawira Kariuki, Chair of the MWKC said:</strong></p><blockquote><p>We hope the birth of baby Fanaka will bring a smile to the faces of Kenyans and animal lovers around the world. The birth of an animal that sits on the brink of extinction is a genuine watershed moment that we should all celebrate and cherish.<br><br>Fanaka represents the start of the fightback for this majestic animal. We look forward to continuing to work hand-in-hand with our supporters and partners the Kenyan Wildlife Service and Kenya Forestry Service to realise our ambitious plans to have 70 fully rewilded Mountain Bongo in our Mawingu Sanctuary by 2025.</p></blockquote>",
    image:
      "https://thebrokegeneration.com/wp-content/uploads/2022/07/ydcqpsfw-600x399.jpeg",
    slug: "cook-at-home",
  },
  {
    id: 2,
    title: "My Rent Has Increased: What Can I Do?",
    description:
      "<p>As you know, with the cost of living rising, I’ve decided to slash my takeaway spending down to zero and opt for at-home fake takeaway foods instead. I’m calling it THE GREAT TAKEOUT FAKEOUT, and I’ve teamed up with Coles to bring you some of my favourite quick, easy, low prep meals using super affordable products exclusive to Coles, so you can fakeout your takeout and save your money too. Keep some of these takeout fakeout staples in your pantry and freezer, so when those pricey takeaway demons strike, you know what to do!</p>",
    image:
      "https://thebrokegeneration.com/wp-content/uploads/2022/07/jeremy-bezanger-v4IJJu1Qa0U-unsplash-600x450.jpg",
    slug: "how-to-manage-your-debt",
  },
];

const categories = [
  {
    id: 1,
    name: "Money",
    slug: "money",
  },
  {
    id: 2,
    name: "Lifestyle",
    slug: "lifestyle",
  },
  {
    id: 3,
    name: "Travel",
    slug: "travel",
  },
];

export function FakeBlogsBackend() {
  return DUMMY_BLOGS;
}

export function getCategories() {
  return categories;
}

export function getBlogBySlug(slug) {
  return DUMMY_BLOGS.find((blog) => blog.slug === slug);
}
