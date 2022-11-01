const DUMMY_BLOGS = [
  {
    id: 1,
    title: "Let’s Talk about the 8th wonder of the world",
    description:
      "<p>Albert Einstein once said “Compound interest is the eighth wonder of the world. <strong>He who understands it, earns it; he who doesn’t, pays it.”</strong></p><p>Trust me, it’s easier to understand than you think it is not some financial technical term, it’s a pretty easy concept and knowing it will help you grow your money, think long-term and help you think harder before jumping into any “good” sounding debt (we’ll get more into that another day).</p><p>To keep it simple compound interest is interest on your interest. Simple interest is the amount earned at the end of the year the principal plus interest.</p><p>for example, 100,000 ksh in your savings earning 2% interest rate per annum and you leave it for one year (bank interest rates are quite low) so at the end of the year your money is at 102,00 KSH you’re probably hardly batting an eyelid at that interest rate. The problem with this, is if you are looking to save and not touch that money anytime soon than it isn’t doing much for you because your money is not beating the inflation rate, your money is losing value over time. That is something to consider look into money market funds (pretty low risk) which give better interest rates currently from 6-10% per annum (that’s way better than 2% right?) especially if you’re not looking to touch the money for some time.</p><p>But, compound interest is when you consistently leave the 100,000 KSH to grow and earn interest on your interest. That is when you start seeing the money rolling in and doesn’t it feel awesome! You are basically earning free money it does not get better than that! Before you start balling out you have to pace yourself it takes some time and you got to play for the long-term for example:</p><p>&nbsp;</p><p><strong>2% interest per annum:</strong></p><p>Year 1: 100,000 KSH &nbsp; = 102,000 KSH</p><p>Year 2: 102,000 KSH &nbsp; = 104,040 KSH</p><p>Year 3: 104,040 KSH &nbsp; = 106,121. KSH</p><p>&nbsp;</p><p><strong>8% interest per annum:</strong></p><p>Year 1: 100,000 KSH&nbsp; = 108,000 KSH</p><p>Year 2: 108,000 KSH&nbsp; = 116,640 KSH</p><p>Year 3: 125,971 KSH&nbsp; = 125,971 KSH</p><p>&nbsp;</p><p>The great words of Warren Buffett <strong>“If you don’t find a way to make money while you sleep, you will work until you die.”</strong></p><p>This sounds cool, how does it work?</p><p>Compound interest accumulates over time and the more money you deposit the higher the interest rate which is the better for you! The key is to keep adding to your principal per month or bi-weekly or if you’re a lump-sum type of person than planning to deposit bigger amounts quarterly or every half-of the year. Being consistent is key and when the account starts looking juicy remember the goal for that money. Avoid aimlessly saving have a purpose for that saving or else you may be tempted to aimlessly spend.</p><p>I hope this makes compound interest simpler to understand and that it gets you excited to start making it work for you.&nbsp; Remember, to keep adding to your principal, consistency and patience will take you a mighty long way. The best time to start investing was yesterday the next best time is today.</p>",
    image:
      "https://thebrokegeneration.com/wp-content/uploads/2022/07/ydcqpsfw-600x399.jpeg",
    slug: "lets-talk-about-the-8th-wonder-of-the-world",
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
