/**
 * An inverted Index Utility class
 * @class
 */
class InvertedIndexUtil {
  /**
   * class constructor
   * @constructor
   */
  constructor() {
    this.objectOfBooks = {};
    this.wrongFiles = [];
    this.wrnMessage = '  Invalid file upload';
    this.result = [];
    this.content = '';
    this.allFiles = {};
  }
  /**
   * File reader function
   * @param {object} files passed in by the Validate function
   * @returns {Boolean} return true or false for file structure
   */
  jsonFileReader(file, arg) {
    let object = [];
    let object1 = [];
    try {
      var reader = new FileReader();
      reader.onload = function(e) {
        object = JSON.parse(e.target.result);
        // console.log(object[0].title);
        document.getElementById('user-message1').innerHTML = '';
        document.getElementById('user-message').innerHTML = '';
        if (object[0].title === undefined) {
          document.getElementById('user-message').innerHTML = 'Invalid Json file format';
          return false;
        }
        if (object[0].title !== undefined) {
          // const invertedObj = new InvertedIndex();
          document.getElementById('user-message1').innerHTML = 'File Upload was successful';
          arg.createIndex(object, file.name);
          $('<option/>').val(file.name).html(file.name).appendTo('#sFile');
          return arg.index;
          // return true
        }
      }
      reader.readAsText(file);
    } catch (error) {
      return false;
      document.getElementById('user-message').innerHTML = 'Invalid Json file format';
    }
  }
  /**
   * function
   * @param {object} object 
   * @return {any} populate page with data
   */
  populateTable(object, fileName, columnLength, allFilesTitle) {
    // const invertedObj = new InvertedIndex();
    console.log(allFilesTitle);
    
    let indexDiv = '<br><br><br><div class = "indexDiv"><h2 id = "titleHeader">' +
    fileName + '</h2>';
    indexDiv += '<table class = "responstable">';
    for(let headloop = 0; headloop <= columnLength; headloop += 1) {
      if(headloop === 0) {
        indexDiv += '<thead><tr><th>Terms</th>';
      } else {
        indexDiv += '<th>' + allFilesTitle[headloop - 1] + '</th>';
      }
    }
    indexDiv += '</tr></thead>';
    // This iteration will mark each column in tbody
    indexDiv += '<tbody>';
    for (let term in object) {
      indexDiv += '<tr><td>' + term + '</td>';
      for (let column = 0; column < columnLength; column++) {
        if (object[term][column]) {
          indexDiv += '<td> <i class = "fa fa-check"' + 'style = "font-size:15px"></i> </td>';
        } else {
          indexDiv += '<td> <i class = "fa fa-times-circle-o"' +
            'aria-hidden = "true"></i></td>';
        }
      }
    }
    indexDiv += '</tr>';
    indexDiv += '</tbody></table>';
    $('.display').append(indexDiv);    
  }

  deleteTable() {
      $("#table-holder").remove();
      $('figure').append('<div class="display table well" id="table-holder"></div>');
  }


  /**
   * function to hold allFiles
   * @param {object} object of indexed objects
   * @param {string} fileName filename of the indexed object
   * @return {Object} returns object
   */
  populateAllFiles(object, fileName) {
    this.allFiles[fileName] = object;
  }
  /**
   * function to hold allFiles
   * @param {string} fileName filename of the indexed object
   * @return {any} 
   */
  populateDropDown(fileName) {
    $('<option/>').val(fileName).html(fileName).appendTo('#sSearch');
  }
}
