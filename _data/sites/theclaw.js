module.exports = {
  name: "theclaw.team", // optional, falls back to object key
  description: "theclaw.team",
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
  urls: ["https://theclaw.team", "https://theclaw.team/whitep4nth3r", "https://theclaw.team/join-the-team"],
};