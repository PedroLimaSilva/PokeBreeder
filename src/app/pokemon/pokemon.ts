export class Pokemon {

  "id": number;
  "dex": number;
  "name": string;
  "base_experience": number;
  "height": string;
  "is_default": boolean;
  "is_hatched": boolean=true;
  "order": number;
  "weight": string;
  "abilities": {
    "is_hidden": boolean;
    "slot": number;
    "ability": {
        "name": string,
        "url": string;
    }
  }[];
  "forms": {
    "name": string;
    "url": string
  }[];
  "game_indices": {
    "game_index": number;
    "version": {
        "name": string;
        "url": string
    }
  }[];
  "held_items": {
      "item": {
          "name": string;
          "url": string
      };
      "version_details": {
          "rarity": number;
          "version": {
              "name": string;
              "url": "http://pokeapi.co/api/v2/version/24/"
          }
      }[];
  }[];
  "moves": [{
      "move": {
          "name": string;
          "url": string
      };
      "version_group_details": [{
          "level_learned_at": number;
          "version_group": {
              "name": string;
              "url": string;
          },
          "move_learn_method": {
              "name": string;
              "url": string;
          }
      }]
  }];
  "species": {
      "name": string;
      "url": "http://pokeapi.co/api/v2/pokemon-species/1/"
  };
  "sprites": {
      "back_female": string;
      "back_shiny_female": string;
      "back_default": string;
      "front_female": string;
      "front_shiny_female": string;
      "back_shiny": string;
      "front_default": string;
      "front_shiny": string;
  };
  "stats": [{
      "base_stat": number;
      "effort": number;
      "stat": {
          "name": string;
          "url": string
      }
  }];
  "types": [
      {
          "slot": number;
          "type": {
              "name": string;
              "url": string;
          }
      }
  ]

}
