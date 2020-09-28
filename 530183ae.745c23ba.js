(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{163:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return b}));var t=n(4),p=n(9),r=(n(0),n(321)),o={id:"java-apollo-android",title:"Java Apollo Android"},c={unversionedId:"plugins/java-apollo-android",id:"plugins/java-apollo-android",isDocsHomePage:!1,title:"Java Apollo Android",description:"{@import ../generated-config/java-apollo-android.md}",source:"@site/docs/plugins/java-apollo-android.md",slug:"/plugins/java-apollo-android",permalink:"/docs/plugins/java-apollo-android",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-apollo-android.md",version:"current",sidebar:"sidebar",previous:{title:"Java Resolvers",permalink:"/docs/plugins/java-resolvers"},next:{title:"C#",permalink:"/docs/plugins/c-sharp"}},i=[{value:"Prepare your env",id:"prepare-your-env",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:i};function b(e){var a=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin and presets creates generated mappers and parsers for a complete type-safe GraphQL requests, for developers that uses Apollo Android runtime."),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"java-apollo-android plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java-apollo-android?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(t.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(t.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/java-apollo-android\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"package")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Customize the Java package name for the generated operations. The default package name will be generated according to the output file path."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    package: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typePackage")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Customize the Java package name for the types generated based on input types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    typePackage: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentPackage")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Customize the Java package name for the fragments generated classes."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    fragmentPackage: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fileType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"FileType")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),Object(r.b)("h2",{id:"prepare-your-env"},"Prepare your env"),Object(r.b)("p",null,"To get started with this plugins and preset, make sure you have the following installed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NodeJS (10 or later)"),Object(r.b)("li",{parentName:"ul"},"NPM or Yarn")),Object(r.b)("p",null,"Run the following in your Android project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"  yarn init --yes\n  yarn add @graphql-codegen/cli graphql @graphql-codegen/java-apollo-android\n")),Object(r.b)("p",null,"Then, create ",Object(r.b)("inlineCode",{parentName:"p"},"codegen.yml")," with the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'schema: POINT_TO_YOUR_SCHEMA\ndocuments: POINT_TO_YOUR_GRAPHQL_OPERATIONS\ngenerates:\n  ./app/src/main/java/:\n    preset: java-apollo-android\n    config:\n      package: "com.my.app.generated.graphql"\n      fragmentPackage: "com.my.app.generated.graphql"\n      typePackage: "type"\n    plugins:\n      - java-apollo-android\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also, make sure to add ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," to your ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," file.")),Object(r.b)("p",null,"To integrate with your Gradle build, you can add the following to your app Gradle file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'preBuild.doFirst {\n    def proc = "yarn graphql-codegen".execute()\n    proc.waitForProcessOutput(System.out, System.err)\n}\n\nbuild.dependsOn preBuild\n')),Object(r.b)("p",null,"This will make sure to run and generate output before each time you build your project."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"You can find a ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-codegen-appsync-android-example"}),"repository with a working example using AppSync")))}b.isMDXComponent=!0},321:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return j}));var t=n(0),p=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=p.a.createContext({}),b=function(e){var a=p.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},s=function(e){var a=b(e.components);return p.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return p.a.createElement(p.a.Fragment,{},a)}},d=p.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(n),d=t,j=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return n?p.a.createElement(j,c(c({ref:a},l),{},{components:n})):p.a.createElement(j,c({ref:a},l))}));function j(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);