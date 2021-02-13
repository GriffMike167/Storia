import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly image: string;
  readonly photographer: string;
  readonly description: string;
  readonly currentPrice: number;
  readonly specialPrice?: number;
  readonly equipment: string;
  readonly props: string;
  readonly workExperince: string;
  readonly venuesWorked: string;
  readonly latitude: number;
  readonly longitude: number;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Venue {
  readonly id: string;
  readonly image: string;
  readonly venue: string;
  readonly description: string;
  readonly specialPrice: number;
  readonly totalPrice: number;
  readonly latitude: number;
  readonly longitude: number;
  constructor(init: ModelInit<Venue>);
  static copyOf(source: Venue, mutator: (draft: MutableModel<Venue>) => MutableModel<Venue> | void): Venue;
}

export declare class Caterer {
  readonly id: string;
  readonly image: string;
  readonly caterer: string;
  readonly description: string;
  readonly perPersonPrice: number;
  readonly totalPrice: number;
  readonly latitude: number;
  readonly longitude: number;
  constructor(init: ModelInit<Caterer>);
  static copyOf(source: Caterer, mutator: (draft: MutableModel<Caterer>) => MutableModel<Caterer> | void): Caterer;
}