/* eslint-disable */
window.onload = function() {
  const invertedObj = new InvertedIndex();
  const fileInput = document.getElementById('file');
  const wrongFiles = [];
  const wrnMessage = '  is not a JSON File';
  const files = [];
  const input = $('#file');
  const allFilesTile = invertedObj.allFilesTitle;
  const dropDownNames = [];
  const register = [];
  const passedFiles = {};

  /**
   * File reader function
   * @param {object} file passed in by the Validate function
   * @param {object} arg object passed
   * @returns {Boolean} return true or false for file structure
   */
  const jsonFileReader = (file, arg) => {
    let readFile = [];
    let validatedFile = {};
    try {
      let reader = new FileReader();
      reader.onload = (e) => {
        try {
          readFile = JSON.parse(e.target.result);
        } catch (error) {
          document.getElementById('user-message').innerHTML = file.name + ' is an invalid JSON file format';
        }
        validatedFile = invertedObj.isValid(readFile[0]);
        console.log(validatedFile);
        document.getElementById('user-message').innerHTML = '';
        document.getElementById('user-message1').innerHTML = '';
        if(validatedFile !== false) {
          if(register.indexOf(file.name) === -1) {
            passedFiles[file.name] = readFile;
            register.push(file.name);
            populateDropDown(file.name);
            document.getElementById('user-message1').innerHTML = file.name + ' File Upload was successful';
          } else if(register.indexOf(file.name) !== -1) {
            document.getElementById('user-message').innerHTML = file.name + ' File Exist';
          }
        } else {
          document.getElementById('user-message').innerHTML = file.name + ' is an invalid JSON file format';
        }
      }
      reader.readAsText(file);
    } catch (error) {
      console.log(error);
      document.getElementById('user-message').innerHTML = file.name + ' is an invalid file format';
      return false;
    }
  };

  $('#upload-btn').click(() => {
      Object.keys(fileInput.files).forEach((file) => {
        if(fileInput.files[file].type === 'application/json' && fileInput.files[file].size === 0) {
          document.getElementById('user-message').innerHTML
          = fileInput.files[file].name + 'is an empty JSON file';
        } if (fileInput.files[file].type === 'application/json') {
          files.push(fileInput.files[file]);
          jsonFileReader(fileInput.files[file], invertedObj);
        } else if (fileInput.files[file].name !== 'application/json') {
          document.getElementById('user-message').innerHTML
          = fileInput.files[file].name + wrnMessage;
        }
      });
    input.replaceWith(input.val(''));
  });
  
  $('#btn-create').on('click', () => {
    deleteTable();
    const bookName = $('#sFile').val();
    document.getElementById('user-message').innerHTML = '';
    document.getElementById('user-message1').innerHTML = '';
    if (bookName === 'All') {
      document.getElementById('user-message').innerHTML = 'No file selected';
    } else {
      let allIndicies = invertedObj.getIndex(bookName);
      if(allIndicies === undefined) {
        invertedObj.createIndex(passedFiles[bookName], bookName);
        let allIndicies = invertedObj.getIndex(bookName);
        let bookLength = invertedObj.allLength[bookName]
        let allBooksTitles = invertedObj.allFilesTitle
        populateTable(allIndicies, bookName, bookLength, allBooksTitles);
      } else {
        document.getElementById('user-message').innerHTML = file.name + ' Index created already';
        let bookLength = invertedObj.allLength[bookName]
        let allBooksTitles = invertedObj.allFilesTitle
        populateTable(allIndicies, bookName, bookLength, allBooksTitles);
      }
    }
  });

  $("#search").keyup(function(){
    deleteTable();
    document.getElementById('user-message').innerHTML = '';
    document.getElementById('user-message1').innerHTML = '';
    const searchstring  = $('#search').val();
    const filterName = $('#sFile').val();
    const wordArray = searchstring.toLowerCase().match(/\w+/g);
    const viewIndexLength = invertedObj.allLength;
    const searchResult = invertedObj.searchFiles(wordArray, filterName);
    if (!searchstring) {
      document.getElementById('user-message').innerHTML = 'Type in a search';
    } else if (filterName === 'All') {
      Object.keys(searchResult).forEach((keys) => {
        populateTable(searchResult[keys],
        keys, viewIndexLength[keys], allFilesTile);
      });
    } else if (filterName !== 'All') {
      populateTable(searchResult[filterName],
      filterName, viewIndexLength[filterName], allFilesTile);
    }
  });
  /**
   * function
   * @param {object} object 
   * @return {any} populate page with data
   */
  const populateTable = (object, fileName, columnLength, allFilesTitle) => {
    
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
  /**
   * function
   */
  const deleteTable = () => {
      $('#table-holder').remove();
      $('figure').append('<div class="display table" id="table-holder"></div>');
  }

  const populateDropDown = (fileName) => {
    let object = fileName;
    $('<option/>').val(object).html(object).appendTo('#sFile');
    
  }
};
