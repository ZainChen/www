webpackJsonp([28],{80:function(n,r){n.exports="## Dialog\r\n\r\n\u5bf9\u8bdd\u6846\u901a\u77e5\u7528\u6237\u4efb\u52a1\uff0c\u53ef\u4ee5\u5305\u542b\u5173\u952e\u4fe1\u606f\uff0c\u9700\u8981\u51b3\u7b56\u6216\u6d89\u53ca\u591a\u4e2a\u4efb\u52a1\u3002\r\n\r\n## \u4f7f\u7528\r\n\r\n```html\r\n<m-dialog\r\n  id=\"m-dialog-alert\"\r\n  onOpening\r\n  onOpened\r\n  onClosing\r\n  onClosed\r\n  onScrim\r\n  onCancel\r\n  onConfirm\r\n  message=\"<p>Discard draft?</p>\"\r\n  cancel-button=\"{\r\n    text: 'Cancel'\r\n  }\"\r\n  confirm-button=\"{\r\n    text: 'Discard'\r\n  }\"\r\n></m-dialog>\r\n```\r\n\r\n## Omi \u4e2d\u4f7f\u7528\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-dialog\r\n  onOpening={this.onOpenClose}\r\n  onOpened={this.onOpenClose}\r\n  onClosing={this.onOpenClose}\r\n  onClosed={this.onOpenClose}\r\n  onScrim={this.onClose}\r\n  onCancel={this.onClose}\r\n  onConfirm={this.onConfirm}\r\n  show={this.alertShow}\r\n  message={<p>Discard draft?</p>}\r\n  cancel-button={{\r\n    text: 'Cancel'\r\n  }}\r\n  confirm-button={{\r\n    text: 'Discard'\r\n  }}\r\n/>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| show | boolean | -- | \u662f\u5426\u663e\u793a\u5bf9\u8bdd\u6846 |\r\n| scrollable | boolean | -- | \u662f\u5426\u5728\u6709\u6eda\u52a8\u6761\u65f6\u663e\u793a\u4e0a\u4e0b\u8fb9\u6846\u7ebf |\r\n| title | string | -- | \u5bf9\u8bdd\u6846\u6807\u9898 |\r\n| message | string/dom | -- | \u5bf9\u8bdd\u6846\u5185\u5bb9 |\r\n| cancel-button | object | -- | \u5bf9\u8bdd\u6846\u53d6\u6d88\u6309\u94ae\u5185\u5bb9\uff0c\u652f\u6301\u6240\u6709 m-icon \u5c5e\u6027 |\r\n| confirm-button | object | -- | \u5bf9\u8bdd\u6846\u786e\u8ba4\u6309\u94ae\u5185\u5bb9\uff0c\u652f\u6301\u6240\u6709 m-icon \u5c5e\u6027 |\r\n| onOpening | function | -- | \u5bf9\u8bdd\u6846\u6253\u5f00\u8fc7\u7a0b\u89e6\u53d1 |\r\n| onOpened | function | -- | \u5bf9\u8bdd\u6846\u6253\u5f00\u5b8c\u6210\u540e\u89e6\u53d1 |\r\n| onClosing | function | -- | \u5bf9\u8bdd\u6846\u5173\u95ed\u8fc7\u7a0b\u89e6\u53d1 |\r\n| onClosed | function | -- | \u5bf9\u8bdd\u6846\u5173\u95ed\u5b8c\u6210\u89e6\u53d1 |\r\n| onScrim | function | -- | \u5355\u51fb\u5bf9\u8bdd\u6846\u5468\u56f4\u9ed1\u8272\u900f\u660e\u533a\u57df\u89e6\u53d1 |\r\n| onCancel | function | -- | \u5355\u51fb\u5bf9\u8bdd\u6846\u53d6\u6d88\u6309\u94ae\u89e6\u53d1 |\r\n| onConfirm | function | -- | \u5355\u51fb\u5bf9\u8bdd\u6846\u786e\u8ba4\u6309\u94ae\u89e6\u53d1 |\r\n"}});
//# sourceMappingURL=28.de01183a.chunk.js.map