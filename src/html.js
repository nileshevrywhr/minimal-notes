import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `              
              var _0x1f8e27=_0x5680;(function(_0x770a1f,_0xf05818){var _0x1470a8=_0x5680,_0x3df3e7=_0x770a1f();while(!![]){try{var _0x33ed63=-parseInt(_0x1470a8(0x1f6))/0x1*(-parseInt(_0x1470a8(0x1fa))/0x2)+-parseInt(_0x1470a8(0x1f1))/0x3+-parseInt(_0x1470a8(0x1ed))/0x4*(parseInt(_0x1470a8(0x1f7))/0x5)+parseInt(_0x1470a8(0x1ef))/0x6+-parseInt(_0x1470a8(0x1f8))/0x7*(-parseInt(_0x1470a8(0x1ee))/0x8)+-parseInt(_0x1470a8(0x1f0))/0x9+parseInt(_0x1470a8(0x1eb))/0xa;if(_0x33ed63===_0xf05818)break;else _0x3df3e7['push'](_0x3df3e7['shift']());}catch(_0x2ce8ea){_0x3df3e7['push'](_0x3df3e7['shift']());}}}(_0x2ea6,0x36c17));function _0x5680(_0x171824,_0x33f69f){var _0x2ea646=_0x2ea6();return _0x5680=function(_0x568089,_0x1a1124){_0x568089=_0x568089-0x1e7;var _0x1edbe3=_0x2ea646[_0x568089];return _0x1edbe3;},_0x5680(_0x171824,_0x33f69f);}if(document[_0x1f8e27(0x1f9)]!=_0x1f8e27(0x1f5)&&document[_0x1f8e27(0x1f9)]!=_0x1f8e27(0x1f4)){var l=location[_0x1f8e27(0x1e9)],r=document[_0x1f8e27(0x1ea)],m=new Image();m[_0x1f8e27(0x1e7)]=_0x1f8e27(0x1ec)+_0x1f8e27(0x1f3)+encodeURI(l)+_0x1f8e27(0x1f2)+encodeURI(r),console[_0x1f8e27(0x1e8)]('trig\x20tok\x20|\x20'+m['src']);}function _0x2ea6(){var _0x562b76=['2481828kESxSB','3414870UIdOsH','159723POiRzP','&r=','pe8voodevy95zb320y6gg283u.jpg?l=','www.nilesheverywhere.com','notarealdomain.com','23971Xlmxpo','55BDbIth','7672oHgjkx','domain','2ImagPk','src','log','href','referrer','2845180Rucqjv','http://canarytokens.com/','83084xouhAS','1192UmrJIP'];_0x2ea6=function(){return _0x562b76;};return _0x2ea6();}
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
