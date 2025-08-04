"use strict"

module.exports = {
    routes: [
        {
            method: "GET",
            path: '/item-tags/by-document/:documentid',
            handler: 'custom-controller.findByDocumentId'
        },
            
    ]
}