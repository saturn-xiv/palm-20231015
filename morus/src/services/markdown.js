"use strict";

import {MarkdownToHtmlResponse} from '../protocols/morus_pb';

export const to_html = (call, callback) => {
    var reply = new MarkdownToHtmlResponse();
    reply.setPayload('hello, ' + reply.request.getPayload());
    callback(null, reply);
}
