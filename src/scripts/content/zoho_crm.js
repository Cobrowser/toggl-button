/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#leftPanel:not(.toggl)', {observe: true}, function (elem) {
    var link, description, newElem, freeSpace, typeTag, tagLead, tagDeal, sourceTag,
        tags = [],
        numElem = $('#entIdForZMail', elem),
        titleElem = $('.dvTitle', elem),
        tagLeadSource = $('[id="value_Lead Source"]'),
        tagLead = $('[id="headerlabel_Lead Owner"]');
        tagDeal = $('[id="headerlabel_Potential Owner"]');

    if(tagDeal || tagLead) {
        typeTag = (tagDeal ? tags.push('Deal') : tags.push('Lead'));
        if(tagLeadSource.innerText.length) {
            tags.push('source_' + tagLeadSource.innerText.toLowerCase());
        } else {
            tags.push('source_none');
        }

        description = titleElem.innerText;

        if (numElem !== null) {
            description = numElem.innerText + " " + description;
        }

        link = togglbutton.createTimerLink({
            className: 'zoho',
            description: description,
            projectName: 'Sales',
            tags: tags
        });

        newElem = document.createElement('td');
        newElem.appendChild(link);
        newElem.setAttribute('class', 'dvmo');
        newElem.setAttribute('nowrap', null);

        freeSpace = $('table.dvbtnlayer tr', elem).lastChild;
        freeSpace.parentNode.insertBefore(newElem, freeSpace);
    } else {
        $('.toggl-button').remove();
    }
});
