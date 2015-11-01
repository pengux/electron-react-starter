import {camelizeKeys} from 'humps';
import Request from 'superagent';
import When from 'when';

export default {

  root: '//localhost:3000/api/',

  normalizeResponse(response) {
    return camelizeKeys(response.body);
  },

  get(path) {
    var deferred = When.defer();

    Request.get(this.root + path)
    .withCredentials()
    .end(function(res) {
      if ( !res.ok ) {
        deferred.reject(this.normalizeResponse(res));
      } else {
        deferred.resolve(this.normalizeResponse(res));
      }
    }.bind(this));

    return deferred.promise;
  },

  post(path, body) {
    var deferred = When.defer();

    Request.post(this.root + path, body)
    .withCredentials()
    .end(function(res) {
      if ( !res.ok ) {
        deferred.reject(this.normalizeResponse(res));
      } else {
        deferred.resolve(this.normalizeResponse(res));
      }
    }.bind(this));

    return deferred.promise;
  },

  patch(path, body) {
    var deferred = When.defer();

    Request.patch(this.root + path, body)
    .withCredentials()
    .end(function(res) {
      if ( !res.ok ) {
        deferred.reject(this.normalizeResponse(res));
      } else {
        deferred.resolve(this.normalizeResponse(res));
      }
    }.bind(this));

    return deferred.promise;
  },

  put(path, body) {
    var deferred = When.defer();

    Request.put(this.root + path, body)
    .withCredentials()
    .end(function(res) {
      if ( !res.ok ) {
        deferred.reject(this.normalizeResponse(res));
      } else {
        deferred.resolve(this.normalizeResponse(res));
      }
    }.bind(this));

    return deferred.promise;
  },

  del(path) {
    var deferred = When.defer();

    Request.del(this.root + path)
    .withCredentials()
    .end(function(res) {
      if ( !res.ok ) {
        deferred.reject(this.normalizeResponse(res));
      } else {
        deferred.resolve(this.normalizeResponse(res));
      }
    }.bind(this));

    return deferred.promise;
  }

};
