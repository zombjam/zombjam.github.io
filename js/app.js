$(function () {
  setTimeout(function () {
    $('#loading-bar-wrapper').fadeOut(500);
  }, 300);

  if (SEARCH_SERVICE === 'google') {
    customSearch = new GoogleCustomSearch({
      apiKey: GOOGLE_CUSTOM_SEARCH_API_KEY,
      engineId: GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
      imagePath: '/images/',
    });
  } else if (SEARCH_SERVICE === 'algolia') {
    customSearch = new AlgoliaSearch({
      apiKey: ALGOLIA_API_KEY,
      appId: ALGOLIA_APP_ID,
      indexName: ALGOLIA_INDEX_NAME,
      imagePath: '/images/',
    });
  } else if (SEARCH_SERVICE === 'hexo') {
    customSearch = new HexoSearch({
      imagePath: '/images/',
    });
  } else if (SEARCH_SERVICE === 'azure') {
    customSearch = new AzureSearch({
      serviceName: AZURE_SERVICE_NAME,
      indexName: AZURE_INDEX_NAME,
      queryKey: AZURE_QUERY_KEY,
      imagePath: '/images/',
    });
  } else if (SEARCH_SERVICE === 'baidu') {
    customSearch = new BaiduSearch({
      apiId: BAIDU_API_ID,
      imagePath: '/images/',
    });
  }
});
