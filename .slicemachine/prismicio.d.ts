// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * work_experience field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.work_experience[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    work_experience: prismicT.GroupField<Simplify<AboutDocumentDataWorkExperienceItem>>;
    /**
     * education field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.education[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    education: prismicT.GroupField<Simplify<AboutDocumentDataEducationItem>>;
    /**
     * languages field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.languages[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    languages: prismicT.GroupField<Simplify<AboutDocumentDataLanguagesItem>>;
    /**
     * skills field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.skills[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    skills: prismicT.GroupField<Simplify<AboutDocumentDataSkillsItem>>;
}
/**
 * Item in About → work_experience
 *
 */
export interface AboutDocumentDataWorkExperienceItem {
    /**
     * content field in *About → work_experience*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.work_experience[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Item in About → education
 *
 */
export interface AboutDocumentDataEducationItem {
    /**
     * content field in *About → education*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.education[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Item in About → languages
 *
 */
export interface AboutDocumentDataLanguagesItem {
    /**
     * content field in *About → languages*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.languages[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Item in About → skills
 *
 */
export interface AboutDocumentDataSkillsItem {
    /**
     * content field in *About → skills*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.skills[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * category field in *Category*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: Brand design ©
     * - **API ID Path**: category.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    category: prismicT.SelectField<"Brand design ©" | "UX design @" | "Editorial design ¶" | "Motion design ►", "filled">;
    /**
     * projects field in *Category*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: category.projects[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    projects: prismicT.GroupField<Simplify<CategoryDocumentDataProjectsItem>>;
}
/**
 * Item in Category → projects
 *
 */
export interface CategoryDocumentDataProjectsItem {
    /**
     * project field in *Category → projects*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: category.projects[].project
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project: prismicT.RelationField<"project">;
}
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * bio field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * projects_link field in *Homepage*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.projects_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    projects_link: prismicT.LinkField;
}
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * title field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * category field in *Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
    /**
     * date field in *Project*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: project.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * role field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.role
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    role: prismicT.RichTextField;
    /**
     * team field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.team
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    team: prismicT.RichTextField;
    /**
     * description field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * images field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.images[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    images: prismicT.GroupField<Simplify<ProjectDocumentDataImagesItem>>;
}
/**
 * Item in Project → images
 *
 */
export interface ProjectDocumentDataImagesItem {
    /**
     * image field in *Project → images*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.images[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Projects documents */
interface ProjectsDocumentData {
    /**
     * projects field in *Projects*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.projects[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    projects: prismicT.GroupField<Simplify<ProjectsDocumentDataProjectsItem>>;
}
/**
 * Item in Projects → projects
 *
 */
export interface ProjectsDocumentDataProjectsItem {
    /**
     * project field in *Projects → projects*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.projects[].project
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project: prismicT.RelationField<"project">;
}
/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectsDocumentData>, "projects", Lang>;
export type AllDocumentTypes = AboutDocument | CategoryDocument | HomepageDocument | ProjectDocument | ProjectsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocumentDataWorkExperienceItem, AboutDocumentDataEducationItem, AboutDocumentDataLanguagesItem, AboutDocumentDataSkillsItem, AboutDocument, CategoryDocumentData, CategoryDocumentDataProjectsItem, CategoryDocument, HomepageDocumentData, HomepageDocument, ProjectDocumentData, ProjectDocumentDataImagesItem, ProjectDocument, ProjectsDocumentData, ProjectsDocumentDataProjectsItem, ProjectsDocument, AllDocumentTypes };
    }
}