import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "Your Project ID Here",
  dataset: "lpkhcp48",
  useCdn: true,
});