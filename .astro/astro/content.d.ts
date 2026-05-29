declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"menu": {
"adrak-cha.md": {
	id: "adrak-cha.md";
  slug: "adrak-cha";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"assam-black.md": {
	id: "assam-black.md";
  slug: "assam-black";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"banana-cake.md": {
	id: "banana-cake.md";
  slug: "banana-cake";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"buttered-toast.md": {
	id: "buttered-toast.md";
  slug: "buttered-toast";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"cappuccino.md": {
	id: "cappuccino.md";
  slug: "cappuccino";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"cheese-toast.md": {
	id: "cheese-toast.md";
  slug: "cheese-toast";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"cold-brew.md": {
	id: "cold-brew.md";
  slug: "cold-brew";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"darjeeling.md": {
	id: "darjeeling.md";
  slug: "darjeeling";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"egg-toast.md": {
	id: "egg-toast.md";
  slug: "egg-toast";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"espresso.md": {
	id: "espresso.md";
  slug: "espresso";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"filter-coffee.md": {
	id: "filter-coffee.md";
  slug: "filter-coffee";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"kaathi-roll.md": {
	id: "kaathi-roll.md";
  slug: "kaathi-roll";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"kashmiri-kahwa.md": {
	id: "kashmiri-kahwa.md";
  slug: "kashmiri-kahwa";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"lebu-cha.md": {
	id: "lebu-cha.md";
  slug: "lebu-cha";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"maggi.md": {
	id: "maggi.md";
  slug: "maggi";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"masala-chai.md": {
	id: "masala-chai.md";
  slug: "masala-chai";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"mocha.md": {
	id: "mocha.md";
  slug: "mocha";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"mughlai-paratha.md": {
	id: "mughlai-paratha.md";
  slug: "mughlai-paratha";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"nimki.md": {
	id: "nimki.md";
  slug: "nimki";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"phuchka.md": {
	id: "phuchka.md";
  slug: "phuchka";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"singara.md": {
	id: "singara.md";
  slug: "singara";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"telebhaja.md": {
	id: "telebhaja.md";
  slug: "telebhaja";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
"tulsi-cha.md": {
	id: "tulsi-cha.md";
  slug: "tulsi-cha";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
