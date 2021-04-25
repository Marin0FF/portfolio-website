import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "lpkhcp48",
  dataset: "production",
  useCdn: true,
});