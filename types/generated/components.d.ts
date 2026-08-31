import type { Schema, Struct } from '@strapi/strapi';

export interface LegalSection extends Struct.ComponentSchema {
  collectionName: 'components_legal_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'bulletList';
  };
  attributes: {
    anchor: Schema.Attribute.String & Schema.Attribute.Required;
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectMedia extends Struct.ComponentSchema {
  collectionName: 'components_project_media';
  info: {
    description: 'One cut or still in a project gallery. Video items need their own poster frame.';
    displayName: 'Gallery item';
    icon: 'landscape';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'videos' | 'files'>;
    fileUrl: Schema.Attribute.String;
    kind: Schema.Attribute.Enumeration<['video', 'image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'video'>;
    poster: Schema.Attribute.Media<'images'>;
  };
}

export interface ProjectStat extends Struct.ComponentSchema {
  collectionName: 'components_project_stats';
  info: {
    description: 'One figure in the KEY INFO row on a project page.';
    displayName: 'Stat';
    icon: 'chartPie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    description: 'Rendered three ways: one line in the footer, two lines on Contact, and as a schema.org PostalAddress in the homepage JSON-LD.';
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    countryCode: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    mapsUrl: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.String & Schema.Attribute.Required;
    street: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: 'The band that closes Home, Work, News, About and every project page.';
    displayName: 'Footer';
    icon: 'layout';
  };
  attributes: {
    copyright: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    followLabel: Schema.Attribute.String & Schema.Attribute.Required;
    legalLinkLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'legal.section': LegalSection;
      'project.media': ProjectMedia;
      'project.stat': ProjectStat;
      'shared.address': SharedAddress;
      'shared.footer': SharedFooter;
      'shared.seo': SharedSeo;
    }
  }
}
