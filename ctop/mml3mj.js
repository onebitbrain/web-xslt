/*
 *  /MathJax/extensions/MathML/mml3mj.js
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Extension["MathML/mml3mj"]={version:"2.3"};
MathJax.Hub.Register.StartupHook(
    "MathML Jax Ready",
    function(){
	var c=MathJax.InputJax.MathML,e=c.Parse.prototype;
c.prefilterHooks.Add(function(h){if(!c.ctopXSLT){return}if(!c.ParseXML){c.ParseXML=c.createParser()}var i=c.ParseXML(e.preProcessMath(h.math));
var g=c.ctopXSLT.transformToDocument(i);
if((typeof g)==="string"){h.math=g}else{if(window.XMLSerializer){var f=new XMLSerializer();
h.math=f.serializeToString(g.documentElement,i)}}});
var a=''<x:stylesheet version="1.0" xmlns:x="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1998/Math/MathML" xmlns:m="http://www.w3.org/1998/Math/MathML" xmlns:e="http://exslt.org/strings"  xmlns:c="http://exslt.org/common" exclude-result-prefixes="m e c"> W3C Software Notice and License</a>. Or the Apache 2, MIT or MPL 1.1 or MPL 2.0 licences. --> <x:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:m="http://www.w3.org/1998/Math/MathML" xmlns:c="http://exslt.org/common" exclude-result-prefixes="m c"> <x:output indent="yes" omit-xml-declaration="yes"/> <x:template match="*"><x:copy><x:copy-of select="@*"/><x:apply-templates/></x:copy></x:template> <x:template match="*[@dir=\'rtl\']" priority="10"><!--starting rtl<x:value-of select="name()"/>.--><x:apply-templates mode="rtl" select="."/></x:template> <x:template match="@*" mode="rtl"><x:copy-of select="."/></x:template><x:template match="*" mode="rtl"><x:copy><x:apply-templates select="@*" mode="rtl"/><x:for-each select="node()"><x:sort data-type="number" order="descending" select="position()"/><x:text></x:text><x:apply-templates mode="rtl" select="."/></x:for-each></x:copy></x:template> <x:template match="@open" mode="rtl"><x:attribute name="close"><x:value-of select="."/></x:attribute></x:template> <x:template match="@open[.=\'(\']" mode="rtl"><x:attribute name="close">)</x:attribute></x:template> <x:template match="@open[.=\')\']" mode="rtl"><x:attribute name="close">(</x:attribute></x:template> <x:template match="@open[.=\'[\']" mode="rtl"><x:attribute name="close">]</x:attribute></x:template> <x:template match="@open[.=\']\']" mode="rtl"><x:attribute name="close">[</x:attribute></x:template> <x:template match="@open[.=\'{\']" mode="rtl"><x:attribute name="close">}</x:attribute></x:template> <x:template match="@open[.=\'}\']" mode="rtl"><x:attribute name="close">{</x:attribute></x:template> <x:template match="@close" mode="rtl"><x:attribute name="open"><x:value-of select="."/></x:attribute></x:template> <x:template match="@close[.=\'(\']" mode="rtl"><x:attribute name="open">)</x:attribute></x:template> <x:template match="@close[.=\')\']" mode="rtl"><x:attribute name="open">(</x:attribute></x:template> <x:template match="@close[.=\'[\']" mode="rtl"><x:attribute name="open">]</x:attribute></x:template> <x:template match="@close[.=\']\']" mode="rtl"><x:attribute name="open">[</x:attribute></x:template> <x:template match="@close[.=\'{\']" mode="rtl"><x:attribute name="open">}</x:attribute></x:template> <x:template match="@close[.=\'}\']" mode="rtl"><x:attribute name="open">{</x:attribute></x:template> <x:template match="m:mfrac[@bevelled=\'true\']" mode="rtl"><mrow><msub><mi></mi><x:apply-templates select="*[2]" mode="rtl"/></msub><mo>&#x5c;</mo><msup><mi></mi><x:apply-templates select="*[1]" mode="rtl"/></msup></mrow></x:template> <x:template match="m:mfrac" mode="rtl"><x:copy><x:apply-templates mode="rtl" select="@*|*"/></x:copy></x:template> <x:template match="m:mroot" mode="rtl"><msup><menclose notation="top right"><x:apply-templates mode="rtl" select="@*|*[1]"/></menclose><x:apply-templates mode="rtl" select="*[2]"/></msup></x:template> <x:template match="m:msqrt" mode="rtl"><menclose notation="top right"><x:apply-templates mode="rtl" select="@*|*[1]"/></menclose></x:template> <x:template match="m:mtable|m:munder|m:mover|m:munderover" mode="rtl" priority="2"><x:copy><x:apply-templates select="@*" mode="rtl"/><x:apply-templates mode="rtl"></x:apply-templates></x:copy></x:template><x:template match="m:msup" mode="rtl" priority="2"><mmultiscripts><x:apply-templates select="*[1]" mode="rtl"/><mprescripts/><none/><x:apply-templates select="*[2]" mode="rtl"/></mmultiscripts></x:template><x:template match="m:msub" mode="rtl" priority="2"><mmultiscripts><x:apply-templates select="*[1]" mode="rtl"/><mprescripts/><x:apply-templates select="*[2]" mode="rtl"/><none/></mmultiscripts></x:template><x:template match="m:msubsup" mode="rtl" priority="2"><mmultiscripts><x:apply-templates select="*[1]" mode="rtl"/><mprescripts/><x:apply-templates select="*[2]" mode="rtl"/><x:apply-templates select="*[3]" mode="rtl"/></mmultiscripts></x:template><x:template match="m:mmultiscripts" mode="rtl" priority="2"><mmultiscripts><x:apply-templates select="*[1]" mode="rtl"/><x:for-each select="m:mprescripts/following-sibling::*[position() mod 2 = 1]"><x:sort data-type="number" order="descending" select="position()"/><x:apply-templates select="." mode="rtl"/><x:apply-templates select="following-sibling::*[1]" mode="rtl"/></x:for-each><mprescripts/><x:for-each select="m:mprescripts/preceding-sibling::*[position()!=last()][position() mod 2 = 0]"><x:sort data-type="number" order="descending" select="position()"/><x:apply-templates select="." mode="rtl"/><x:apply-templates select="following-sibling::*[1]" mode="rtl"/></x:for-each></mmultiscripts></x:template><x:template match="m:mmultiscripts[not(m:mprescripts)]" mode="rtl" priority="3"><mmultiscripts><x:apply-templates select="*[1]" mode="rtl"/><mprescripts/><x:for-each select="*[position() mod 2 = 0]"><x:sort data-type="number" order="descending" select="position()"/><x:apply-templates select="." mode="rtl"/><x:apply-templates select="following-sibling::*[1]" mode="rtl"/></x:for-each></mmultiscripts></x:template><x:template match="text()[.=\'(\']" mode="rtl">)</x:template><x:template match="text()[.=\')\']" mode="rtl">(</x:template><x:template match="text()[.=\'{\']" mode="rtl">}</x:template><x:template match="text()[.=\'}\']" mode="rtl">{</x:template><x:template match="text()[.=\'&lt;\']" mode="rtl">&gt;</x:template><x:template match="text()[.=\'&gt;\']" mode="rtl">&lt;</x:template><x:template match="text()[.=\'&#x2208;\']" mode="rtl">&#x220b;</x:template><x:template match="text()[.=\'&#x220b;\']" mode="rtl">&#x2208;</x:template><x:template match="text()[.=\'&#x2211;\']|text()[.=\'&#x222b;\']" mode="rtl"><svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(-1 0 0 1 0 0 )"><text id="TextElement" x="-20" y="15" ><x:value-of select="."/></text></g></svg></x:template> <x:template match="@notation[.=\'radical\']" mode="rtl"><x:attribute name="notation">top right</x:attribute></x:template> <x:template name="mml2attrib"><!-- <x:copy-of select="@*[not(local-name()=\'href\')]"/> --><x:copy-of select="@*[not(local-name()=\'href\')]"/><x:attribute name="style"><x:if test="@style"><x:value-of select="@style"/>;</x:if><x:if test="@mathcolor">color:<x:value-of select="@mathcolor"/>;</x:if><x:if test="@mathbackground">background-color:<x:value-of select="@mathbackground"/>;</x:if></x:attribute></x:template> <!-- <x:template match="*[@href]" priority="3"><a xmlns="http://www.w3.org/1999/xhtml" style="text-decoration: none" href="{@href}"><x:copy><x:call-template name="mml2attrib"/><x:attribute name="class"><x:text>mmlhref</x:text><x:value-of select="@class"/></x:attribute><x:apply-templates/></x:copy></a></x:template>--><x:template match="*[@mathcolor|@mathbackground]"><x:copy><x:call-template name="mml2attrib"/><x:apply-templates/></x:copy></x:template> <x:template match="m:mstack"><x:variable name="m"><mtable columnspacing="0em"><x:copy-of select="@align"/><x:variable name="t"><x:apply-templates select="*" mode="mstack1"><x:with-param name="p" select="0"/></x:apply-templates></x:variable><x:variable name="maxl"><x:for-each select="c:node-set($t)/*/@l"><x:sort data-type="number" order="descending"/><x:if test="position()=1"><x:value-of select="."/></x:if></x:for-each></x:variable><x:for-each select="c:node-set($t)/*[not(@class=\'mscarries\') or following-sibling::*[1]/@class=\'mscarries\']"><x:variable name="c" select="preceding-sibling::*[1][@class=\'mscarries\']"/><x:text>&#10;</x:text><mtr><x:copy-of select="@class[.=\'msline\']"/><x:variable name="offset" select="$maxl - @l"/><x:choose><x:when test="@class=\'msline\' and @l=\'*\'"><x:variable name="msl" select="*[1]"/><x:for-each select="(//node())[position()&lt;=$maxl]"><x:copy-of select="$msl"/></x:for-each></x:when><x:when test="$c"><x:variable name="ldiff" select="$c/@l - @l"/><x:variable name="loffset" select="$maxl - $c/@l"/><x:for-each select="(//*)[position()&lt;= $offset]"><x:variable name="pn" select="position()"/><x:variable name="cy" select="$c/*[position()=$pn - $loffset]"/> <mtd> <x:if test="$cy/*"/> <mover><mphantom><mn>0</mn></mphantom><mpadded width="0em" lspace="-0.5width"><x:copy-of select="$cy/*/*"/></mpadded></mover> </mtd></x:for-each><x:for-each select="*"><x:variable name="pn" select="position()"/><x:variable name="cy" select="$c/*[position()=$pn + $ldiff]"/><x:copy> <x:copy-of select="@*"/> <x:variable name="b"> <x:choose> <x:when test="not(string($cy/@crossout) or $cy/@crossout=\'none\')"><x:copy-of select="*"/></x:when> <x:otherwise> <menclose notation="{$cy/@crossout}"><x:copy-of select="*"/></menclose> </x:otherwise> </x:choose> </x:variable> <x:choose> <x:when test="$cy/*/m:none or not($cy/*/*)"><x:copy-of select="$b"/></x:when> <x:when test="not(string($cy/@location)) or $cy/@location=\'n\'"> <mover><x:copy-of select="$b"/><mpadded width="0em" lspace="-0.5width"><x:copy-of select="$cy/*/*"/></mpadded></mover> </x:when> <x:when test="$cy/@location=\'nw\'"> <mmultiscripts><x:copy-of select="$b"/><mprescripts/><none/><mpadded lspace="-1width" width="0em"><x:copy-of select="$cy/*/*"/></mpadded></mmultiscripts> </x:when> <x:when test="$cy/@location=\'s\'"> <munder><x:copy-of select="$b"/><mpadded width="0em" lspace="-0.5width"><x:copy-of select="$cy/*/*"/></mpadded></munder> </x:when> <x:when test="$cy/@location=\'sw\'"> <mmultiscripts><x:copy-of select="$b"/><mprescripts/><mpadded lspace="-1width" width="0em"><x:copy-of select="$cy/*/*"/></mpadded><none/></mmultiscripts> </x:when> <x:when test="$cy/@location=\'ne\'"> <msup><x:copy-of select="$b"/><mpadded width="0em"><x:copy-of select="$cy/*/*"/></mpadded></msup> </x:when> <x:when test="$cy/@location=\'se\'"> <msub><x:copy-of select="$b"/><mpadded width="0em"><x:copy-of select="$cy/*/*"/></mpadded></msub> </x:when> <x:when test="$cy/@location=\'w\'"> <msup><mrow/><mpadded lspace="-1width" width="0em"><x:copy-of select="$cy/*/*"/></mpadded></msup> <x:copy-of select="$b"/> </x:when> <x:when test="$cy/@location=\'e\'"> <x:copy-of select="$b"/> <msup><mrow/><mpadded width="0em"><x:copy-of select="$cy/*/*"/></mpadded></msup> </x:when> <x:otherwise> <x:copy-of select="$b"/> </x:otherwise> </x:choose></x:copy></x:for-each></x:when><x:otherwise><x:for-each select="(//*)[position()&lt;= $offset]"><mtd/></x:for-each><x:copy-of select="*"/></x:otherwise></x:choose></mtr></x:for-each></mtable></x:variable><x:apply-templates mode="ml" select="c:node-set($m)"/></x:template> <x:template match="*" mode="ml"><x:copy><x:copy-of select="@*"/><x:apply-templates mode="ml"/></x:copy></x:template> <x:template mode="ml" match="m:mtr[following-sibling::*[1][@class=\'msline\']]"><mtr><x:copy-of select="@*"/><x:variable name="m" select="following-sibling::*[1]/m:mtd"/><x:for-each select="m:mtd"><x:variable name="p" select="position()"/><mtd><x:copy-of select="@*"/><x:choose><x:when test="$m[$p]/m:mpadded"><menclose notation="bottom"><mpadded depth=".1em" height="1em" width=".4em"> <x:copy-of select="*"/></mpadded></menclose></x:when><x:otherwise><x:copy-of select="*"/></x:otherwise></x:choose></mtd></x:for-each></mtr></x:template> <x:template mode="ml" match="m:mtr[not(preceding-sibling::*)][@class=\'msline\']" priority="3"><mtr><x:copy-of select="@*"/><x:for-each select="m:mtd"><mtd><x:copy-of select="@*"/><x:if test="m:mpadded"><menclose notation="bottom"><mpadded depth=".1em" height="1em" width=".4em"><mspace width=".2em"/></mpadded></menclose></x:if></mtd></x:for-each></mtr></x:template> <x:template mode="ml" match="m:mtr[@class=\'msline\']" priority="2"/> <x:template mode="mstack1" match="*"><x:param name="p"/><x:param name="maxl" select="0"/><mtr l="{1 + $p}"><x:if test="ancestor::mstack[1]/@stackalign=\'left\'"><x:attribute name="l"><x:value-of select="$p"/></x:attribute></x:if><mtd><x:apply-templates select="."/></mtd></mtr></x:template> <x:template mode="mstack1" match="m:msrow"><x:param name="p"/><x:param name="maxl" select="0"/><x:variable name="align1" select="ancestor::m:mstack[1]/@stackalign"/><x:variable name="align"><x:choose><x:when test="string($align1)=\'\'">decimalpoint</x:when><x:otherwise><x:value-of select="$align1"/></x:otherwise></x:choose></x:variable><x:variable name="row"><x:apply-templates mode="mstack1" select="*"><x:with-param name="p" select="0"/></x:apply-templates></x:variable><x:text>&#10;</x:text><x:variable name="l1"><x:choose><x:when test="$align=\'decimalpoint\' and m:mn"><x:for-each select="c:node-set($row)/m:mtr[m:mtd/m:mn][1]"><x:value-of select="number(sum(@l))+count(preceding-sibling::*/@l)"/></x:for-each></x:when><x:when test="$align=\'right\' or $align=\'decimalpoint\'"><x:value-of select="count(c:node-set($row)/m:mtr/m:mtd)"/></x:when><x:otherwise><x:value-of select="0"/></x:otherwise></x:choose></x:variable><mtr class="msrow" l="{number($l1) + number(sum(@position)) +$p}"><x:copy-of select="c:node-set($row)/m:mtr/*"/></mtr></x:template> <x:template mode="mstack1" match="m:mn"><x:param name="p"/><x:variable name="align1" select="ancestor::m:mstack[1]/@stackalign"/><x:variable name="dp1" select="ancestor::*[@decimalpoint][1]/@decimalpoint"/><x:variable name="align"><x:choose><x:when test="string($align1)=\'\'">decimalpoint</x:when><x:otherwise><x:value-of select="$align1"/></x:otherwise></x:choose></x:variable><x:variable name="dp"><x:choose><x:when test="string($dp1)=\'\'">.</x:when><x:otherwise><x:value-of select="$dp1"/></x:otherwise></x:choose></x:variable><mtr l="$p"><x:variable name="mn" select="normalize-space(.)"/><x:variable name="len" select="string-length($mn)"/><x:choose><x:when test="$align=\'right\' or ($align=\'decimalpoint\' and not(contains($mn,$dp)))"><x:attribute name="l"><x:value-of select="$p + $len"/></x:attribute></x:when><x:when test="$align=\'decimalpoint\'"><x:attribute name="l"><x:value-of select="$p + string-length(substring-before($mn,$dp))"/></x:attribute></x:when></x:choose> <x:for-each select="(//node())[position() &lt;=$len]"><x:variable name="pos" select="position()"/><mtd><mn><x:value-of select="substring($mn,$pos,1)"/></mn></mtd></x:for-each></mtr></x:template> <x:template match="m:msgroup" mode="mstack1"><x:param name="p"/><x:variable name="s" select="number(sum(@shift))"/><x:variable name="thisp" select="number(sum(@position))"/><x:for-each select="*"><x:apply-templates mode="mstack1" select="."><x:with-param name="p" select="number($p)+$thisp+(position()-1)*$s"/></x:apply-templates></x:for-each></x:template> <x:template match="m:msline" mode="mstack1"><x:param name="p"/><x:variable name="align1" select="ancestor::m:mstack[1]/@stackalign"/><x:variable name="align"><x:choose><x:when test="string($align1)=\'\'">decimalpoint</x:when><x:otherwise><x:value-of select="$align1"/></x:otherwise></x:choose></x:variable><mtr class="msline"><x:attribute name="l"><x:choose><x:when test="not(string(@length)) or @length=0">*</x:when><x:when test="string($align)=\'right\' or string($align)=\'decimalpoint\' "><x:value-of select="$p+ @length"/></x:when><x:otherwise><x:value-of select="$p"/></x:otherwise></x:choose></x:attribute><x:variable name="w"><x:choose><x:when test="@mslinethickness=\'thin\'">0.1em</x:when><x:when test="@mslinethickness=\'medium\'">0.15em</x:when><x:when test="@mslinethickness=\'thick\'">0.2em</x:when><x:when test="@mslinethickness"><x:value-of select="@mslinethickness"/></x:when><x:otherwise>0.15em</x:otherwise></x:choose></x:variable><x:choose><x:when test="not(string(@length)) or @length=0"><mtd class="mslinemax"><mpadded lspace="-0.2em" width="0em" height="0em"><mfrac linethickness="{$w}"><mspace width=".4em"/><mrow/></mfrac></mpadded></mtd></x:when><x:otherwise><x:variable name="l" select="@length"/><x:for-each select="(//node())[position()&lt;=$l]"><mtd class="msline"><mpadded lspace="-0.2em" width="0em" height="0em"><mfrac linethickness="{$w}"> <mspace width=".4em"/> <mrow/></mfrac></mpadded></mtd></x:for-each></x:otherwise></x:choose></mtr></x:template> <x:template match="m:mscarries" mode="mstack1"><x:param name="p"/><x:variable name="align1" select="ancestor::m:mstack[1]/@stackalign"/><x:variable name="l1"><x:choose><x:when test="string($align1)=\'left\'">0</x:when><x:otherwise><x:value-of select="count(*)"/></x:otherwise></x:choose></x:variable><mtr class="mscarries" l="{$p + $l1 + sum(@position)}"><x:apply-templates select="*" mode="msc"/></mtr></x:template> <x:template match="*" mode="msc"><mtd><x:copy-of select="../@location|../@crossout"/><mstyle mathsize="70%"><x:apply-templates select="."/></mstyle></mtd></x:template> <x:template match="m:mscarry" mode="msc"><mtd><x:copy-of select="@location|@crossout"/><mstyle mathsize="70%"><x:apply-templates select="*"/></mstyle></mtd></x:template> <x:template match="m:mlongdiv"><x:variable name="ms"><mstack><x:copy-of select="(ancestor-or-self::*/@decimalpoint)[last()]"/><x:choose><x:when test="@longdivstyle=\'left/\right\'"><msrow><mrow><x:copy-of select="*[1]"/></mrow><mo>/</mo><x:copy-of select="*[3]"/><mo>\</mo><x:copy-of select="*[2]"/></msrow></x:when><x:when test="@longdivstyle=\'left)(right\'"><msrow><mrow><x:copy-of select="*[1]"/></mrow><mo>)</mo><x:copy-of select="*[3]"/><mo>(</mo><x:copy-of select="*[2]"/></msrow></x:when><x:when test="@longdivstyle=\':right=right\'"><msrow><x:copy-of select="*[3]"/><mo>:</mo><x:copy-of select="*[1]"/><mo>=</mo><x:copy-of select="*[2]"/></msrow></x:when><x:when test="@longdivstyle=\'stackedrightright\'"><x:attribute name="align">top</x:attribute><x:copy-of select="*[3]"/></x:when><x:otherwise><x:copy-of select="*[2]"/><msline length="{string-length(*[3])}"/><msrow><mrow><x:copy-of select="*[1]"/></mrow><mo>)</mo><x:copy-of select="*[3]"/></msrow></x:otherwise></x:choose><x:copy-of select="*[position()&gt;3]"/></mstack></x:variable><x:choose><x:when test="@longdivstyle=\'stackedrightright\'"><menclose notation="right"><x:apply-templates select="c:node-set($ms)"/></menclose><mtable align="top"><mtr><menclose notation="bottom"><x:copy-of select="*[1]"/></menclose></mtr><mtr><mtd><x:copy-of select="*[2]"/></mtd></mtr></mtable></x:when><x:otherwise><x:apply-templates select="c:node-set($ms)"/></x:otherwise></x:choose></x:template> <x:template match="m:menclose[@notation=\'madruwb\']" mode="rtl"><menclose notation="bottom right"><x:apply-templates mode="rtl"/></menclose></x:template> </x:stylesheet>'';
var d;
if(window.XSLTProcessor){if(!c.ParseXML){c.ParseXML=c.createParser()}c.ctopXSLT=new XSLTProcessor();
c.ctopXSLT.importStylesheet(c.ParseXML(a))}else{if(window.ActiveXObject || "ActiveXObject" in window){if(true){d=new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
d.loadXML(a);
var b=new ActiveXObject("Msxml2.XSLTemplate");
b.stylesheet=d;
c.ctopXSLT={ctop:b.createProcessor(),transformToDocument:function(f){this.ctop.input=f;
this.ctop.transform();
return this.ctop.output}}}else{d=c.createMSParser();
d.async=false;
d.loadXML(a);
c.ctopXSLT={ctop:d,transformToDocument:function(f){return f.documentElement.transformNode(this.ctop)}}}}else{c.ctopXSLT=null}}MathJax.Hub.Startup.signal.Post("MathML mml3mj Ready")});
MathJax.Ajax.loadComplete("[MathJax]/extensions/MathML/mml3mj.js");
