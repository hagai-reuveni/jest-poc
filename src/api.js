const API_BASE_URL = '';
export const toTileFormat = (raw) =>
  raw.filter(item => item.show.image)
  .map(item => ({
    id: item.show.externals.thetvdb,
    name: item.show.name,
    desc: item.show.genres.join(', '),
    summary: item.show.summary,
    img: (item.show.image || {}).medium,
  }));


export const search = (searchTerm) =>
  fetch(`${API_BASE_URL}/search/shows?q=${encodeURI(searchTerm)}`)
    .then(res => res.body)
    .then(data => {
      return data;
    });

export const showLookup = (showId) =>
fetch(`${API_BASE_URL}/lookup/shows?thetvdb=${showId}`)
    .then(res => res.data);

export const showCast = (showId) =>
fetch(`${API_BASE_URL}/shows/${showId}/cast`)
    .then(res => res.data);

export const showActor = (actorId) =>
fetch(`${API_BASE_URL}/people/${actorId}?embed=castcredits`)
    .then(res => res.data);

export const showActorCastCredit = (actorId) =>
fetch(`${API_BASE_URL}/people/${actorId}/castcredits?embed=show`)
    .then(res => res.data);
