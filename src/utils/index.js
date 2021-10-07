export const getQueryParam = (query, paramName) =>
  new URLSearchParams(query).get(paramName);

export const getFiltersUrl = (base, query) => `${base}?${query}`;
