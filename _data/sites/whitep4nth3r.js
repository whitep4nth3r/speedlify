module.exports = {
  name: "whitep4nth3r.com", // optional, falls back to object key
  description: "whitep4nth3r.com",
  // skip if localhost
  skip: false,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://whitep4nth3r.com/",
    "https://whitep4nth3r.com/blog/how-i-improved-website-performance/",
    "https://whitep4nth3r.com/blog/",
    "https://whitep4nth3r.com/blog/html-is-all-you-need-to-make-a-website/",
    "https://whitep4nth3r.com/topics/css/",
    "https://whitep4nth3r.com/topics/javascript/",
    "https://whitep4nth3r.com/about/",
  ],
};
