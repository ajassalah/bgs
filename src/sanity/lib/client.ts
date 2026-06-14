import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

type SanityParams = Record<string, unknown>

export function fetchFresh<T = any>(query: string, params: SanityParams = {}) {
  return client.fetch<T>(query, params, { cache: 'no-store' })
}
