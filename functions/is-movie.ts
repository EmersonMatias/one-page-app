export function isMovie(item: Movie | Serie): item is Movie {
    return (item as Movie).title !== undefined;
};
