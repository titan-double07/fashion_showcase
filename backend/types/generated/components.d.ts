import type { Struct, Schema } from '@strapi/strapi';

export interface HomeLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_home_landing_pages';
  info: {
    displayName: 'Hero Section';
    icon: 'house';
    description: '';
  };
  attributes: {
    design_name: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
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
      'about.section1': AboutSection1;
    }
  }
}
