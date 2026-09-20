import { getCollection, type CollectionEntry } from 'astro:content';

export type Example = CollectionEntry<'examples'>;

export async function getExamples(): Promise<Example[]> {
  const examples = await getCollection('examples');
  return examples.sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name));
}

export function examplePath(example: Example): string {
  return `/examples/${example.id}`;
}
