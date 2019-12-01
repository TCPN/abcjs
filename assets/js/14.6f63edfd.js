(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"basic-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Architecture")]),t._v(" "),n("p",[t._v("There are two forms of this library: the npm form and a minimized form for non-npm users.")]),t._v(" "),n("p",[t._v("When testing abcjs changes locally, there is no build step required. A handy way to test is to run:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm link\n")])])]),n("p",[t._v("On this folder, and")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm link abcjs\n")])])]),n("p",[t._v("In a test application. Then any changes made to the abcjs code will automatically be picked up by that test application's webpack.")]),t._v(" "),n("h2",{attrs:{id:"testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),n("p",[t._v("There are hundreds of test files that are stored outside of this repository. If you wish to run the unit tests, please contact "),n("a",{attrs:{href:"https://paulrosen.net/contact-me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paul Rosen"),n("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),n("p",[t._v("The files in the folder "),n("code",[t._v("test")]),t._v(" contain a number of functions that receive an ABC formatted string and output an easy to read dump of the resulting objects.")]),t._v(" "),n("p",[t._v("These objects are at various stages though the process of handling the ABC. The stages are:")]),t._v(" "),n("ol",[n("li",[t._v("After parsing the ABC string into an internal object.")]),t._v(" "),n("li",[t._v("After laying out the placement of all elements.")]),t._v(" "),n("li",[t._v("After putting all elements in the time that they should sound.")]),t._v(" "),n("li",[t._v("After creating a set of MIDI instructions.")])]),t._v(" "),n("p",[t._v("The method of unit testing is to run all of the test files through the various linters and save the output. Then, after making changes to the code, run the test files through again and compare the output to the original output to understand the effect of the changes.")]),t._v(" "),n("p",[t._v("Here's an example of how to call the linting functions:")]),t._v(" "),n("pre",[n("code",[t._v('import abcjs from \'abcjs/test\';\ndoTest(abcString) {\n\tconst tuneBook = new abcjs.TuneBook(abcString);\n\tconst abcParser = new abcjs.parse.Parse();\n\tconst parserLint = new abcjs.test.ParserLint();\n\tconst div = document.getElementById("comparison-engraving");\n\tconst engraverController = new abcjs.write.EngraverController(div,\n\t     {add_classes: true, staffwidth: 800, staffheight: 400});\n\n\ttuneBook.tunes.forEach((item) => {\n\t\tabcParser.parse(item.abc);\n\t\tconst tune = abcParser.getTune();\n\t\tconst warnings = abcParser.getWarnings();\n\t\tconst lint1 = parserLint.lint(tune, warnings);\n\n\t\tengraverController.engraveABC(tune);\n\t\tconst output = abcjs.test.verticalLint([tune]);\n\t\tconst lint2 = output.join("\\n");\n\n\t\tconst sequence = abcjs.midi.sequence(tune);\n\t\tconst lint3 = abcjs.test.midiSequencerLint(sequence);\n\n\t\tconst midi = abcjs.midi.flatten(sequence);\n\t\tconst lint4 = abcjs.test.midiLint(midi);\n\n\t\tconsole.log("PARSER OUTPUT");\n\t\tconsole.log(lint1);\n\t\tconsole.log("ENGRAVER OUTPUT");\n\t\tconsole.log(lint2);\n\t\tconsole.log("MIDI SEQUENCE OUTPUT");\n\t\tconsole.log(lint3);\n\t\tconsole.log("MIDI OUTPUT");\n\t\tconsole.log(lint4);\n\t});\n}\n')])]),t._v(" "),n("h2",{attrs:{id:"font-info"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#font-info","aria-hidden":"true"}},[t._v("#")]),t._v(" Font Info")]),t._v(" "),n("p",[t._v("The glyphs in "),n("code",[t._v("src/write/abc_glyphs.js")]),t._v(" are generated using the files in the "),n("code",[t._v("font_generator")]),t._v(" folder.")]),t._v(" "),n("p",[t._v("You can see all the glyphs by loading this file in the browser: "),n("code",[t._v("abcjs/font_generator/font_gen.html")]),t._v(".")]),t._v(" "),n("p",[t._v("You can play with the glyphs to help you modify them in this file: "),n("code",[t._v("abcjs/font_generator/font_editor.html")])])])}),[],!1,null,null,null);e.default=s.exports}}]);