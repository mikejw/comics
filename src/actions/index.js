
export const FETCH_COMICS = 'FETCH_COMICS';
export const APPLY_FETCH_COMICS = 'APPLY_FETCH_COMICS';

export function fetchComics(route) {
    return {
        type: FETCH_COMICS,
        route
    };
}

