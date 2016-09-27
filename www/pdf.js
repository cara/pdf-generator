/*global cordova, module*/

module.exports = {
    htmlToPDF: function (options, successCallback, errorCallback) {

         if(!options.url && !options.data) throw "No URL or HTML Data found.";

         var url = options.url;
         var data = options.data;
         var docSize = options.documentSize || "A4";
         var landscape = options.landscape || "portrait";
         var type = options.type || "base64";
         var password = options.password || "";

        cordova.exec(successCallback, errorCallback, "PDFGenerator", "htmlToPDF", [ url, data, docSize, landscape, type, password]);
    }
};
