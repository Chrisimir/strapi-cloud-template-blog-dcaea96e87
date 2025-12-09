import type { Schema, Struct } from '@strapi/strapi';

export interface HomeReview extends Struct.ComponentSchema {
  collectionName: 'components_home_reviews';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    name: Schema.Attribute.String;
    project: Schema.Attribute.String;
  };
}

export interface LegalSection extends Struct.ComponentSchema {
  collectionName: 'components_legal_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface MediaCaseImage extends Struct.ComponentSchema {
  collectionName: 'components_media_case_images';
  info: {
    displayName: 'Case Image';
    icon: 'landscape';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface MediaPressLogo extends Struct.ComponentSchema {
  collectionName: 'components_media_press_logos';
  info: {
    displayName: 'Press Logo';
    icon: 'landscape';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: '';
    displayName: 'Menu item';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sectionIndex: Schema.Attribute.Integer;
  };
}

export interface NewsArticle extends Struct.ComponentSchema {
  collectionName: 'components_news_articles';
  info: {
    displayName: 'Article';
    icon: 'quote';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PortfolioMetric extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_metrics';
  info: {
    displayName: 'metric';
    icon: 'chartPie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    sublabel: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PortfolioVideoGroup extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_video_groups';
  info: {
    displayName: 'videoGroup';
    icon: 'play';
  };
  attributes: {
    desktop: Schema.Attribute.String;
    mobile: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.String;
    copyrightTemplate: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    legalLinkLabel: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
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

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.review': HomeReview;
      'legal.section': LegalSection;
      'media.case-image': MediaCaseImage;
      'media.press-logo': MediaPressLogo;
      'navigation.menu-item': NavigationMenuItem;
      'news.article': NewsArticle;
      'portfolio.metric': PortfolioMetric;
      'portfolio.video-group': PortfolioVideoGroup;
      'shared.footer': SharedFooter;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
