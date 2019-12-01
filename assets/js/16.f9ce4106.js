(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{273:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"releasing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releasing","aria-hidden":"true"}},[e._v("#")]),e._v(" Releasing")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Important!")]),e._v(" "),a("p",[e._v("Note: The following checklist is for committers only!")]),e._v(" "),a("p",[e._v("For people who want to contribute a pull request, this isn't relevant!")])]),e._v(" "),a("p",[e._v("To release a new version, this checklist should be followed:")]),e._v(" "),a("p",[e._v("[_] Add a section to the top of "),a("router-link",{attrs:{to:"/RELEASE.html"}},[e._v("the release notes")]),e._v(".")],1),e._v(" "),a("p",[e._v("[_] Be sure "),a("router-link",{attrs:{to:"/"}},[e._v("the read me file")]),e._v(" is up to date, along with all the files in "),a("a",{attrs:{href:"../docs"}},[e._v("docs")]),e._v(".")],1),e._v(" "),a("p",[e._v("[_] Find any hardcoded version numbers in "),a("a",{attrs:{href:"../package.json"}},[e._v("the package file")]),e._v(" and change them.")]),e._v(" "),a("p",[e._v("[_] Minify the various library versions with "),a("code",[e._v("npm run build")]),e._v(".")]),e._v(" "),a("p",[e._v("[_] Add the new files: "),a("code",[e._v("git add bin/abcjs*_x.x.x*")]),e._v(".")]),e._v(" "),a("p",[e._v("[_] IMPORTANT! Change the version number (probably line 3) in "),a("code",[e._v("package.json")]),e._v(" BACK to the old version. (It will be changed automatically by the npm step.)")]),e._v(" "),a("p",[e._v("[_] Check the minified versions and other changed files in.")]),e._v(" "),a("p",[e._v("[_] Change the version in "),a("a",{attrs:{href:"../package.json"}},[e._v("the package file")]),e._v(" with "),a("code",[e._v("npm version patch")]),e._v(" <-- or "),a("code",[e._v("minor")]),e._v(", or "),a("code",[e._v("major")]),e._v(".")]),e._v(" "),a("p",[e._v("[_] Update npm with "),a("code",[e._v("npm publish")]),e._v(".")]),e._v(" "),a("p",[e._v("[_] Push the change that npm publish created with "),a("code",[e._v("git push")]),e._v(".")]),e._v(" "),a("p",[e._v("[_] Push new documentation with "),a("code",[e._v("./deploy-docs.sh")]),e._v(".")]),e._v(" "),a("p",[e._v('[_] On github, "Draft a new release".')]),e._v(" "),a("ul",[a("li",[e._v('Click "releases".')]),e._v(" "),a("li",[e._v('Click "draft a new release"')]),e._v(" "),a("li",[e._v('The tag should be the release number (i.e. "3.0.0")')]),e._v(" "),a("li",[e._v('The title should be "Version 3.0.0 release"')]),e._v(" "),a("li",[e._v("The description should be a couple sentences about what the release is.")])]),e._v(" "),a("p",[e._v("[_] Read through all the issues to see if any should be closed.")]),e._v(" "),a("p",[e._v("[_] Update the "),a("a",{attrs:{href:"https://github.com/paulrosen/abcjs-configurator",target:"_blank",rel:"noopener noreferrer"}},[e._v("configurator"),a("OutboundLink")],1),e._v(" and deploy it.")]),e._v(" "),a("p",[e._v("[_] Update https://abcjs.net and the examples on github.")]),e._v(" "),a("p",[e._v("[_] Also release a new version of the "),a("a",{attrs:{href:"https://wordpress.org/plugins/abc-notation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress plugin"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);