import {
    TextType, TagTextType, BitmapTextType
} from '../../utils/system/GetTextObjectType.js';
import GetTextObjectType from '../../utils/system/GetTextObjectType.js';

var GetWrapText = function (textObject, text) {
    var textObjectType = GetTextObjectType(textObject);
    switch (textObjectType) {
        case TextType:
            text = textObject.runWordWrap(text);
            break;
        case TagTextType:
            text = textObject.getText(text, undefined, undefined, true);
            break;
        case BitmapTextType:
            text = textObject.setText(text).getTextBounds().wrappedText;
            break;
    }
    return text;
}

export default GetWrapText;