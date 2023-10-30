import {
    RichTextEditorPlugin,
    Toolbar,
    Link,
    Image,
    Count,
    HtmlEditor,
    QuickToolbar,
} from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

export default {
    provide: {
        richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
    },
};
