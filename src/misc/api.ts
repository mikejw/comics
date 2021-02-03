
import axios from "axios";

const API = 'https://gateway.marvel.com';
const API_ROUTE = '/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';

interface urls {
  type: string,
  url: string
}

interface series {
  resourceURI: string,
  name: string
}

interface variants {
  "resourceURI": string,
  "name": string
}

interface date {
  type: string,
  date: string
}

interface price {
  type: string,
  price: number
}

interface thumbnail {
  path: string,
  extension: string
}

interface creatorItem {
  resourceURI: string,
  name: string,
  role: string
}

interface storyItem {
  resourceURI: string,
  name: string,
  type: string
}

export interface Comic {
  id: number,
  digitalId: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: null | string,
  modified: string,
  isbn: string,
  upc: string,
  diamondCode: string,
  ean: string,
  issn: string,
  format: string,
  pageCount: number,
  textObjects: string[],
  resourceURI: string,
  urls: urls[]
  series: series
  variants: variants[]
  collections: string[],
  collectedIssues: string[],
  dates: date[]
  prices: price[]
  thumbnail: thumbnail,
  image: any[],
  "creators": {
    available: number,
    collectionURI: string,
    items: creatorItem[],
    returned: number
  },
  characters: {
    available: number,
    collectionURI: string,
    items: any[],
    returned: number
  },
  stories: {
    available: number,
    collectionURI: string,
    items: storyItem[]
    returned: number
  },
  events: {
    available: number,
    collectionURI: string,
    items: any[],
    returned: number
  }
}

interface Response {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  etag: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Comic[]
  }
}

export async function callAPI() {
  let res: Response | {} = {};
  let error: any = {};
  try {
    return await axios.get(
      `${API}${API_ROUTE}`
    )
      .then(function (response) {
        res = response.data;
        return [ res, error ];
      })
      .catch(function (err) {
        error = err;
        return [ res, error ];
      });
  } catch (err) {
    error = err;
    return [ res, error ];
  }
}
