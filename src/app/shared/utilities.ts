import Character from "../models/Character";
import Starship, { StarshipJson } from "../models/Starship";

export interface jsonCharacter {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string,
}

export function convertCharacter (character: jsonCharacter): Character {
  return {
    name: character.name,
    height: character.height,
    mass: character.mass,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    eyeColor: character.eye_color,
    birthYear: character.birth_year,
    gender: character.gender,
    homeworld: character.homeworld,
    films: character.films,
    species: character.species,
    vehicles: character.vehicles,
    starships: character.starships,
    created: character.created,
    edited: character.edited,
    url: character.url,
  }
}

export function convertStarship (starship: StarshipJson): Starship {
  return {
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    maxAtmospheringSpeed: starship.max_atmosphering_speed,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
    consumables: starship.consumables,
    hyperdriveRating: starship.hyperdrive_rating,
    MGLT: starship.MGLT,
    starshipClass: starship.starship_class,
  }
}