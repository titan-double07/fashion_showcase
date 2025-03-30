import type { Struct, Schema } from '@strapi/strapi';

export interface HomeLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_home_landing_pages';
  info: {
    displayName: 'Hero Section';
    icon: 'house';
    description: '';
  };
  attributes: {
    hero_collection_video: Schema.Attribute.Component<
      'home.hero-collection-video',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
  };
}

export interface HomeIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_intro_sections';
  info: {
    displayName: 'Intro Section';
    description: '';
  };
  attributes: {
    paragraph_1: Schema.Attribute.Text;
    paragraph_2: Schema.Attribute.Text;
  };
}

export interface HomeHeroCollectionVideo extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_collection_videos';
  info: {
    displayName: 'Hero collection video';
    description: '';
  };
  attributes: {
    collection_name: Schema.Attribute.String;
    collection_media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface HomeCollectionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_collection_sections';
  info: {
    displayName: 'Collection Section';
    description: '';
  };
  attributes: {
    intro_media: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    design_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::design-collection.design-collection'
    >;
  };
}

export interface AboutSection1 extends Struct.ComponentSchema {
  collectionName: 'components_about_section1s';
  info: {
    displayName: 'Section1';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.landing-page': HomeLandingPage;
      'home.intro-section': HomeIntroSection;
      'home.hero-collection-video': HomeHeroCollectionVideo;
      'home.collection-section': HomeCollectionSection;
      'about.section1': AboutSection1;
    }
  }
}
