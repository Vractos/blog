export const SITE = {
  website: "https://viniciusr.com", // replace this with your deployed domain
  author: "Paulo Vinicius",
  desc: "A personal blog about coding, startups, and life.",
  title: "Paulo Vinicius",
  ogImage: "astropaper-og.jpg",
  profile: "https://viniciusr.com/",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/Vractos/blog/tree/main/",
    text: "Suggest Changes",
    enabled: true,
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Sao_Paulo", // Set this empty and default will be "UTC"
} as const;
