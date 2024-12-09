function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=" , 2);
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value); // Use `2` so it only splits at the first "="
  }

  return queryParams;
}

module.exports = parseQueryString;
