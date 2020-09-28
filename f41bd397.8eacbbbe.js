(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(9),o=(n(0),n(321)),i={id:"gatsby",title:"GatsbyJS"},c={unversionedId:"integrations/gatsby",id:"integrations/gatsby",isDocsHomePage:!1,title:"GatsbyJS",description:"If you are building apps using GatsbyJS, you can use GraphQL Code Generator to generate TypeScript types.",source:"@site/docs/integrations/gatsby.md",slug:"/integrations/gatsby",permalink:"/docs/integrations/gatsby",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/gatsby.md",version:"current",sidebar:"sidebar",previous:{title:"Create-React-App",permalink:"/docs/integrations/create-react-app"},next:{title:"Prettier & Linters",permalink:"/docs/integrations/prettier"}},p=[{value:"Community Plugins",id:"community-plugins",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are building apps using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"GatsbyJS"),", you can use GraphQL Code Generator to generate TypeScript types."),Object(o.b)("p",null,"The codegen knows automatically to look for the import of the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," tag for ",Object(o.b)("inlineCode",{parentName:"p"},"gatsby")," package."),Object(o.b)("p",null,"Using the following config file, it should cover everything specific to Gastby:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:8000/___graphql\ndocuments:\n  - ./src/**/*.{ts,tsx}\n  - ./node_modules/gatsby*/!(node_modules)/**/*.js\ngenerates:\n  ./src/graphqlTypes.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(o.b)("p",null,"Now, the codegen should be able to load your GraphQL operations from your source code, and also load all the internal fragments from ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("h2",{id:"community-plugins"},"Community Plugins"),Object(o.b)("p",null,"There are also community Gatsby plugins that integrate with @graphl-codegen:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/d4rekanguok/gatsby-typescript/tree/master/packages/gatsby-plugin-graphql-codegen"}),"gatsby-plugin-graphql-codegen")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/cometkim/gatsby-plugin-typegen"}),"gatsby-plugin-typegen"))))}l.isMDXComponent=!0},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,y=u["".concat(i,".").concat(g)]||u[g]||b[g]||o;return n?a.a.createElement(y,c(c({ref:t},s),{},{components:n})):a.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);