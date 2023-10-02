import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "4fi9b256",
  dataset: "production",
  apiVersion: "2023-10-03",
  useCdn: false,
};

const client = createClient(config);

export default client;
