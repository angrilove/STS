﻿$axure.loadCurrentPage({
  "url":"开户.html",
  "generationDate":new Date(1389155705378.35),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"9409c8afd9954647bfde0630f1adfb47",
    "type":"Axure:Page",
    "name":"开户",
    "notes":{
      "默认":"<p><span style=\"font-family:'Heiti SC Light', 'Heiti SC';font-weight:200;\">开户内容包括：用户名、交易密码、身份证等</span></p>"},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"96fac64ab0054700b8b2a342f27f4ca4",
          "label":"",
          "type":"buttonShape",
          "styleType":"h1",
          "visible":true,
          "style":{
            "fontName":"'Heiti SC Light', 'Heiti SC'",
            "fontWeight":"200",
            "fontStyle":"normal",
            "location":{
              "x":380,
              "y":62},
            "size":{
              "width":257,
              "height":33}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a45e9e5621e24fdca00ad90ed55b05dd",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'Heiti SC Light', 'Heiti SC'",
                "fontWeight":"200",
                "fontStyle":"normal",
                "location":{
                  "x":380,
                  "y":62},
                "size":{
                  "width":257,
                  "height":33}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"66b38bf73e014b4bbee5b289c15ea178",
          "label":"",
          "type":"horizontalLine",
          "styleType":"horizontalLine",
          "visible":true,
          "style":{
            "location":{
              "x":200,
              "y":105},
            "size":{
              "width":600,
              "height":10}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/注册/u2_line.png"}},
{
          "id":"ec3556d2fad84ed2b0ef4ecff70bdd0a",
          "label":"",
          "type":"horizontalLine",
          "styleType":"horizontalLine",
          "visible":true,
          "style":{
            "location":{
              "x":200,
              "y":500},
            "size":{
              "width":600,
              "height":10}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/注册/u2_line.png"}},
{
          "id":"3f142894b7834063bb293498011c9733",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "fontName":"'Heiti SC Light', 'Heiti SC'",
            "fontWeight":"200",
            "location":{
              "x":700,
              "y":535},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 对话框",
                      "objectsToFades":[{
                          "objectPath":["4f06833ea31f4e8c9e3414e6996ad74d"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"27f8ca71f46e41f59709e4b91bbf7d5a",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":190,
              "y":123},
            "size":{
              "width":636,
              "height":367}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"17e5ad00a0eb4f83ad9cde4219f2dd21",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":190,
                  "y":123},
                "size":{
                  "width":636,
                  "height":367}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/注册/u5.jpg"}},
{
          "id":"4f06833ea31f4e8c9e3414e6996ad74d",
          "label":"对话框",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":false,
          "style":{
            "location":{
              "x":300,
              "y":210},
            "size":{
              "width":400,
              "height":160},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"96ec5f3ccf6c4ba8a3cf08c030a6141a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "location":{
                  "x":300,
                  "y":210},
                "size":{
                  "width":400,
                  "height":160},
                "visible":false},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"隐藏 对话框",
                      "objectsToFades":[{
                          "objectPath":["4f06833ea31f4e8c9e3414e6996ad74d"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/开户/对话框_u7.jpg"}},
{
          "id":"9be90a1c883649da8630479dae8b50d6",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "fontName":"'Heiti SC Light', 'Heiti SC'",
            "fontWeight":"200",
            "location":{
              "x":200,
              "y":535},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 主页",
                      "target":{
                        "targetType":"page",
                        "url":"主页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"d8e818b2d206451d82c32ef1beb0bea7",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":710,
              "y":89},
            "size":{
              "width":82,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"488163fc252a418b9ccc7b62fecc8290",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":710,
                  "y":89},
                "size":{
                  "width":82,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "96fac64ab0054700b8b2a342f27f4ca4":{
      "scriptId":"u0"},
    "a45e9e5621e24fdca00ad90ed55b05dd":{
      "scriptId":"u1"},
    "66b38bf73e014b4bbee5b289c15ea178":{
      "scriptId":"u2"},
    "ec3556d2fad84ed2b0ef4ecff70bdd0a":{
      "scriptId":"u3"},
    "3f142894b7834063bb293498011c9733":{
      "scriptId":"u4"},
    "27f8ca71f46e41f59709e4b91bbf7d5a":{
      "scriptId":"u5"},
    "17e5ad00a0eb4f83ad9cde4219f2dd21":{
      "scriptId":"u6"},
    "4f06833ea31f4e8c9e3414e6996ad74d":{
      "scriptId":"u7"},
    "96ec5f3ccf6c4ba8a3cf08c030a6141a":{
      "scriptId":"u8"},
    "9be90a1c883649da8630479dae8b50d6":{
      "scriptId":"u9"},
    "d8e818b2d206451d82c32ef1beb0bea7":{
      "scriptId":"u10"},
    "488163fc252a418b9ccc7b62fecc8290":{
      "scriptId":"u11"}}});