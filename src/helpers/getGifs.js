export const getGifs = async ( categoria ) => {
  const url = "https://api.giphy.com/v1/gifs/search?api_key=dnQSdDZQ6N9LHucsRk4suomTzTT1hu1f&limit=10&q=" + encodeURI(categoria);
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  // setImagenes(gifs);
  return gifs;
};