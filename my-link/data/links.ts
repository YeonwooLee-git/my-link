export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export const dummyLinks: Link[] = [
  {
    id: "1",
    title: "인스타그램 (Instagram)",
    url: "https://instagram.com/your_id",
    icon: "instagram",
  },
  {
    id: "2",
    title: "유튜브 (YouTube)",
    url: "https://youtube.com/@your_channel",
    icon: "youtube",
  },
  {
    id: "3",
    title: "개인 블로그 (Blog)",
    url: "https://your-blog-url.com",
    icon: "rss",
  },
  {
    id: "4",
    title: "깃허브 (Github)",
    url: "https://github.com/your_id",
    icon: "github",
  },
  {
    id: "5",
    title: "포트폴리오 (Portfolio)",
    url: "https://your-portfolio.com",
    icon: "briefcase",
  },
];
