(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(4),i=n(9),r=(n(0),n(321)),p={id:"typescript-mongodb",title:"TypeScript MongoDB"},o={unversionedId:"plugins/typescript-mongodb",id:"plugins/typescript-mongodb",isDocsHomePage:!1,title:"TypeScript MongoDB",description:"This plugin generates TypeScript types for MongoDB models, which makes it relevant for server-side development only. It uses GraphQL directives to declare the types you want to generate and use in your MongoDB backend.",source:"@site/docs/plugins/typescript-mongodb.md",slug:"/plugins/typescript-mongodb",permalink:"/docs/plugins/typescript-mongodb",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-mongodb.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript document nodes",permalink:"/docs/plugins/typescript-document-nodes"},next:{title:"TypeScript Urql",permalink:"/docs/plugins/typescript-urql"}},c=[{value:"What this plugin does?",id:"what-this-plugin-does",children:[]},{value:"Usage Example",id:"usage-example",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Example",id:"example",children:[]}],b={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin generates TypeScript types for MongoDB models, which makes it relevant for server-side development only. It uses GraphQL directives to declare the types you want to generate and use in your MongoDB backend."),Object(r.b)("h3",{id:"what-this-plugin-does"},"What this plugin does?"),Object(r.b)("p",null,"Given the following GraphQL declaration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User @entity {\n    id: String @id\n    username: String! @column\n    email: @column\n}\n")),Object(r.b)("p",null,"We can have the following TypeScript output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ObjectID } from 'mongodb';\n\nexport interface UserDbObject {\n  _id: ObjectID;\n  username: string;\n  email?: string | null;\n}\n")),Object(r.b)("p",null,"This interface can be used for db read/write purposes, thus making communication with the db much more consistent."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Don't install this plugin as devDependency, because you need to import the directives from it.")),Object(r.b)("p",null,Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript-mongodb plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-mongodb?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-mongodb\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"dbTypeSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"DbObject")),Object(r.b)("p",{parentName:"p"},"Customize the suffix for the generated GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"s."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbTypeSuffix: MyType\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"dbInterfaceSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"DbObject")),Object(r.b)("p",{parentName:"p"},"Customize the suffix for the generated GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"interface"),"s."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbInterfaceSuffix: MyInterface\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"objectIdType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"mongodb#ObjectId")),Object(r.b)("p",{parentName:"p"},"Customize the type of ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," fields. You can either specify a type name, or specify ",Object(r.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  objectIdType: ./my-models.ts#MyIdType\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"idFieldName")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"_id")),Object(r.b)("p",{parentName:"p"},"Customize the name of the id field generated after using ",Object(r.b)("inlineCode",{parentName:"p"},"@id")," directive over a GraphQL field."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  idFieldName: id\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumsAsString")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Replaces generated ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," values with ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  enumsAsString: false\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),"),\nso the following definition: ",Object(r.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(r.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(r.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-mongodb\n config:\n   avoidOptionals: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),Object(r.b)("h2",{id:"usage-example"},"Usage Example"),Object(r.b)("p",null,"Once installed, add the directives declaration to your GraphQL Schema definition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    DIRECTIVES,\n    // the rest of your GraphQL types\n  ],\n  resolvers,\n});\n")),Object(r.b)("p",null,"And generate code using ",Object(r.b)("inlineCode",{parentName:"p"},"gql-gen"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"schema: ./src/my-schema.js\nrequire:\n  - ts-node/register\ngenerates:\n  ./src/generated/graphql.ts:\n    plugins:\n      - typescript\n      - typescript-mongodb\n")),Object(r.b)("p",null,"At this point, you can add the directives to your GraphQL definitions, and generate your MongoDB models file."),Object(r.b)("h2",{id:"directives"},"Directives"),Object(r.b)("h4",{id:"entityadditionalfields-additionalentityfields-on-object"},Object(r.b)("inlineCode",{parentName:"h4"},"@entity(additionalFields: [AdditionalEntityFields])")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"OBJECT"),")"),Object(r.b)("p",null,"Use this directive to specify which GraphQL type should have generated MongoDB models."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"embedded: Boolean")," - use this option to declare target entity as child of a greater entity. For example, given the following structure ",Object(r.b)("inlineCode",{parentName:"li"},"{ _id: string, username: string, profile: { name: string }}"),", the GraphQL type ",Object(r.b)("inlineCode",{parentName:"li"},"Profile")," should be declared as embedded."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"additionalFields: [AdditionalEntityFields]")," - specify any additional fields that you would like to add to your MongoDB object, and are not a part of your public GraphQL schema.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type User @entity(additionalFields: [\n { path: "services.login.token", type: "string" }\n]) {\n id: String @id\n email: @column\n}\n')),Object(r.b)("h4",{id:"columnoverridetype-string-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@column(overrideType: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to declare a specific GraphQL field as part of your generated MongoDB type."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrideType: String")," - use this to override the type of the field; for example, if you store dates as ",Object(r.b)("inlineCode",{parentName:"li"},"Date")," but expose them as ",Object(r.b)("inlineCode",{parentName:"li"},"String"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0 If target property is an embedded entity, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"@embedded")," instead.")),Object(r.b)("h4",{id:"id-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@id")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive on the filed that should be mapped to a MongoDB ",Object(r.b)("inlineCode",{parentName:"p"},"_id"),". By default, it should be the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field of the GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"type"),"."),Object(r.b)("h4",{id:"link-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@link")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to declare that a specific field is a link to another type in another table. This will use the ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectID")," type in the generated result."),Object(r.b)("h4",{id:"embedded-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@embedded")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"use this option to declare target entity as child of a greater entity."),Object(r.b)("h4",{id:"mappath-string-on-field_definition"},Object(r.b)("inlineCode",{parentName:"h4"},"@map(path: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"FIELD_DEFINITION"),")"),Object(r.b)("p",null,"Use this directive to override the path or the name of the target field. This would come in handy whenever we would like to create a more complex object structure in the database;\nfor example, if you wish to project a field as ",Object(r.b)("inlineCode",{parentName:"p"},"username")," on your schema, but store it as ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.username")," in your DB.\nYou can either specify the name of the field, or a path to which will lead to its corresponding field in the DB."),Object(r.b)("p",null,"Given the following GraphQL schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type User @entity {\n  username: String @column @map(path: "credentials.username")\n}\n')),Object(r.b)("p",null,"The output should be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface UserDbObject {\n  credentials: {\n    username: string;\n  };\n}\n")),Object(r.b)("h4",{id:"abstractentitydiscriminatorfield-string-on-interface"},Object(r.b)("inlineCode",{parentName:"h4"},"@abstractEntity(discriminatorField: String!)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"INTERFACE"),")"),Object(r.b)("p",null,"Use this directive on a GraphQL interface to mark it as a basis for other database types.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorField")," argument is mandatory and will tell the generator what field name in the database determines what interface the target object is implementing."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'interface BaseNotification @abstractEntity(discriminatorField: "notificationType") {\n  id: ID! @id\n  createdAt: String! @column(overrideType: "Date")\n}\n\ntype TextNotification implements BaseNotification @entity {\n  id: ID!\n  createdAt: String!\n  content: String! @column\n}\n')),Object(r.b)("p",null,"This way, you will get:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface BaseNotificationDbInterface {\n  notificationType: string;\n  _id: ObjectID;\n  createdAt: Date;\n}\n\nexport interface TextNotificationDbObject extends BaseNotificationDbInterface {\n  content: string;\n}\n")),Object(r.b)("h4",{id:"uniondiscriminatorfield-string-on-union"},Object(r.b)("inlineCode",{parentName:"h4"},"@union(discriminatorField: String)")," (on ",Object(r.b)("inlineCode",{parentName:"h4"},"UNION"),")"),Object(r.b)("p",null,"This directive is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"@abstractEntity"),", but for unions (that don't necessarily have any common fields).\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorField")," argument is mandatory and will tell the generator what field name in the database determines what interface the target object is implementing."),Object(r.b)("p",null,"Given the following GraphQL schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type A @entity {\n  fieldA: String @column\n}\n\ntype B @entity {\n  fieldB: String @column\n}\n\nunion PossibleType @union(discriminatorField: "entityType") = A | B\n')),Object(r.b)("p",null,"The output should be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ADbObject {\n  fieldA: string;\n}\n\nexport interface BDbObject {\n  fieldB: string;\n}\n\nexport type PossibleType = { entityType: string } & (ADbObject | BDbObject);\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Given the following GraphQL types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User @entity {\n  id: String! @id\n  username: String! @column\n  email: String! @column\n  profile: Profile! @embedded\n  friendsCount: Int! # this field won't get a generated MongoDB field\n  friends: [User]! @link\n}\n\ntype Profile @entity(embedded: true) {\n  name: String! @column\n  age: Int! @column\n}\n")),Object(r.b)("p",null,"The generated MongoDB models should look like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { ObjectID } from 'mongodb';\n\nexport interface UserDbObject {\n  _id: ObjectID;\n  username: string;\n  email: string;\n  profile: ProfileDbObject;\n  friends: ObjectID[];\n}\n\nexport interface ProfileDbObject {\n  name: string;\n  age: string;\n}\n")))}l.isMDXComponent=!0},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,O=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?i.a.createElement(O,o(o({ref:t},b),{},{components:n})):i.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var b=2;b<r;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);