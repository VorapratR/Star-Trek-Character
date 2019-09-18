export interface Character {
    name: string;
    deceased: boolean;
}

export interface CharacterQuery {
    results: Character[];
    lastPage: boolean;
}