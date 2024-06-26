export interface Movie {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   String;
    Poster: string;
}

export interface Api {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}
