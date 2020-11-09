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

  // 渲染 gitalk元件
  var gitalk = new Gitalk({
    clientID: 'f1be2b0af308ecb8e58e',
    clientSecret: 'a497f02da3fcb7c47f4632af23bf616df85c7be8',
    id: window.location.pathname,
    repo: 'zombjam.github.io.git',
    owner: 'zombjam',
    distractionFreeMode: false,
  });
  gitalk.render('gitalk-container');
});
