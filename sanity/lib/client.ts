import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../y/schemas/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
