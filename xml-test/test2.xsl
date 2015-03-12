<?xml version="1.0"?>
<xsl:transform
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  version="1.0"
>

  <xsl:template match="/">
    <html>
      <head>
         <style>
              a {
		  text-decoration: none;
                  padding:3px;  
                  color: #5151FF;
	      }
              a:hover{
                  color: ;
	      }
         </style>
       </head>
      <body>
	<table border="1">

	  <tr valign="top">	
		<td>
		   <xsl:apply-templates mode="toc"/>
                </td>
		<td>
		   <xsl:apply-templates/>
                   <hr/>
		</td>
	  </tr>
        </table>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="sect1" mode="toc">
    <a href="#{title}"><xsl:value-of select="title"/></a><br/>
  </xsl:template>
  
  <xsl:template match="sect1">
    <div>
      <h2><a name="{title}"><xsl:value-of select="title"/></a></h2>
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xsl:template match="title"/>

  <xsl:template match="info">
    <p><xsl:apply-templates/></p>
  </xsl:template>

</xsl:transform>
