export interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

export function getTableOfContents(content: string): TocItem[] {
  return [];
}