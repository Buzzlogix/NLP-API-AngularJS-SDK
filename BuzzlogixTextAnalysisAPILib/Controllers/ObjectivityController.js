/**
  *BuzzlogixTextAnalysisAPILib
  *
  * This file was automatically generated for buzzlogix by APIMATIC BETA v2.0 on 11/25/2015
  */

'use strict';
angular.module('BuzzlogixTextAnalysisAPILib').factory('ObjectivityController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * The text should be provided as text/plain in the body
         * @param {string} body    Required parameter: Supply text to be classified.
         *
         * @return {promise<mixed>}
         */
        createReturnEnglishObjectivity : function(body){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/objectivity";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "apikey" : Configuration.apikey
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                body : body
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                if (code == 401) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "No API Key found in headers, body or querystring", errorCode: 401, errorResponse: result.message},result.getContext()));
                    return;
                } else if (code == 403) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "Invalid authentication credentials", errorCode: 403, errorResponse: result.message},result.getContext()));
                    return;
                } else if (code == 429) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "API rate limit exceeded", errorCode: 429, errorResponse: result.message},result.getContext()));
                    return;
                }

                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * The text should be provided as multipart/form-data with the key 'text'. Files can be uploaded.
         * @param {string} body    Required parameter: Supply text to be classified.
         *
         * @return {promise<mixed>}
         */
        createReturnEnglishObjectivityForm : function(body){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/objectivity/form";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "apikey" : Configuration.apikey
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                body : body
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                if (code == 401) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "No API Key found in headers, body or querystring", errorCode: 401, errorResponse: result.message},result.getContext()));
                    return;
                } else if (code == 403) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "Invalid authentication credentials", errorCode: 403, errorResponse: result.message},result.getContext()));
                    return;
                } else if (code == 429) {
                    deffered.reject(APIHelper.appendContext({errorMessage: "API rate limit exceeded", errorCode: 429, errorResponse: result.message},result.getContext()));
                    return;
                }

                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        }
    }
});