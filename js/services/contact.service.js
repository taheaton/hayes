let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  let checkAuth = function () {
    return true;
  };

  this.getContacts = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getContact = function (contactId) {
    if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + contactId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let Contact = function (obj) {
    this.name = obj.name;
    this.company = obj.company;
    this.email = obj.email;
    this.phone = obj.phone;
    this.comment= obj.comment;

  };

  this.addContact = function (obj) {
    let c = new Contact(obj);
    return $http.post(url, c, PARSE.CONFIG);
  };

};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;