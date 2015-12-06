/**
  *BuzzlogixTextAnalysisAPILib
  *
  * This file was automatically generated for buzzlogix by APIMATIC BETA v2.0 on 12/06/2015
  */

'use strict';
angular.module('BuzzlogixTextAnalysisAPILib').factory('TwittersentimentController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * The Tweet should be provided as text/plain in the body
         * @param {string} body    Required parameter: Supply text to be classified.
         *
         * @return {promise<mixed>}
         */
        createReturnEnglishTwitterSentimentPlaintext : function(body){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/twittersentiment";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "X-Mashape-Key" : Configuration.xMashapeKey
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
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * The Tweet should be provided as multipart/form-data with the key 'text'. Files can be uploaded.
         * @param {string} text    Required parameter: Supply text to be classified.
         *
         * @return {promise<mixed>}
         */
        createReturnEnglishTwitterSentimentMultipartForm : function(text){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/twittersentiment";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "X-Mashape-Key" : Configuration.xMashapeKey
            };

            //prepare form data
            var formDataDictionary = {
                "text" : text
            };

            //Remove null values
            APIHelper.cleanObject(formDataDictionary);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                formData : formDataDictionary,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Return the sentiment of an English Tweet supplied in an encoded form using key 'text'.
         * @param {string} text    Required parameter: Supply the Tweet to be classified.
         *
         * @return {promise<mixed>}
         */
        createReturnEnglishTwitterSentimentEncodedForm : function(text){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/twittersentiment";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json",
                "X-Mashape-Key" : Configuration.xMashapeKey
            };

            //prepare form data
            var form = {
                "text" : text
            };

            //Remove null values
            APIHelper.cleanObject(form);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                form : form,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        }
    }
});