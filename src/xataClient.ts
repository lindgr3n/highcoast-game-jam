import { XataClient } from './xata';

const xataClient = new XataClient({ apiKey: import.meta.env.XATA_API_KEY, branch: import.meta.env.XATA_BRANCH });
export { xataClient };