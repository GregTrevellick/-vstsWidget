$("iframe#twitter-widget-0").waitUntilExists(function () {
    $("iframe#twitter-widget-0").contents().find('head').append(
        '<style>' +
        'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent { padding: 0px !important; } ' +
        'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent > div { top: 0px !important; } ' +
        'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent > h1 { font-size: 12px !important; line-height: 1px !important; } ' +
        'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent { padding: 1px !important; } ' +
        'body > div > div.timeline-Header.timeline-InformationCircle-widgetParent > div { top: 1px !important; right: 30px !important; } ' +
        'body > div > footer { padding: 0px !important } ' +
        '</style >'
    );

    $("iframe#twitter-widget-0").contents().find('body > div > div.timeline-Header.timeline-InformationCircle-widgetParent > h1').append(
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        '<a href="https://gregtrevellick.github.io/More/">' +
            'More' +
        '</a>'
    );
});